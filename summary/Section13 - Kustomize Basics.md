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


`Kustomize patches` 는 Kubernetes configs를 수정하는 또 다른 방법 제공.


common transformers와 달리 patches는 Kubernetes 리소스에서 하나 이상의 특정 섹션을 타겟팅하는 보다 "surgical" 접근 방식을 제공.


patch를 생성하기 위해 3 파라미터가 제공되어야 함.

- Operation Type: add/remove/replace
- Target: 이 패치를 어떤 리소스에 적용해야 하는가
    - Kind
    - Version/Group
    - Name
    - Namespace
    - labelSelector
    - AnnotationSelector
- Value: 교체되거나 추가될 값은 무엇인가? (추가/교체 작업에만 필요함)

deployment에 컨테이너 리스트를 갖고 있고 또 다른 컨테이너를 추가하고 싶다면 add operation이 될 것.


remove는 정반대.. 리스트에서 컨테이너를 지우고 싶거나 라벨을 지우고 싶음 → 무엇이든 제거 가능.


replace는 제공된 값을 가져오고 다른 값으로 교체. 기본 구성의 replica count는 5. 실제로는 10을 원함. replica 값은 10이 됨.


api-depl.oyaml파일이 있음. api-deployment라는 이름을 web-deployment라는 이름으로 교체하고 싶음.

> api-depl.yaml

```yaml
apiVersion: apps/v1

kind: Deployment

metadata:
    
name: api-deployment

spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```

> kustomization.yaml

```yaml
patches:
    - target:
          
kind: Deployment

          
name: api-deployment

      
      patch: |- # inline patch
          - op: replace
            
path: /metadata/name

            value: web-deployment
```


이번에는 replicas 값을 바꾸려고 함.

> api-depl.yaml

```yaml
apiVersion: apps/v1

kind: Deployment

metadata:
    
name: api-deployment


spec:
   replicas: 1

   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```

> kustomization.yaml

```yaml
patches:
    - target:
          
kind: Deployment

          
name: api-deployment

      
      patch: |- # inline patch
          - op: replace
            
path: /spec/replicas

            value: 5
```


위 방식은 JSON 6902 Patch임. 참고 사이트: https://datatracker.itef.org/doc/html/rfc6902


patch를 정의하는 두번째 방식. strategic merge patch 방식을 사용하고 싶음.


```yaml
patches:
    - patch: |-
          apiVersion: apps/v1
          kind: Deployment
          metadata:
              name: api-deployment
          spec:
              replicas: 5
```


기존 Kubernetes 구성과 꽤 비슷함. 


## Different Types of Patches


inline 형식과 파일 분리 형식.


patch가 많아지면 어수선해질 수 있음. 별도의 파일로 사용 가능.

- Inline

```yaml
patches:
    - patch: |-
          apiVersion: apps/v1
          kind: Deployment
          metadata:
              name: api-deployment
          spec:
              replicas: 5
```

- Separate File
> kustomization.yaml

```yaml
patches:
    - replica-patch..yaml
```

> replica-patch.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: api-deployment
spec:
    replicas: 5
```


## Patches Dictionary


Add Dictionary

- JSON 6902

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - target:
          kind: Deployment
          name: api-deployment
      patch: |-
          - op: add
            path: /spec/template/metadata/labels/org
            value: KodeKloud
```


추가하고자 하는 라벨의 경로 작성 후 뒤에 키값을 붙임. 그리고 value 지정.


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
               org: KodeKloud
       spec:
           containers:
               - name: nginx
                 image: nginx
```

- strategic merge patch

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - label-patch..yaml
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   template:
       metadata:
           labels:
               org: KodeKloud
```


추가하고자 하는 라벨만 작성.


Remove Dictionary

- JSON 6902

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - target:
          kind: Deployment
          name: api-deployment
      patch: |-
          - op: remove
            path: /spec/template/metadata/labels/org
```


지우고자 하는 경로만 작성하면 됨.


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```

- strategic merge patch

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
               org: KodeKloud
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - label-patch..yaml
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   template:
       metadata:
           labels:
               org: null
