#!/usr/bin/env bash

echo 'Apply yaml ' 

# apply yaml file
kubectl apply -f "${PWD}/frontend/kube/frontend.yaml"
kubectl apply -f "${PWD}/servicioa/kube/servicioa.yaml"
kubectl apply -f "${PWD}/serviciob/kube/serviciob.yaml"

echo 'Successfully deploy ' 




