#!/usr/bin/env bash

kubectl delete deployment servicioa-v1 -n exampleistio
kubectl delete svc servicioa -n exampleistio
kubectl delete virtualservice servicioa -n exampleistio