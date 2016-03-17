#!/bin/bash

echo "Activating unattended install..."
export DEBIAN_FRONTEND=noninteractive

echo "Configuring phpmyadmin before installation..."
echo 'phpmyadmin phpmyadmin/dbconfig-install boolean true' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/app-password-confirm password ' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/admin-pass password ' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/mysql/app-pass password ' | debconf-set-selections
echo 'phpmyadmin phpmyadmin/reconfigure-webserver multiselect apache2' | debconf-set-selections

echo "Installing LAMP Server components..."
apt-get -qq install lamp-server^ phpmyadmin php5-mcrypt php5-curl > /dev/null 2>&1

echo "Installing git"
apt-get -qq install git > /dev/null 2>&1

echo "Changing the apache2 user to vagrant from www-data..."
sed -i 's/www-data/vagrant/g' /etc/apache2/envvars

echo "Creating the jqdev site configuration..."
CONF=/etc/apache2/sites-available/000-default.conf
cat << EOF > $CONF
<VirtualHost *:80>
ServerName localhost
   DocumentRoot /vagrant/www
   ErrorLog \${APACHE_LOG_DIR}/error.log
   CustomLog \${APACHE_LOG_DIR}/access.log combined

   <Directory /vagrant/www>
      Options FollowSymLinks MultiViews
      AllowOverride All
      Order deny,allow
      Require all granted
    </Directory>
</VirtualHost>

EOF

echo "Enabling the Apache rewrite module..."
a2enmod rewrite > /dev/null 2>&1

echo "Enabling the php5-mcrypt module..."
php5enmod mcrypt > /dev/null 2>&1

echo "Restarting apache2 to catch any configuration changes..."
service apache2 restart > /dev/null 2>&1

echo "Allowing users with blank passwords to connect through phpmyadmin..."
sed -i "s/\/\/ \$cfg\['Servers'\]\[\$i\]\['AllowNoPassword'\]\ =\ TRUE;/\$cfg\['Servers'\]\[\$i\]\['AllowNoPassword'\]\ =\ TRUE;/g" /etc/phpmyadmin/config.inc.php

echo "jqdev is now running on http://localhost:8081"
