# 🍨 Section13 - Kustomize Basics

## Kustomize Problem Statement & idealogy


환경별로 다양한 구성을 실제로 어떻게 수정할 수 있는가


가장 간단한 해결책은 각 환경마다 하나씩 세 개 개별 디렉토리 생성.


기본적으로 세 가지 다른 환경 모두에서 구성을 복제한 다음 각 환경마다 다른 복제본을 가질 수 있도록 환경별로 속성을 수정하는 것.


dev는 replicas 1. staging은 replicas 2. production은 replicas 5 로 설정.


kustomize를 사용할 때 폴더 구조는 간단한 형식을 따름.


```bash
k8s/
├─ base/ #➡️ share or default configs across all environments
│   ├─ kustomization.yaml
│   ├─ nginx-depl.yaml
│   ├─ redis-depl.yaml
│   └─ service.yaml
└─ overlays/ # ➡️ environment specific configuration that add or modify the base configs
    ├─ dev/
    │   ├─ config-map.yaml
    │   └─ kustomization.yaml
    ├─ prod/
    │   ├─ config-map.yaml
    │   └─ kustomization.yaml
    └─ stg/
        ├─ config-map.yaml
        └─ kustomization.yaml
```


Base + Overlay ⇒ Final Manifests
     Kustomize


kustomize는 kubectl에 내재되어있으므로 다른 패키지를 설치할 필요가 없음.


    kustomize cli를 최신 버전으로 설치하고 싶다면 설치. kubectl은 최신 버전으로 제공되지 않음.


복잡하고 읽기 어려운 템플릿 시스템(예: 헬름)을 사용하는 방법을 배울 필요가 없음.


kustomize가 사용하는 모든 아티팩트는 일반 YAML이며 검증 및 처리할 수 있음.


## Kustomize vs Helm

- Helm은 단순히 환경별로 구성을 사용자 지정하는 도구가 아닙니다. Helm은 또한 앱의 패키지 관리자이기도 함.
- Helm은 조건부, loops, 기능, hooks와 같은 추가 기능을 제공합니다
- Helm 템플릿은 Go 템플릿 구문을 사용하므로 유효하지 않은 YAML.
    - 복잡한 템플릿은 읽기 어려워짐

Kustomize는 YAMl 파일 형식으로 읽기 쉬움.


## Installation/Setup


설치하기 전 Kubernets 클러스터가 실행 중이어야 하고 kubectl이 설치되어있어야 함.


kustomize는 linux, window, mac에 설치 가능.


 운영 체제를 자동으로 감지하고 적절한 버전의 kustomize를 설치할 수 있는 스크립트를 제공하여 kustomize를 매우 쉽게 설치할 수 있도록 했음.


```bash
curl -s "https://raw.githubusercontent.com/kubernets-sigs/kustomize/master/hack/install_kustomize.sh" |  bash

kustomize version --short # 설치된 버전 확인
```


## kustomization.yaml file


kutomize는 kustomization.yaml 파일이라는 특정 파일만 봄.


이름은 kustomization.yaml이어야 하며 만들어야 함.


첫 번째는 kustomize로 관리할 kubernetes reosource 리스트를 포함.


두 번째는 우리가 적용하고 싶은 모든 customization.


관리하고자 하는 모든 자원이 있으며, 그 자원이 무엇이든 바꾸고자 함.


구성된 kustomization.yaml 파일을 가지고 완성된다면 `kustomize build k8s/` 명령어 실행.


Kustomize는 다음을 포함한 kustomization file을 찾음.

    - kustomize로 관리해야 하는 모든 Kubernetes manifest 리스트
    - 적용되어야 하는 모든 커스텀.

kustomize build 명령어는 모든 manifests를 결합하고 정의된 변환을 적용.


kustomize build 명령어는 cluster에 kubernetes 리소스를 적용/배포를 하지 않음.

    - 출력문은 kubectl apply  명령어로 redirect되어야 함.

## Kustomize Output


`kustomize build` 명령어를 실행하면 실제로 모든 구성이 배포되거나 적용되지 않음.


이러한 구성을 적용하려면 어떻게 해야 하는가?


```bash
kustomize build k8s/ | kubectl apply -f -
```


위 명령어를 실행하면 됨. `kustomize build` 의 출력문을 가져와 적용.