```


값을 지운다는 의미에서 null로 지정하면 됨.


## Patches list


예제의 경우는 컨테이너가 한 개이지만 하나 이상의 컨테이너를 가질 수 있음.


특정 컨테이너의 이미지에서 이름을 어떻게 변경할 수 있는가?


kustomization.yaml 파일을 보면 특정 Kubernetes 객체를 대상으로 종류와 이름을 제공하는 타겟이 있음.


Replace List

- JSON 6902

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers: # 리스트 형태
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - target:
          
kind: Deployment
          name: api-deployment

      
      patch: |- # inline patch
          - op: replace
            path: /spec/template/spec/containers/0
            value:
                name: haproxy
                image: haproxy
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers: 
               - name: haproxy
                 image: haproxy
```


0은 무엇을 의미하는가? 바꾸고 싶은 컨테이너의 인덱스를 의미.


하나 이상의 컨테이너를 가질 수 있고 인덱스는 리스트에서 업데이트하고 싶은 아이템을 나타냄.

- strategic merge patch

컨테이너의 이미지를 바꾸고 싶음.


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - label-patch.yaml
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   template:
        spec:
           containers:
               - name: nginx
                 image: haproxy
```


Add List

- JSON 6902

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: nginx
                 image: nginx
```


```yaml
patches:
    - target:
          
kind: Deployment
          name: api-deployment

      
      patch: |- # inline patch
          - op: add
            path: /spec/template/spec/containers/-
            value:
                name: haproxy
                image: haproxy
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers: 
               - name: nginx
                 image: nginx
               - name: haproxy
                 image: haproxy
```


추가할 때는 경로 뒤에 `-`를 붙임.


우선 경로의 끝에서 목록에 컨테이너를 추가할 위치를 지정해야 함. `-` 는 리스트 끝에 추가한다는 의미.


추가하고 싶은 곳에 대한 특정 인덱스를 명시할 수 있음. 첫 번째로 넣고 싶으면 0으로 지정하면 됨. 두번째로 만들고 싶으면 1로 지정하면 됨.

- strategic merge patch

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: web
                 image: nginx
```


```yaml
patches:
    - label-patch.yaml
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   template:
        spec:
           containers:
               - name: haproxy
                 image: haproxy
```


하나로 합쳐서 배열에 두 개의 컨테이너가 생김.


Delete List

- JSON 6902

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: web
                 image: nginx
               - name: database
                 image: mongo
```


```yaml
patches:
    - target:
          
kind: Deployment
          name: api-deployment

      
      patch: |- # inline patch
          - op: remove
            path: /spec/template/spec/containers/1
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers: 
               - name: web
                 image: nginx
```


지우고자 하는 컨테이너 인덱스 명시. remove operation이므로 value는 명시하지 않음.

- strategic merge patch

```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   replicas: 1
   selector:
       matchLabels:
           component: api
   template:
       metadata:
           labels:
               component: api
       spec:
           containers:
               - name: web
                 image: nginx
               - name: database
                 image: mong
```


```yaml
patches:
    - label-patch.yaml
```


```yaml
apiVersion: apps/v1

kind
: Deployment


metadata:
    name: api-deployment
spec:
   template:
        spec:
           containers:
               - 
$patch: delete

                 name: database
```


`$patch: delete` 로 지우겠다고 직접적으로 명시하고 삭제할 컨테이너를 지정.


## Lab:Patches

1. nginx pod는 얼마나 생성되는가? 3
    > nginx-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nginx-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          component: nginx
      template:
        metadata:
          labels:
            component: nginx
        spec:
          containers:
            - name: nginx
              image: nginx
    ```

    > kustomization.yaml

    ```yaml
    patches:
      - target:
          kind: Deployment
          name: nginx-deployment
        patch: |-
          - op: replace
            path: /spec/replicas
            value: 3
    ```

2. mongo deployment에 적용될 label들은 무엇인가? cluster=staging, component=mongo, feature=db
    > kustomization.yaml

    ```yaml
    - target:
          kind: Deployment
          name: mongo-deployment
        path: mongo-label-patch.yaml
    ```

    > mongo-label-patch.yaml

    ```yaml
    - op: add
      path: /spec/template/metadata/labels/
    cluster
      value: staging
    
    
    - op: add
      path: /spec/template/metadata/labels/
    feature
      value: db
    ```

    > mongo-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mongo-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          component: mongo
      template:
        metadata:
          labels:
            
    component: mongo
    
        spec:
          containers:
            - name: mongo
              image: mongo
    ```

