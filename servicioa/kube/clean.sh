#!/usr/bin/env bash

kubectl delete deployment appstatic-v1 -n exampleistio
kubectl delete svc appstatic -n exampleistio
kubectl delete gateway app-gateway -n exampleistio
kubectl delete virtualservice appstatic -n exampleistio