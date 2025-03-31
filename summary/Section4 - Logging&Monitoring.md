# 🍨 Section4 - Logging&Monitoring

## Monitor Cluster Components


node-level metrics → 클러스터 내 노드 수, how many of them are healthy


performance metrics → CPU, memory, network, and disc utilization


pod-level  metics → pod 수, 각 pod의 performance metrics(CPU와 memory 사용)


이러한 메트릭을 모니터하고, 저장하고, 분석할 수 있는 솔루션이 필요함.


Kubernets는 모든 특징을 가진 내장 모니터링 솔루션을 제공하지 않음. 그러나 최근에 많은 오픈소스들이 있음.


Metrics server, Prometheus, Elastic Stack, DATADOG, dynatrace


Heapster는 original projects 중 하나, 활성화된 모니터링과 Kubernets의 분석 기능 → deprecated


Kubernetes Cluster 당 하나의 Metrics Server를 가짐.


Metrics Server는 각각의 Kubernetes 노드와 파드로부터 메트릭을 검색. 이를 집계하여 메모리에 저장. In-memory로 디스크에 저장하지 않음. 과거의 성능 데이터를 볼 수 없음.


그러므로 더 강화된 다른 모니터링 솔루션 필요.


노드 위 파드에 대한 메트릭은 어떻게 생성되는가?

- Kubernetes는 각 노드에 agent를 운영함. → kubelet
- kubelet은 Kubernetes API master server로부터 명령을 받음. 노드 위 파드 운영.
- kubelet은 부속 구성 요소로 cAdvisor 또는 Container Advisor를 가짐.
- cAdvisor는 pod로부터 performance metrics를 탐색. metrics server에서 metrics을 사용 가능하도록  kubelet API를 통해 노출.
- 로컬 클러스터에 minikube를 사용하면

```bash
minikube addons enable metrics-server
```

- 다른 환경에서는 git clone을 하여 필요한 구성 요소를 배포.

```bash
git clone https://github-com/kubernetes-incubator/metrics-serve

# deploy a set of pods, services, and roles to enable Metrics Server
# to pul for performance metrics from the nodes in the cluster.
kubectl create -f deploy/1.8+/
```

- 일단 배포되면 Metrics Server가 데이터를 수집하고 처리하기 할 시간이 주어짐.
- 처리되면 kubectl top node를 실행함으로써 클러스터 성능을 확인할 수 있다. → 각 노드의 CPU와 메모리 사용량을 볼 수 있다.
- kubectl top pod를 하면 Kubernetes에서 Pod의 메트릭 성능을 보여줌.

## Practice Test-Monitoring

1. metrics-server 배포

```bash
kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
```