3. mongo-cluster-ip-service의 target port는? 30000
    > mongo-service.yaml

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: mongo-cluster-ip-service
    spec:
      type: ClusterIP
      selector:
        component: mongo
      ports:
        - port: 27017
          targetPort: 27017
    ```

    > kustomization.yaml

    ```yaml
    - target:
          kind: Service
          name: mongo-cluster-ip-service
        patch: |-
          - op: replace
            path: /spec/ports/0/port
            value: 30000
    
          - op: replace
            path: /spec/ports/0/
    targetPort
            value: 30000
    ```

4. api pod의 컨테이너 수. 2
    > api-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - 
    name: nginx
    
              
    image: nginx
    ```

    > kustomization.yaml

    ```yaml
    patches:
      - path: mongo-patch.yaml
      - path: api-patch.yaml
    ```

    > api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      template:
        spec:
          containers:
            - 
    name: memcached
    
              
    image: memcached
    ```

5. mongo 컨테이너의 어느 경로에 mongo-volume이 마운트되었는가?
    > kustomization.yaml

    ```yaml
    patches:
      - path: mongo-patch.yaml
      - path: api-patch.yaml
    ```

    > mongo-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mongo-deployment
    spec:
      template:
        spec:
          containers:
            - name: mongo
              volumeMounts:
                - 
    mountPath: /data/db
    
                  name: mongo-volume
          volumes:
            - name: mongo-volume
              persistentVolumeClaim:
                claimName: host-pvc
    ```

6. `memcached`컨테이너를 지우려는 `api-patch.yaml`에 strategic merge patch를 생성.
    > api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      template:
        spec:
          containers:
            - $patch: delete
              name: memcached
    ```

7. mongo-deployment에서 `org: KodeKloud` 라벨을 지우기 위해 kustomization.yaml 파일에 inline json6902 patch 생성.

    ```yaml
    patches:
      - target:
          kind: Deployment
          name: mongo-deployment
        patch: |-
          - op: remove
            path: /spec/template/metadata/labels/org
    ```


## Overlays


kustomize는 base와 overlays를 가짐.


dev 환경과 staging 환경, production 환경이 있다면 환경별로 특정 속성을 조정하고 싶을 수 있음. 여기서 Kustomize가 실제로 작동하게 됨. 그렇다면 이를 정확히 어떻게 달성할 수 있을까? 그건 오버레이라는 것과 관련이 있음.


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

> base/kustomization.yaml

```yaml
resources:
  - nginx-depl.yaml
  - service.yaml
  - redis-depl.yaml
```

> base/nginx-depl.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 1
```

> dev/kustomization.yaml

```yaml
bases:
  - ../../base

patch: |-
    - op: replace
      path: /spec/replicas
      value: 2
```


bases property를 가짐. 모든 기본 설정으로 기본 디렉토리에 어떻게 접근할 수 있는가? 해당 폴더에 대한 상대 경로만 제공하면 됨.


환경 별로 patch를 제공하는 문제일 뿐.

> prod/kustomization.yaml

```yaml
bases:
  - ../../base

patch: |-
    - op: replace
      path: /spec/replicas
      value: 3
```


오버레이에는 patch만 있는 것이 아님.


overlays 폴더에는 base 폴더에 정의되지 않은 새로운 구성이 있을 수 있음.


이 경우 grafana-depl.yaml 이 있음. prod 환경에서 사용할 그라파나 deployment를 추가하려고 함.  다른 환경에서는 사용할 수 없음.

> prod/kustomization.yaml