kubectl 도구만으로 이 작업을 수행하면 `-f` 옵션 대신 `-k` 옵션으로 사용자 지정 디렉토리를 제공하면 됨. `kubectl apply -k k8s/`


kustomize를 사용하여 삭제하는 방법.


```bash
kustomize build k8s/ | kubectl delete -f -

kubectl delete -k k8s/
```


## Kustomize ApiVersion & Kind


kustomization.yaml 파일에 apiVersion과 kind 특성을 설정할 수 있음.


기술적으로 선택 가능하고 사용자 지정 가능한 기본값이 있지만, 앞으로 어떤 종류의 변경 사항이 발생할 경우를 대비해 이 값들을 하드코딩하는 것을 권장.


## Managing Directories


우리는 k8s 디렉토리의 루트에 kustomization.yaml 파일을 생성할 수 있음. 그리고 yaml 파일 안에 가져오기 원하는 모든 리소스를 나열할 것. api와 db 디렉토리에 있는 deployment yaml 파일과 service yaml 파일.


api와 db이외에 cache와 kafka도 있다고 가정. 루트에 있는 kustomization.yaml 파일에  모든 경로를 정의하는 것은 번거로움. 각 디렉토리 별로 kustomization.yaml 파일 구성. 그리고 루트 디렉토리에 있는 kustomization.yaml 파일에는 파일 디렉토리 경로만 작성. `kustomize build` 실행 시 각 디렉토리의 kustomization.yaml파일을 찾아서 가져오려는 모든 리소스를 찾아서 루트 kustomization.yaml로 가져옴.


## Managing Directories Demo


모든 yaml 파일 경로 지정.


```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/api-depl.yaml
  - api/api-service.yaml
  - cache/redis-config.yaml
  - cache/redis-depl.yaml
  - cache/redis-service.yaml
  - db/db-config.yaml
  - db/db-depl.yaml
  - db/db-service.yaml
```


```bash
kustomize build k8s/ | kubectl apply -f -
kubectl apply -k k8s/
```


더 나은 솔루션.

> k8s/api/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/api-depl.yaml
  - api/api-service.yaml
```

> k8s/cache/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - cache/redis-config.yaml
  - cache/redis-depl.yaml
  - cache/redis-service.yaml
```

> k8s/db/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - db/db-config.yaml
  - db/db-depl.yaml
  - db/db-service.yaml
```

> k8s/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/
  - cache/
  - db/
```


```bash
kubectl apply -k k8s/
kubectl get pods
```


## Lab:Managing Directories

