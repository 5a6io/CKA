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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/be867e9c-0d47-47a3-971e-146d2c8c7945/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3OMXYSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfbbtymLzip0OSzrplxPcsWWoguvExckesvhK4PVudmAiEA7gB%2Btes3s%2BlQrV8gzcXJFBReZGr%2BlyNMqasbof4f4V4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTB4wY%2FKm7jElB7PSrcA%2FzrKLCYZNDNrW5lG313zx1mbA%2F1B2vvvLfCh85VoVB%2BnjjOyB1UV0sretONxcZDMDqDWj3y46sdJ25Zs7zRxhjrJ2qzxFyVdPj6bC0akYDqmOVW3kOVY%2B1rrPzgK6JM2Q02Bl85RPLTut3RdXslhT5bjr1voTVYR9S059c7vDRiVSlSdVPZ9I9Pc0sbUSB6ITlIPR0BBEow9AnVCWrgF2vdqj9Gbx0oHzj%2Ff39k%2BIHa%2BndMQvD6%2FFWOg77jD9peOJoh58MGAmPUgH5bjYfWD15TMoonZTRGgRbePoBbf1jY0iKgfbGQMtbGisv5UP%2F2Lc5BSKdChzRccVwxmDf6Dtaf04jmQ76VyKwTE6eU0C8npAa1ALgHTE3chQWXvvm2FqanOGLFWPVOC1Tipw7oIGmiHIT%2BYZ71UxdKENdK3YZcJFsyRJyWHyPZWZjwZlx9kirgbcpT3HQsESZVTiZuf%2FWxxcTsDYEqj2etY9NKDLGvjbFkioKwcYp2Xcy4Y4VVbsM1F%2FpcSneGUm91k%2FAp0pBwMOQVsz2%2BhBI%2BLCylGSu%2BK%2Bav%2BmluL3Z79uR2rZzA8GrS7nRsrsp23fBZbPVn1ZnYmIF5Z8saNkqxIzloS%2F%2FirQAut1VfxucgCBt0MOz2kL4GOqUBwI7YV%2F0Uo61mtxjTGqCn%2B26lfNMvL3WzZoQkeJaX8D%2BensXkAbA%2FnZ9UMN7QRfaX5onQUDTnM0wBK2UdpVcZrnOZCfuAbV9eWR3nkNR8RkfD5eFP%2F72EaSuKNblKdPobsEDngpO5YaiWkN9bxhdtCfmjX%2BK4vazzYC5LIEkhB7ALimJYel2QGfuL7927Ga4pr1xWfKTyW%2BaoFbkTYh3t70z%2FbwWh&X-Amz-Signature=deec7c7539f693e688527d38ccececb7af20451b0b6ab9875fc69551bea3fbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

1. 가장 CPU 사용률이 많은 노드 → controlplane
2. 가장 메모리 사용률이 많은 노드 → contorlplane
3. 가장 메모리 사용률이 높은 파드 → rabbit

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/a5ad8203-cf78-4c06-9de1-67cb491aedc9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3OMXYSZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfbbtymLzip0OSzrplxPcsWWoguvExckesvhK4PVudmAiEA7gB%2Btes3s%2BlQrV8gzcXJFBReZGr%2BlyNMqasbof4f4V4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTB4wY%2FKm7jElB7PSrcA%2FzrKLCYZNDNrW5lG313zx1mbA%2F1B2vvvLfCh85VoVB%2BnjjOyB1UV0sretONxcZDMDqDWj3y46sdJ25Zs7zRxhjrJ2qzxFyVdPj6bC0akYDqmOVW3kOVY%2B1rrPzgK6JM2Q02Bl85RPLTut3RdXslhT5bjr1voTVYR9S059c7vDRiVSlSdVPZ9I9Pc0sbUSB6ITlIPR0BBEow9AnVCWrgF2vdqj9Gbx0oHzj%2Ff39k%2BIHa%2BndMQvD6%2FFWOg77jD9peOJoh58MGAmPUgH5bjYfWD15TMoonZTRGgRbePoBbf1jY0iKgfbGQMtbGisv5UP%2F2Lc5BSKdChzRccVwxmDf6Dtaf04jmQ76VyKwTE6eU0C8npAa1ALgHTE3chQWXvvm2FqanOGLFWPVOC1Tipw7oIGmiHIT%2BYZ71UxdKENdK3YZcJFsyRJyWHyPZWZjwZlx9kirgbcpT3HQsESZVTiZuf%2FWxxcTsDYEqj2etY9NKDLGvjbFkioKwcYp2Xcy4Y4VVbsM1F%2FpcSneGUm91k%2FAp0pBwMOQVsz2%2BhBI%2BLCylGSu%2BK%2Bav%2BmluL3Z79uR2rZzA8GrS7nRsrsp23fBZbPVn1ZnYmIF5Z8saNkqxIzloS%2F%2FirQAut1VfxucgCBt0MOz2kL4GOqUBwI7YV%2F0Uo61mtxjTGqCn%2B26lfNMvL3WzZoQkeJaX8D%2BensXkAbA%2FnZ9UMN7QRfaX5onQUDTnM0wBK2UdpVcZrnOZCfuAbV9eWR3nkNR8RkfD5eFP%2F72EaSuKNblKdPobsEDngpO5YaiWkN9bxhdtCfmjX%2BK4vazzYC5LIEkhB7ALimJYel2QGfuL7927Ga4pr1xWfKTyW%2BaoFbkTYh3t70z%2FbwWh&X-Amz-Signature=d9d7097625aaf5f8d50cfc7a558e0830ef4a6c024ccd399dc68387ae0490b315&X-Amz-SignedHeaders=host&x-id=GetObject)

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
