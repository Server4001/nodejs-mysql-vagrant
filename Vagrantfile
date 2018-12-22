# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.require_version ">= 1.8.4"

vm_hostname = "nodejs.mycompany.local"

Vagrant.configure("2") do |config|

  config.vm.box = "server4001/nodejs-mysql-centos"
  config.vm.box_version = "0.1.0"

  config.vm.network :private_network, ip: "10.20.0.92"

  config.vm.hostname = "#{vm_hostname}"
  config.vm.synced_folder "./", "/vagrant", mount_options: ["dmode=777,fmode=777"]

  config.vm.provision :ansible_local do |ansible|
    ansible.playbook = "nodejs.yml"
    ansible.provisioning_path = "/vagrant/provisioners/ansible"
    ansible.install = false
    ansible.verbose = true
    ansible.extra_vars = {
      vm_hostname: "#{vm_hostname}",
    }
  end

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--cpuexecutioncap", "90"]
    vb.customize ["modifyvm", :id, "--memory", "1024"]
    vb.customize ["modifyvm", :id, "--cpus", "2"]
    vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
  end
end