1. k8s 디렉토리에 사전에 정의된 디렉토리 수.
2. k8s 디렉토리의 루트에 kustomization.yaml 파일 생성. db, message-broker, nginx에 정의된 모든 리소스 가져오기. kustmoization.yaml 생성 후 config apply.

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - db/db-config.yaml
      - db/db-depl.yaml
      - db/db-service.yaml
      - message-broker/rabbitmq-config.yaml
      - message-broker/rabbitmq-depl.yaml
      - message-broker/rabbitmq-service.yaml
      - nginx/nginx-depl.yaml
      - nginx/nginx-service.yaml
    ```


    ```bash
    controlplane ~/code ➜  kubectl apply -k k8s
    configmap/db-credentials created
    configmap/redis-credentials created
    service/db-service created
    service/nginx-service created
    service/rabbit-cluster-ip-service created
    deployment.apps/db-deployment created
    deployment.apps/nginx-deployment created
    deployment.apps/rabbitmq-deployment created
    
    controlplane ~/code ➜  k get po
    NAME                                   READY   STATUS    RESTARTS   AGE
    db-deployment-856558f969-q2s75         1/1     Running   0          48s
    nginx-deployment-6fd6985867-clhvf      1/1     Running   0          48s
    nginx-deployment-6fd6985867-jt7gd      1/1     Running   0          48s
    nginx-deployment-6fd6985867-xcpb5      1/1     Running   0          48s
    rabbitmq-deployment-56cbdbfd4c-g89bt   1/1     Running   0          48s
    ```

3. 배포된 pod수.
4. message-broker에 대해 배포된 service type은?

    ```bash
    controlplane ~/code ✖ k get svc
    NAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)           AGE
    db-service                  NodePort    10.43.15.150   <none>        27017:31142/TCP   2m17s
    kubernetes                  ClusterIP   10.43.0.1      <none>        443/TCP           24m
    nginx-service               NodePort    10.43.77.185   <none>        80:30433/TCP      2m17s
    rabbit-cluster-ip-service   
    ClusterIP
       10.43.109.42   <none>        5672/TCP          2m17s
    ```

5. 각 sub 디렉토리에 kustomization.yaml 파일 생성. 디렉토리 내 리소스만 가져오기. root kustomization.yaml 파일에 디렉토리 명시.

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - db-config.yaml
      - db-depl.yaml
      - db-service.yaml
    ```


    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - rabbitmq-config.yaml
      - rabbitmq-depl.yaml
      - rabbitmq-service.yaml
    ```


    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - nginx-depl.yaml
      - nginx-service.yaml
    ```


    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - db/
      - message-broker/
      - nginx/
    ```


    ```bash
    controlplane ~/code ➜  k apply -k k8s
    configmap/db-credentials created
    configmap/redis-credentials created
    service/db-service created
    service/nginx-service created
    service/rabbit-cluster-ip-service created
    deployment.apps/db-deployment created
    deployment.apps/nginx-deployment created
    deployment.apps/rabbitmq-deployment created
    
    controlplane ~/code ➜  k get po
    NAME                                   READY   STATUS    RESTARTS   AGE
    db-deployment-856558f969-znhwn         1/1     Running   0          15s
    nginx-deployment-6fd6985867-7nzvp      1/1     Running   0          15s
    nginx-deployment-6fd6985867-lv86c      1/1     Running   0          15s
    nginx-deployment-6fd6985867-p2lqr      1/1     Running   0          15s
    rabbitmq-deployment-56cbdbfd4c-8ht24   1/1     Running   0          15s
    rabbitmq-deployment-56cbdbfd4c-qm6j9   1/1     Running   0          15s
    ```

6. 총 생성된 pod 수.

## Common Transformers


kustomize에는 여러 transformer가 내장되어 있음. 맞춤형 transformer도 생성 가능.


이 경우, `org: KodeKloud`라는 라벨이 있다고 가정.


모든 kubernetes 객체 이름에 prefix와 suffix를 추가하고 싶음.


우리는 commonLabel transformation을 가지고 있음. 기본적으로 모든 kubernetes 리소스에 공통 label을 추가.


namePrefix와 nameSuffix라는 transformation도 있음. 모든 kubernetes 리소스의 이름에 prefix와 suffix 추가.


namespace도 있음. 특정 네임스페이스 아래에 리소스 생성.


모든 kubernetes 리소스의 metadata 종류, annotation을 추가하고 싶으면 commonAnnotation transformation을 사용할 수 있음.


```yaml
commonLabels:
  org: KodeKloud
  
namespace: lab

namePrefix: KodeKloud-

nameSuffix: -dev

commonAnnotations:
  branch: master
```


## Image Transformers


image transformer는 특정 배포나 컨테이너가 사용할 이미지를 사용자 지정을 통해 수정할 수 있게 해주는 장치.


이미지는 nginx로 설정. 그러나 kustomize를 사용하여 바꿀 수 있음.


kustomization.yaml 파일 정의. 두 특성을 명시해야 함. name과 newName.


name은 우리가 바꾸려는 특정 이미지의 이름을 참조하려는 것. 그러므로 nginx라는 이미지를 사용하는 모든 컨테이너를 찾을 것. 그리고 newName으로 교체.


kustomization.yaml 아래 이름은 image의 이름을 명시. container의 이름이 아님.


태그를 바꾸고 싶으면 image transformer를 사용할 수 있음. newName 대신 newTag 특성을 사용하면 됨.


## Transformers Demo

> k8s/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/
  - db/
  
commonLables:
  department: engineering
```


api와 db 디렉토리 아래에 있는 kustomization.yaml 파일이 관리하는 리소스에 `department: engineering`이 추가됨.

> k8s/api/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/api-depl.yaml
  - api/api-service.yaml
  
commonLabels:
  feature: api
```


api/kustomizaion.yaml 파일에서 관리하는 리소스에만 `feature: api` 가 추가됨.

> k8s/db/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - db/db-config.yaml
  - db/db-depl.yaml
  - db/db-service.yaml

commonLabels:
  feature: db
```


db/kustomization.yaml 파일에서 관리하는 리소스에서 `feature: db` 가 추가됨.


이번에는 모든 리소스에 네임스페이스 추가.