```yaml
bases:
  - ../../base

resources:
  - grafana-depl.yaml

patch: |-
    - op: replace
      path: /spec/replicas
      value: 3
```


원하는 만큼 새로운 리소스를 추가할 수 있음. 기존 것만 수정할 필요는 없고, 새로운 것을 사용할 수 있음. kustomization.yaml에 resource 섹션 추가. 우리는 base, patch를 갖고 있으며 현재 폴더에 있는 자원을 가져옴.


base 디렉토리와 하위 디렉토리가 일치할 필요는 없음.


```bash
k8s/
├─ base/ 
│   ├─ kustomization.yaml
│   
├─ db/
│   │   ├─ db-depl.yaml
│   │   ├─ db-service.yaml
│   │   └─ kustomization.yaml


│   └─ api/
│       ├─ api-depl.yaml
│       ├─ api-service.yaml
│       └─ kustomization.yaml

└─ overlays/
        ├─ dev/
        │   ├─ kustomization.yaml
        │ 
  ├─ db/
        │   │     ├─ db-depl.yaml
        │   │     ├─ db-service.yaml
        │   │     └─ kustomization.yaml

        │   
└─ api/
        │            ├─ api-depl.yaml
        │            ├─ api-service.yaml
        │            └─ kustomization.yaml

        └─ prod/
           ├─ kustomization.yaml
           ├─ db/
           │  ├─ db-depl.yaml
           │  ├─ db-service.yaml
           │  └─ kustomization.yaml
           └─ api/
               ├─ api-depl.yaml
               ├─ api-service.yaml
               └─ kustomization.yaml
```


완전히 분리 가능. 자신만의 패턴을 따를 수 있음. 리소스를 적절한 kusomization.yaml 파일로 제대로 가져오고 있는지 확인하기만 하면 됨.


## Lab:Overlay

1. prod 환경에 애플리케이션을 배포할 때 API 배포에 사용되는 이미지 유형은 무엇인가?
    > base/api-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      replicas: 2
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - name: api
              image: nginx
              env:
                - name: DB_CONNECTION
                  value: db.kodekloud.com
    ```

    > overlays/prod/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    resources:
      - redis-depl.yaml
    
    patches:
      - api-patch.yaml
    ```

    > overlays/prod/api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      template:
        spec:
          containers:
            - name: api
              
    image: memcached
    ```

2. API 배포를 위해 몇 개의 복제본을 prod에 배포할 예정인가?
    > base/api-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
     
     replicas: 2
    
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - name: api
              image: nginx
              env:
                - name: DB_CONNECTION
                  value: db.kodekloud.com
    ```

3. 스테이징 환경에서 몽고 배포 컨테이너의 환경 변수 MONGO_INITDB_ROOT_PASSWARD의 값은 얼마인가?
    > base/mongo-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mongo-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          component: mongo
      template:
        metadata:
          labels:
            component: mongo
        spec:
          containers:
            - name: mongo
              image: mongo
              env:
                - name: MONGO_INITDB_ROOT_USERNAME
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: username
                - name: MONGO_INITDB_ROOT_PASSWORD
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: password
    ```

    > overlays/staging/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    patches:
      - configMap-patch.yaml
    ```

    > overlays/staging/configMap-patch.yaml

    ```yaml
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: db-creds
    data:
      username: mongo
      
    password: superp@ssword123
    ```

4. prod환경에 total pods 수는? 2+2+1 = 5
    > base/mongo-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mongo-deployment
    spec:
      
    replicas: 1
    
      selector:
        matchLabels:
          component: mongo
      template:
        metadata:
          labels:
            component: mongo
        spec:
          containers:
            - name: mongo
              image: mongo
              env:
                - name: MONGO_INITDB_ROOT_USERNAME
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: username
                - name: MONGO_INITDB_ROOT_PASSWORD
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: password
    ```

    > base/api-deployment.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      
    replicas: 2
    
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - name: api
              image: nginx
              env:
                - name: DB_CONNECTION
                  value: db.kodekloud.com
    ```

    > overlays/prod/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    resources:
      - redis-depl.yaml
    
    patches:
      - api-patch.yaml
    ```

    > overlays/prod/redis-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: redis-deployment
    spec:
      
    replicas: 2
    
      selector:
        matchLabels:
          component: redis
      template:
        metadata:
          labels:
            component: redis
        spec:
          containers:
            - name: redis
              image: redis
    ```

