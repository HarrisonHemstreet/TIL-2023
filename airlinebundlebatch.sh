# If I were to deploy a new JamboJet bundle:
# build bundel in drupal gui
# move the zipped bundle to the correct directory on the ec2:
# ssh ec2-user@drupal
# cd /var/www/drupal/private/bundles
# mv Jambojet-YY-MM-DD-randomnumber.zip /var/www/html/jambojet/3rdparty
# unzip Jambojet-YY-MM-DD-randomnumber.zip
# mv gde gde8 # gde[next number] (for example, if the last one is 5, then you would instead name it gd6)
# mv JamboJet gde # (the JamboJet directory is created after unziping the ziped file that we brought over)
# cd gde
# (this may not be a step for long, but currently we need to check the config file) cat config.js
# make sure every line has valid config key pair values in there. fix them if they don't
# Check the site. newest bundle should be live

cd /var/www/html/$airline_folder_name/3rdparty
mv /var/www/drupal/private/bundles/$airline_folder_name.zip .
unzip $airline_folder_name.zip
if [-d "gde"] && [-d "gde2"] && [-d "gde3"]
then
  rm -rf gde3 && mv gde2 gde3 && mv gde gde2 && mv $airline_folder_name gde
elif [! -d "gde"]
then
  mv $airline_folder_name gde

# /*
what we could do is something like this:

# */
