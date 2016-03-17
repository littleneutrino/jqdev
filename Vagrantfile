# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
    config.vm.provider "virtualbox" do |v|
        v.memory = 1024
    end

    config.vm.define "mRequest" do |mRequest|
        # All Vagrant configuration is done here. The most common configuration
        # options are documented and commented below. For a complete reference,
        # please see the online documentation at vagrantup.com.

        # Every Vagrant virtual environment requires a box to build off of.
        mRequest.vm.box = "ubuntu/trusty64"
        mRequest.vm.box_url = "https://cloud-images.ubuntu.com/vagrant/trusty/current/trusty-server-cloudimg-amd64-vagrant-disk1.box"

        # Create a forwarded port mapping which allows access to a specific port
        # within the machine from a port on the host machine. In the example below,
        # accessing "localhost:8081" will access port 80 on the guest machine.
        mRequest.vm.network "forwarded_port", guest: 80, host: 8081
        mRequest.vm.network "forwarded_port", guest: 443, host: 4344

        # Share an additional folder to the guest VM. The first argument is
        # the path on the host to the actual folder. The second argument is
        # the path on the guest to mount the folder. And the optional third
        # argument is a set of non-required options.
        # config.vm.synced_folder "../data", "/vagrant_data", owner: "vagrant", group: "vagrant"

        config.vm.provider "virtualbox" do |vb|
           vb.gui = false
        end

        mRequest.vm.provision "shell", path: "./vagrant-provision.sh", privileged: true
    end
end