5. dev 환경에서 api-deployment의 nginx 컨테이너에는 몇 개의 환경 변수가 설정되어 있는가? 3
    > base/api-deployment.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      replicas: 2
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - name: api
              image: nginx
              env:
                
    - name: DB_CONNECTION
    
                  value: db.kodekloud.com
    ```

    > overlays/dev/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    patches:
      - api-patch.yaml
    ```

    > overlays/dev/api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      replicas: 2
      selector:
        matchLabels:
          component: api
      template:
        metadata:
          labels:
            component: api
        spec:
          containers:
            - name: api
              image: nginx
              env:
                
    - name: DB_USERNAME
    
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: username
                
    - name: DB_PASSWORD
    
                  valueFrom:
                    configMapKeyRef:
                      name: db-creds
                      key: password
    ```

6. api-deployment에서 API 이미지를 업데이트하여 QA 환경에서 caddy 도커 이미지를 사용. inline JSON6902 patch를 사용하여 이 작업을 수행.
    > overlays/QA/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    commonLabels:
      environment: QA
    
    # 추가
    patches:
      - target:
          kind: Deployment
          name: api-deployment
        patch: |-
          - op: replace
            path: /spec/template/spec/containers/0/image
            value: caddy
    ```


    ```yaml
    k apply -k k8s/overlays/QA
    ```


    > 💡 yaml파일 작성 시 `-` 유의.

7. mysql database가 staging 환경에만 추가될 필요가 있음. mysql-depl.yaml이라는 파일에 mysql deployment 생성. mysql-deployment라는 이름으로 deployment 배포.

    mysql 이미지를 사용하여 mysql  컨테이너의 replica 1 배포. 다음과 같이 환경변수 설정. 

    - name: MYSQL_ROOT_PASSWORD
    value: mypassword
    > k8s/overlays/staging/mysql-depl.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: mysql-deployment
    spec:
      replicas: 1
      selector:
        matchLabels:
          component: mysql
      template:
        metadata:
          labels:
            component: mysql
        spec:
          containers:
            - name: mysql
              image: mysql
              env:
              - name: MYSQL_ROOT_PASSWORD
                value: mypassword
    ```

    > k8s/overlays/staging/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    # 추가
    resources:
      - mysql-depl.yaml
      
    commonLabels:
      environment: staging
    ```


    ```yaml
    k apply -k k8s/overlays/staging
    ```


## Components

- Components provide the ability to define reusable pieces of configuration logic(resources + patches) that can be included in muliple overlays
- Components are useful in situations where applications support multiple optional features that need to be enabled only in a subset of overlays

component는 Kubernetes 구성의 재사용 블록.


애플리케이션을 세 가지 다른 variation으로 배포할 수 있다고 가정. 프리미엄 고객을 위한 dev, premium, 그리고 애플리케이션을 셀프 호스팅하고자 하는 고객을 위한 sel hosted가 준비됨. 맞춤형 애플리케이션에서 세 가지 다른 오버레이를 나타낼 것. 세 가지 오버레이 모두에서 공유될 기본 구성을 위한 폴더를 가지고 있음.


애플리케이션에 몇 가지 선택적 기능이 있다고 가정. 그 중 하나는 캐싱. premium과 self hosted만 캐싱이 활성화되어야 한다고 가정.


postgres 같은 외부 데이터베이스 서비스를 원함. dev와 premium에서만 이용 가능.


premium과 self hosted에서만 캐싱이 되길 원하므로 우리는 caching을 두 폴더에 넣음. 그러나 한 곳에서 변경이 발생하면 다른 것도 그것을 알아야 함. 그러므로 우리는 복사해야 붙여 넣음. → 이 방식을 피하고 싶음. 이것이 component를 만드는 이유.


