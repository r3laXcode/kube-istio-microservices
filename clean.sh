#!/usr/bin/env bash

echo 'Clean ...' 

# clean
kubectl delete deployment appstatic-v1 -n exampleistio
kubectl delete svc appstatic -n exampleistio
kubectl delete gateway app-gateway -n exampleistio
kubectl delete virtualservice appstatic -n exampleistio

kubectl delete deployment servicioa-v1 -n exampleistio
kubectl delete svc servicioa -n exampleistio
kubectl delete virtualservice servicioa -n exampleistio

kubectl delete deployment serviciob-v1 -n exampleistio
kubectl delete svc serviciob -n exampleistio
kubectl delete virtualservice serviciob -n exampleistio

echo 'Successfully clean ' 




