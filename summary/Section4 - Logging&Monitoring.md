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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6PJROF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDvwKzCeVEKC2DHCt6%2FGdvose05xPc6J8c8CazTbNyYbQIgUg1Tz9hlWQJz7D4qo24EHrJlqAoFeUgS1pIcIbZ5IzMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO9GtOJxlwoAkyPyCrcA1wd24ocZO%2BFtjISfXRZLCyb%2F6RQCq0FJ8OroCguvDDZKtBMAeqiVPHEF35L2GbFuKMbmZLCi2dpZwnJAlH0HXQgtq3SszpryMFgsNlGI9Km4t294jXAOWqy%2BwcL2SF1%2FMtHZx1hO2c2jcbuKbL8ntCv19kumMwGrRxHgXV6WouYbocqywWZ62JuM0ufnzl4%2FpCF%2FIPUd%2B7qA4gbg40XhrnjhcSIqnRWSi9t56LLFdJ5WIGMd18mS0Xpc2vhWC8rB%2FdDMYVsdOLnIHeHE7vF7%2FkNL0M6ad4Ir%2FhtYsgOgoEKCL9PMtb%2BEAs3WE6X0JRp9plwq6M58RMOVhfbsOCtMYIvX4k24jEirdU%2FtfuTvPZNEAfkTpYX8iLKbL5Zrv3CDYwN0Cs2TdUxgDV3UM%2FdXJ65F4ZdiVjGWQ9rkSSqMhqKivu5HM6WHGy4cg5rAJAUjY8mh3Mvpxl46Hf043xb8d5Ra%2BR4VcaocvGxl%2FZJeiFE3jsz1GQH1Hl1Qhw7jjEvLK%2BUG%2Bwhv3O75CagPrwC3H%2FZk2n2cgs%2BYNsyTTdML4MM8gmHsrgcX1B53%2BDuyiHialRuj6eLgOjCUGyJ9ZS%2BAI%2BTRqyza0an36T0fq3pCwbPk%2FwE%2F5HqhO4b93YVMMim8L4GOqUB%2FSJws7fG0Xsot78Yzy7bU5TZerGKbDmAND7u%2F3cz3PwCoTHhnZCKTDuIULw%2B2rQeeIPnCkz574bAZRPej5JcVBKz2%2BhcMtX62yZCaGcKAdNxoeL4%2F7IbvJevJtHqhEGc1nZmcAomcAA1LsemqGwUxAondiB51Ce2l0d6pFZLs%2B0iszE4Dqxqj1RLGVcQcjekbzztbpGwZTBmGEHCBEDBg5aHV%2FhR&X-Amz-Signature=0a20181dbac8d0acb620811c379520ef4d4dd02640e73791e65c374e5b7198fb&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O6PJROF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDvwKzCeVEKC2DHCt6%2FGdvose05xPc6J8c8CazTbNyYbQIgUg1Tz9hlWQJz7D4qo24EHrJlqAoFeUgS1pIcIbZ5IzMqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO9GtOJxlwoAkyPyCrcA1wd24ocZO%2BFtjISfXRZLCyb%2F6RQCq0FJ8OroCguvDDZKtBMAeqiVPHEF35L2GbFuKMbmZLCi2dpZwnJAlH0HXQgtq3SszpryMFgsNlGI9Km4t294jXAOWqy%2BwcL2SF1%2FMtHZx1hO2c2jcbuKbL8ntCv19kumMwGrRxHgXV6WouYbocqywWZ62JuM0ufnzl4%2FpCF%2FIPUd%2B7qA4gbg40XhrnjhcSIqnRWSi9t56LLFdJ5WIGMd18mS0Xpc2vhWC8rB%2FdDMYVsdOLnIHeHE7vF7%2FkNL0M6ad4Ir%2FhtYsgOgoEKCL9PMtb%2BEAs3WE6X0JRp9plwq6M58RMOVhfbsOCtMYIvX4k24jEirdU%2FtfuTvPZNEAfkTpYX8iLKbL5Zrv3CDYwN0Cs2TdUxgDV3UM%2FdXJ65F4ZdiVjGWQ9rkSSqMhqKivu5HM6WHGy4cg5rAJAUjY8mh3Mvpxl46Hf043xb8d5Ra%2BR4VcaocvGxl%2FZJeiFE3jsz1GQH1Hl1Qhw7jjEvLK%2BUG%2Bwhv3O75CagPrwC3H%2FZk2n2cgs%2BYNsyTTdML4MM8gmHsrgcX1B53%2BDuyiHialRuj6eLgOjCUGyJ9ZS%2BAI%2BTRqyza0an36T0fq3pCwbPk%2FwE%2F5HqhO4b93YVMMim8L4GOqUB%2FSJws7fG0Xsot78Yzy7bU5TZerGKbDmAND7u%2F3cz3PwCoTHhnZCKTDuIULw%2B2rQeeIPnCkz574bAZRPej5JcVBKz2%2BhcMtX62yZCaGcKAdNxoeL4%2F7IbvJevJtHqhEGc1nZmcAomcAA1LsemqGwUxAondiB51Ce2l0d6pFZLs%2B0iszE4Dqxqj1RLGVcQcjekbzztbpGwZTBmGEHCBEDBg5aHV%2FhR&X-Amz-Signature=e8836ebb5fe1b403d6aab1d35a85bf6b6972f05c413aea2cc0337d0051a5ec1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
