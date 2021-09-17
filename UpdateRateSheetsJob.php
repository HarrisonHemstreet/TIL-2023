<?php

namespace Rsis\Services\Job;

use Rsis\Utils\ObjectUtils;

class UpdateRateSheets {

    public function __construct(
        \Rsis\Services\Core\JobService $jobService,
        \Rsis\Services\Core\ConfigService $configService,
        \Rsis\Services\Core\DbNameService $dbNameService,
        \Rsis\Services\Core\DbService $dbService
        // put my new php file here for calling the functions I need
        /* 
            it looks like my file should work in a way that inserts an entry into my new table
            everytime I initiate a rate sheet change IF the rate sheet proposed change is NOT today.
            If the proposed change is NOT today, then we will insert a new entry into the database, and
            then the database will be read by this cronjob once a day at 6am
        */
    ) {
        ObjectUtils::assignProperties($this, get_defined_vars());
    }
    
    /*
       this job will automatically be run since it is in the \Rsis\Services\Job namespace
       see server/common/Rsis/Services/Job/readme.md for more details 
    */
    public function runJob() {
        $thisClass = get_class($this);
        
        if ($this->jobService->shouldRunJob($thisClass, 60 * 60 * 24)) { // 1 min
            if ($this->configService->get('jobService', 'failTestJob')) {
                $this->
                $john = $this->jobService->alertAdmins($thisClass, "$thisClass had a simulated failure", 'To disable this alert, set jobService -> failTestJob to false in your config.');
            }

            return true; // this signifies that the job was run
        }
    }
}

