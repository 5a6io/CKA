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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EMMU33%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmSyOqoZKO5ctn05oUWYtZUi%2B70oAo3%2Be6bnghkBksTAiAb0ZyL%2BBqy1navZ6USJWzIsp1%2FBF1%2BLzgJC9AcEmMpnyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxplOdTh1v86QN2C%2BKtwDvlYeWp9ZQH9mAflDpfZU3y2rVA2uazH%2BZQbuLjs9TuVcvvnLJ%2FfqfHX5Fn7cHoD9rL4rdCFS5HEVKfe4c39%2FOERZ1d17v%2Bqzh3RDBJPV9GvQXilTZIQBHp1SQg1DU45kJ1n6ATGn2X7%2F5rMs5s7G4vqMaHKf5cMV5wUczzAkom%2B2GsRb5kUDAFIOwVncOqeyawUryAVdCkK5bBhVvCdRbehvBwniZQjl4uMZt98axpVm2AQMWeCVcm6WVsFk5bJ4A8SPVYS5v1KaxpEtKvazYvr1O0F%2For2u6qp8HvywuYL9TMV0YmG3JP801JUNfPt%2Bl%2BShOQkdlZWs3vbHuxD3aLW6shcVqY5oA9eG5UxbgDn%2Bz7XkLLCb7ICscw3mA7mUAiqJj%2Fr0v7pzWe7Fcre1ACJAByBE4%2B%2F5niSHNHThNoybwG2l0pHxM246u4K5SMcmh0%2FEi7QZG%2Bx6SeTCToqiLBnQgBF6d9GuQkQmLGmCSx%2F%2FkjSW7nEeNB3h5TmeWqTC5GZpssuCacA2sFzLBKsZUEJAIV0MFBx3ZiB8x39CNr1%2FHY31xV9BpI8bHFm5YH81f9XMZGdjq5UVxniDYkC72NmhSbz%2BrAB48z9HZQusVv4UtCYL3ULyiWOHAJIwn4GdwQY6pgHhcdX6lxBkx6kCA6fOk43dz09%2BQ9ehPavbw%2BGm5LioOBNQ3aXVKrPWXP7zehJuIJVrd9YNCOZVH%2FK5eZeIHq0D%2BzltoV%2FDND7sFcA1I3UQ9JLjbShAyot22x%2F1%2BBS1rbXJroQ5DU6zB07tsg3VvEVySzAFbuhIwncgYe10QAAW5UuRVgt7rL9K808AKC0GNP3E23qWeLF7iBjn92SQtOqISHV7UxaQ&X-Amz-Signature=b727a18106ea35c542d16e889f3b7b997b87310dd9e322a066f567ddfb44ba4a&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653EMMU33%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmSyOqoZKO5ctn05oUWYtZUi%2B70oAo3%2Be6bnghkBksTAiAb0ZyL%2BBqy1navZ6USJWzIsp1%2FBF1%2BLzgJC9AcEmMpnyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMxplOdTh1v86QN2C%2BKtwDvlYeWp9ZQH9mAflDpfZU3y2rVA2uazH%2BZQbuLjs9TuVcvvnLJ%2FfqfHX5Fn7cHoD9rL4rdCFS5HEVKfe4c39%2FOERZ1d17v%2Bqzh3RDBJPV9GvQXilTZIQBHp1SQg1DU45kJ1n6ATGn2X7%2F5rMs5s7G4vqMaHKf5cMV5wUczzAkom%2B2GsRb5kUDAFIOwVncOqeyawUryAVdCkK5bBhVvCdRbehvBwniZQjl4uMZt98axpVm2AQMWeCVcm6WVsFk5bJ4A8SPVYS5v1KaxpEtKvazYvr1O0F%2For2u6qp8HvywuYL9TMV0YmG3JP801JUNfPt%2Bl%2BShOQkdlZWs3vbHuxD3aLW6shcVqY5oA9eG5UxbgDn%2Bz7XkLLCb7ICscw3mA7mUAiqJj%2Fr0v7pzWe7Fcre1ACJAByBE4%2B%2F5niSHNHThNoybwG2l0pHxM246u4K5SMcmh0%2FEi7QZG%2Bx6SeTCToqiLBnQgBF6d9GuQkQmLGmCSx%2F%2FkjSW7nEeNB3h5TmeWqTC5GZpssuCacA2sFzLBKsZUEJAIV0MFBx3ZiB8x39CNr1%2FHY31xV9BpI8bHFm5YH81f9XMZGdjq5UVxniDYkC72NmhSbz%2BrAB48z9HZQusVv4UtCYL3ULyiWOHAJIwn4GdwQY6pgHhcdX6lxBkx6kCA6fOk43dz09%2BQ9ehPavbw%2BGm5LioOBNQ3aXVKrPWXP7zehJuIJVrd9YNCOZVH%2FK5eZeIHq0D%2BzltoV%2FDND7sFcA1I3UQ9JLjbShAyot22x%2F1%2BBS1rbXJroQ5DU6zB07tsg3VvEVySzAFbuhIwncgYe10QAAW5UuRVgt7rL9K808AKC0GNP3E23qWeLF7iBjn92SQtOqISHV7UxaQ&X-Amz-Signature=c6566c06ce995c77478a4eb391b6c573c0c0e56005467d2982f6d943ffa12e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