1. 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RPLMMM3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCaa8Nn%2FJWgT%2BfFKgia3WJwvszwUbmtt39sZ7CSpqFfgwIgJGhtm03uUlMyO7UGo%2BMK8v2wI6LeyimwuAeSp5JxPUEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1HjawTzJeCla%2B8TyrcA0Rh2HF7xUMOtuthTArv92w%2BGJpW9cGOI1uvNs95I%2BDTZLgN6HEphgaNUsBvM%2FWW5EHl35AHAmjprTkR2da8CpM%2FB9S8UZ052Z9sPhLIzMS6WdILGJxg73Svoon%2FND2KnkxqR1g2akfWL%2BPJFtCDxtnBmbc6OaR8RSb7Snhu8wl4xnqGEobAaj%2BKkLpuNqSvH%2FkC%2BiRYUtGWksk0uKPebEQ4Gksx1mYG2so%2Flnlyhx7ICADa%2BNDmVOPrVIzw40QaWhJun9SREQNACy0GCLPlaISg4ZX0Dms%2Fu3gehoxCUAbjjKhbPSgaP%2BvCr56L6e0P05A%2FPozzuCfJyCST7Y6SgcPJLZPap7xLiO6uL9ef8uRo9q6Z6hKLu74kRLORbPIGRZ4N%2F%2BoDqVoE%2BILcjwUZdAy7KW3TNF5GCOiASOlFQyk1UQtWv6NtGhXjd0HnE37LnwXYsscRJimPnQsU9YiEXy6%2FPsUr9w%2Fjxm90Ct%2BfDvr8HXksDlBvnqIVCOyCEKu628QwrAj%2BU1vmmB2gMxz3TfLi08UTmfzoMPDShjfUHU5L8ZdpWEYYV8K6gc6Uxv%2Fcaj2BVE5zSSBAM8hR39Puj2qETHllfZMsvfxBJNyh6azG0hs6LDR%2BrznyUkGeMLejqr8GOqUBje87MJiJB1%2Fovjp3lIbLli%2BFwR%2FRJ6xJU4371CakQI0vSQQ%2Bka8doKemLh%2BYiq95ryUvfeqeG%2FTOT78FhvobaCSyTByvtcua%2F6yLWgu4NJvekO%2B%2F5DU23V%2FE%2B7dxpG%2B9gX6cdTA78WZW5mSfvEsoYx5tT7UzrQL0Axz2vqXyeXjbAU4P3O4pzRcJkmG0io1Jzdvx4phZsb%2BOlRF4W4IB5Rz0GMsj&X-Amz-Signature=8cdf69fd92a59cf5d4f564a5e47e630738305616f9e707891c9a5c0e565c28be&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RPLMMM3%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCaa8Nn%2FJWgT%2BfFKgia3WJwvszwUbmtt39sZ7CSpqFfgwIgJGhtm03uUlMyO7UGo%2BMK8v2wI6LeyimwuAeSp5JxPUEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1HjawTzJeCla%2B8TyrcA0Rh2HF7xUMOtuthTArv92w%2BGJpW9cGOI1uvNs95I%2BDTZLgN6HEphgaNUsBvM%2FWW5EHl35AHAmjprTkR2da8CpM%2FB9S8UZ052Z9sPhLIzMS6WdILGJxg73Svoon%2FND2KnkxqR1g2akfWL%2BPJFtCDxtnBmbc6OaR8RSb7Snhu8wl4xnqGEobAaj%2BKkLpuNqSvH%2FkC%2BiRYUtGWksk0uKPebEQ4Gksx1mYG2so%2Flnlyhx7ICADa%2BNDmVOPrVIzw40QaWhJun9SREQNACy0GCLPlaISg4ZX0Dms%2Fu3gehoxCUAbjjKhbPSgaP%2BvCr56L6e0P05A%2FPozzuCfJyCST7Y6SgcPJLZPap7xLiO6uL9ef8uRo9q6Z6hKLu74kRLORbPIGRZ4N%2F%2BoDqVoE%2BILcjwUZdAy7KW3TNF5GCOiASOlFQyk1UQtWv6NtGhXjd0HnE37LnwXYsscRJimPnQsU9YiEXy6%2FPsUr9w%2Fjxm90Ct%2BfDvr8HXksDlBvnqIVCOyCEKu628QwrAj%2BU1vmmB2gMxz3TfLi08UTmfzoMPDShjfUHU5L8ZdpWEYYV8K6gc6Uxv%2Fcaj2BVE5zSSBAM8hR39Puj2qETHllfZMsvfxBJNyh6azG0hs6LDR%2BrznyUkGeMLejqr8GOqUBje87MJiJB1%2Fovjp3lIbLli%2BFwR%2FRJ6xJU4371CakQI0vSQQ%2Bka8doKemLh%2BYiq95ryUvfeqeG%2FTOT78FhvobaCSyTByvtcua%2F6yLWgu4NJvekO%2B%2F5DU23V%2FE%2B7dxpG%2B9gX6cdTA78WZW5mSfvEsoYx5tT7UzrQL0Axz2vqXyeXjbAU4P3O4pzRcJkmG0io1Jzdvx4phZsb%2BOlRF4W4IB5Rz0GMsj&X-Amz-Signature=87241363c1f9cfd2de5d4236fedac2b66b9a0a3d9dbbb358360b7be992970112&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 낮은 파드 → lion

## Managing Application Logs


kubectl logs <pod 이름>


## Practice Test - Monitor Application Logs

1. 
2. USER5라는 사용자가 애플리케이션에 접근하는 데 문제 발생 → 원인 파악 → 로그 확인하기
원인 → Account is locked due to MANY FAILED ATTEMPTS.
3. 
4. 아이템을 구매하려고 하는 동안 문제 보고 → 원인 파악 → 로그 확인하기
원인
    - USER30 - Item Out fo Stock
    - USER4 - 문제❌
    - USER1 - 문제❌
    - USER2 - 문제❌