> k8s/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/
  - db/
  
commonLables:
  department: engineering

namespace: debugging
```


모든 리소스의 네임스페이스로 debugging을 가리킴.


api 리소스 이름 뒤에 `-web` 을 추가하고 prefix로 KodeKloud를 추가하고 싶음. db는 prefix는 동일하고 끝에 -storage를 추가.

> k8s/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/
  - db/
  
commonLables:
  department: engineering

namespace: debugging

namePrefix: KodeKloud-
```

> k8s/api/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/api-depl.yaml
  - api/api-service.yaml
  
commonLabels:
  feature: api
  
nameSuffix: -web
```

> k8s/db/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - db/db-config.yaml
  - db/db-depl.yaml
  - db/db-service.yaml

commonLabels:
  feature: db
  
nameSuffix: -storage
```


모든 리소스에 적용할 주석을 적용하려고 함. root kustomization.yaml에 해야 함.

> k8s/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - api/
  - db/
  
commonLables:
  department: engineering

namespace: debugging

namePrefix: KodeKloud-

commonAnnotations:
  logging: verbose
```


현재 Mongo db를 사용 중. 데이터베이스 이미지를 postgres로 바꾸려고 함.


어느 kustomization.yaml 파일에 적용해야 하는가? 루트? 하위 디렉토리? 상황에 따라 다름. 지정한 특정 이미지를 사용하여 리소스를 찾으면 모든 리소스가 변경될 것. 따라서 이러한 변경 사항을 적용할 위치를 파악해야 함. 이 경우에 mongoDB를 사용하는 다른 기능도 있으므로 글로벌하게 적용하고 싶지 않을 수도 있고, 실제로 변경하고 싶지 않을 수도 있음. 특정 데이터베이스 기능만 변경하고 싶을 수도 있음. 따라서 이 경우에는 db/kustomization.yaml에 적용할 것. 그러나 변환을  통해 달성하려는 목적에 따라 달라짐.

> k8s/db/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization

resources:
  - db/db-config.yaml
  - db/db-depl.yaml
  - db/db-service.yaml

commonLabels:
  feature: db
  
nameSuffix: -storage

images:
  - name: mongo
    newName: postgres
    newTag: "4.2" # 숫자가 아닌 string 형태로 작성해야 함.
```


이름은 바뀌지 않고 image가 postgres:4.2로 바뀜.


## Lab:Transformers

1. /root/code/k8s 프로젝트 내 모든 Kubernets 리소스에 할당된 label은?

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - db/
      - monitoring/
      - nginx/
    
    commonLabels:
      sandbox: dev
    ```


    sandbox: dev

2. 모든 데이터베이스 리소스 앞에 접두사로 붙는 이름은?

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - NoSql/
      - Sql/
      - db-config.yaml
    
    namePrefix: data-
    ```

3. 모든 모니터링 리소스가 배포되는 네임스페이스는?

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - grafana-depl.yaml
      - grafana-service.yaml
    
    namespace: logging
    ```

4. 모든 nginx와 monitoirng 리소스에 다음 annotation 할당.

    owner: bob@gmail.com

    > nginx/kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - nginx-depl.yaml
      - nginx-service.yaml
    
    # 추가
    commonAnnotations:
      owner: bob@gmail.com
    ```

    > monitoring/kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - grafana-depl.yaml
      - grafana-service.yaml
    
    namespace: logging
    
    # 추가
    commonAnnotations:
      owner: bob@gmail.com
    ```

5. 프로젝트 내 모든 postgres 이미지를 mysql로 변경.
    > kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - db/
      - monitoring/
      - nginx/
    
    commonLabels:
      sandbox: dev
    
    # 추가
    images:
      - name: postgres
        newName: mysql
    ```


    모든 postgres 이미지를 mysql로 변경해야 하므로 root kustomization.yaml 파일에 image transformer를 추가해야 함.

6. nginx 디렉토리에 모든 nginx 이미지를  nginx:1.23으로 변환.

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1beta1
    kind: Kustomization
    
    resources:
      - nginx-depl.yaml
      - nginx-service.yaml
    
    commonAnnotations:
      owner: bob@gmail.com
    
    images:
      - name: nginx
        newTag: "1.23"
    ```


## Patches Intro


## Different Types of Patches


## Patches Dictionary


## Patches list


## Overlays


## Lab:Overlay


## Components


## Lab:Components

