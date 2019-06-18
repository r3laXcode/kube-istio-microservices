#!/usr/bin/env bash

kubectl delete deployment serviciob-v1 -n exampleistio
kubectl delete svc serviciob -n exampleistio
kubectl delete virtualservice serviciob -n exampleistio