components라는 폴더를 만들어 그 안에 db와 caching 폴더를 개별적으로 생성.


```yaml
k8s/
├─ base/ 
│   ├─ kustomization.yaml
│   └─ api-depl.yaml
├─ components/
│   ├─ caching/
│   │   ├─ kustomization.yaml
│   │   ├─ deployment-patch.yaml
│   │   └─ redis-depl.yaml
│   └─ db/
│       ├─ kustomization.yaml
│       ├─ deployment-patch.yaml
│       └─ postgres-depl.yaml
└─ overlays/
        ├─ dev/
        │   └─ kustomization.yaml
        ├─ premium/
        │   └─ kustomization.yaml
        └─ prod/
            └─ kustomization.yaml
```

> components/db/kustomization.yaml

```yaml
apiVersion: kustomize.config.k8s.io/v1alpha1
kind: Component

resources:
  - postgres-depl.yaml

secretGenerator:
  - name: postgres-cred
    literals:
      - password=postgres123
      
patches:
  - deployment-patch.yaml
```


dev에 database component를 가져오고 싶음. 어떻게  해야 하는가?

> overlays/dev/kustomization.yaml

```yaml
bases:
  - ../../base
  
components:
  - ../../components/db
```


## Lab:Components

1. community overlay에서 무슨 components가 사용되는가?
    > overlays/community/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    components:
      - ../../components/auth
    ```

2. dev overlay에서 무슨 componets가 사용되는가?
    > overlays/dev/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    components:
      - ../../components/auth
      - ../../components/db
      - ../../components/logging
    ```

3. db component는 api-deployment에 몇 개의 환경 변수를 추가하는가? 2
    > components/db/api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      template:
        spec:
          containers:
            - name: api
              env:
                - name: DB_CONNECTION
                  value: postgres-service
                - name: DB_PASSWORD
                  valueFrom:
                    secretKeyRef:
                      name: db-creds
                      key: password
    ```

4. db component에서 생성된 secret generator의 이름은?
    > components/db/kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1alpha1
    kind: Component
    
    resources:
      - db-deployment.yaml
      - db-service.yaml
    
    secretGenerator:
      - name: db-creds
        literals:
          - password=password1
    
    patches:
      - path: api-patch.yaml
    ```

5. 애플리케이션의 커뮤니티 에디션은 이제 logging component와 함께 제공되어야 함. community overlay에 logging component 추가.
    > overlays/community/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    components:
      - ../../components/auth
    # 추가
      - ../../components/logging
    ```

6. caching component가 생성될 필요가 있음. deployment와 service 구성을 가진 caching이라는 component 디렉토리가 있음.

    kustomization.yaml 파일을 만들고 redis configuration을 가져옴으로써 component 생성 마치기.

    > components/caching/kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1alpha1
    kind: Component
    
    resources:
      - redis-depl.yaml
      - redis-service.yaml
    ```

7. caching component에 대한 데이터베이스 설정을 통해 component는 redis 인스턴스에 도달하기 위해 컨테이너에 환경 변수를 추가하여 api-deployment 구성을 업데이트해야 함.

    strategic merge patch를 만들고 다음 환경 변수 추가.

    - Name: REDIS_CONNECTION
    Value: redis-service
    > components/caching/kustomization.yaml

    ```yaml
    apiVersion: kustomize.config.k8s.io/v1alpha1
    kind: Component
    
    resources:
      - redis-depl.yaml
      - redis-service.yaml
      
    patches:
      - path: api-patch.yaml
    ```

    > components/caching/api-patch.yaml

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: api-deployment
    spec:
      template:
        spec:
          containers:
            - name: api
              env:
                - name: REDIS_CONNECTION
                  value: redis-service
    ```

8. 애플리케이션의 enterpise 에디션에 caching component 추가.
    > overlays/enterprise/kustomization.yaml

    ```yaml
    bases:
      - ../../base
    
    components:
      - ../../components/auth
      - ../../components/db
    # 추가
      - ../../components/caching
    ```

