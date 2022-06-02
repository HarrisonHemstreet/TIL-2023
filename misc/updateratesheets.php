<?php

class UpdateRateSheets {

    public $carrierId = '';

    public function execute($params) {
        $carrierId = ltrim($params['action'], 'updateratesheets.');
        error_log(print_r($params, TRUE));
        switch(CMD){
            default:
                return $this->updateSheets($carrierId);
                break;
        }
    }

    public function updateSheets($carrierId) {
        //--------------------------------------------------------------------------------------------------------------
        // check the customerCostBasis table

        adsfjjjj$db = DatabaseManager::getReadOnlyDB();
        $db->setFetchMode(DB_FETCHMODE_ASSOC);

        $currentRateSheet = '2021 Platinum Plus';
        $newRateSheet = '';
        $carrierId = '90';

        // get the rate sheet settings that do not show up in both the new rate sheet and the old one
        $currentRateSheetServices = "
            select distinct shiptype from costbasis where custom like '$currentRateSheet';
        ";

        $newRateSheetServices = "
            select distinct shiptype from costbasis where custom like '$newRateSheet';
        ";

        $currentRateSheetServicesResult = $db->getAll($currentRateSheetServices);
        $newRateSheetServicesResult = $db->getAll($newRateSheetServices);

        $currCleanArr = array();
        $newCleanArr = array();
        for ($i = 0; $i < count($currentRateSheetServicesResult); $i++) {
            array_push($currCleanArr, $currentRateSheetServicesResult[$i]['shiptype']);
        }
        for ($i = 0; $i < count($newRateSheetServicesResult); $i++) {
            array_push($newCleanArr, $newRateSheetServicesResult[$i]['shiptype']);
        }

        $diffArr = array_merge(array_diff($currCleanArr, $newCleanArr), array_diff($newCleanArr, $currCleanArr));

        $sqlStr = '';
        if(count($diffArr) == 1) {
            $sqlStr .= strtolower($diffArr[0]) . 'costbasis';
        }
        else {
            for($i = 0; $i < count($diffArr); $i++) {
                $sqlStr .= strtolower($diffArr[$i]) . 'costbasis, ';
            }
            $sqlStr .= $diffArr[count($diffArr)];
        }
        
        /*
            get the carrier letter associated with the rate sheet. If you wanna know what I'm talking about,
            look at the customerCostbasis table where costBasis = 'X2021 Platinum Plus'
            costBasis has a letter associated with each rate sheet
                D = DHL
                F = FedEx
                U = UPS
                P = USPS
                X = custom rate sheet
                m = markup
                % = margin
        */
        $carrierLetterSql = "
            SELECT costBasis FROM customerCostBasis WHERE costBasis LIKE '%$currentRateSheet' LIMIT 1;
        ";

        $carrierLetterResult = $db->getAll($carrierLetterSql);

        $carrierLetter = $carrierLetterResult[0]['costBasis'][0];

        // make the final query!
        $sql = "
            SELECT * FROM customerCostBasis
            WHERE costBasisType IN 
            	(
            		SELECT CONCAT(LOWER(`code`),'costbasis') AS costbasistype 
            		FROM shipmenttypes WHERE carrier_id = '{$carrierId}' AND costbasistype NOT IN ('$sqlStr')
            	)
            AND costBasis LIKE CONCAT('$carrierLetter','{$currentRateSheet}'); 
        ";

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------
        // check the custom table

        // get all the settings affected by the current rate sheet
        $getSettingSql = "
            select distinct concat(lower(`shiptype`), 'costbasis') as settingname from costbasis where custom = '$currentRateSheet';
        ";

        $currSettingsResult = $db->getAll($getSettingSql);

        $settingsAffectedByCurrentRateSheet = array();
        for ($i = 0; $i < count($currSettingsResult); $i++) {
            array_push($settingsAffectedByCurrentRateSheet, $currSettingsResult[$i]['settingname']);
        };

        $rateSheetUpdateStatements = "";
        if(count($settingsAffectedByCurrentRateSheet) == 1) {
            // change this to an update statement and $currentRateSheet change to $newRateSheet
            $rateSheetUpdateStatements .= "
                SELECT * FROM customer WHERE $settingsAffectedByCurrentRateSheet[$i] LIKE '$currentRateSheet';";
        }
        else {
            for ($i = 0; $i < count($settingsAffectedByCurrentRateSheet) - 1; $i++) {
            // change this to an update statement and $currentRateSheet change to $newRateSheet
                $rateSheetUpdateStatements .= "
                    SELECT * FROM customer WHERE $settingsAffectedByCurrentRateSheet[$i] LIKE '%$currentRateSheet'; ";
            }
            // change this to an update statement and $currentRateSheet change to $newRateSheet
            $rateSheetUpdateStatements .= "
                SELECT * FROM customer WHERE " . $settingsAffectedByCurrentRateSheet[count($settingsAffectedByCurrentRateSheet) - 1] . " LIKE '%$currentRateSheet';";
        }

        // ----------------------------------------------------------------------------------------------------------------------------------------------------------
        // the results of the queries in both the customerCostBasis table and the customer table

        $customerCostBasisRateSheetUpdateStatementResult = $db->getAll($sql);
        $customerRateSheetUpdateStatementsResults = $db->getAll($rateSheetUpdateStatements);
        return $customerCostBasisRateSheetUpdateStatementResult;
    }
}
?>
