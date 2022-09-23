#!/bin/bash
# style guide: https://google.github.io/styleguide/shellguide.html#s7.4-source-filenames

# We probably should not pass around the variables $1 and $2, so we will
# pass around actual descriptive names so we don't get confused
airline_name=$1;
zipped_file_name=$2;

airline_name_lower_case="${airline_name,,}"
airline_directory_name="${airline_name,,}"

# make sure we are in the right directory
cd "/var/www/html/$airline_name_lower_case/3rdparty"

# move zip file to current directory
mv "/var/www/drupal/private/bundles/$zipped_file_name" "."

unzip "$zipped_file_name";

gde_array=();

for i in *; do
  first_three="${i::3}";
  if [[ "$first_three" == "gde" ]]; then
    gde_array+=($i);
  fi
done

gde_prime=${gde_array[0]};
gde_two=${gde_array[1]};
gde_three=${gde_array[2]};

old_gdes=();
count=$((${#gde_array[@]} - 3))

if [[ $gde_prime == "gde" && $gde_two == "gde2" && $gde_three == "gde3" ]]; then
  # gather up every gde* directory that is not included in prime, two or three so we can delete them
  old_gdes=(${gde_array[@]:3:$count});
  else
  printf "
  You must manually fix the directory structure within /var/www/html/AIRLINE_NAME/3rdparty.\n
  Make sure you have directories named 'gde', 'gde2', 'gde3'.
  If you don't then manually generate the directories.
  You can follow these steps:\n
  1. SSH Tunnel into the Drupal Prod EC2: ssh ec2-user@10.0.21.116\n
  2. cd /var/www/html/jambojet/3rdparty\n
  3. mv /var/www/drupal/private/bundles/ZIPPED_FILE_NAME .\n
  4. unzip ZIPPED_FILE_NAME\n
  5. mv gde gde8 # gde[next number] (for example, if the last one is 5, then you would instead name it gd6)\n
  6. mv AIRLINE_NAME gde # (the JamboJet directory is created after unziping the ziped file that we brought over)\n
  7. cd gde\n
  8. (this may not be a step for long, but currently we need to check the config file) cat config.js\n
  9. make sure every line has valid config key pair values in there. fix them if they don't\n
  10. Check the site. newest bundle should be live\n"

  exit 1;
fi

# check to see if there are any old directories we need to delete
if [[ ${#old_gdes} ]]; then
  for i in "${old_gdes[@]}"; do
    echo "hi, $i";
    rm -rf "$i";
  done
  # ... if so delete them here. loop through here and just rm -rf each directory name
fi

# now we will go through and rename the directories, and delete any we don't need
rm -rf "$gde_three";
mv "$gde_two" "gde3";
mv "$gde_prime" "gde2";

# rename the unzipped directory that is default named after the airline
mv "$airline_name" "gde"

exit 0;

# put this script inside the AirlineBatchBundler.php file (create bundle button?) like this:
# shell_exec('./bash_script.sh airline_name zipped_file_name');
