# MHM first setup

    mkdir ~/rails/design

Setup redesign

    cd ~/rails/design && git clone git@github.com:mhm-hr/redesign.git
    cd ~/rails/design/redesign
    git config --list

    cd ~/rails/design && git clone git@vmgit01.mhm-hr.com:mhm/mhmr.git


Setup standard / mhmr

    cd ~/rails/design && git clone git@vmgit01.mhm-hr.com:mhm/standard.git
    cd ~/rails/design/standard
    bundle
    rake db:drop && rake db:create && rake db:migrate && rake data:migrate && rake db:populate

    rails c
    rails s
    rake spec

# Workflow

Pull mhmr, make sure you are on master and branch is clean

    cd ~/rails/design/mhmr
    git status
    git pull --rebase

Pull redesign, make sure you are on master and branch is clean

    cd ~/rails/design/redesign
    git status
    git pull --rebase

## Copy changed files from redesign to mhmr

    ruby ./scripts/copy_changed_files.rb to_mhmr

## Copy changed files from mhmr to redesign

    ruby ./scripts/copy_changed_files.rb to_redesign
