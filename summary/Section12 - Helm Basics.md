# 🍨 Section12 - Helm Basics

## What is Helm


객체를 생성하기 위해서는 모든 yaml 파일을 apply 해야 함 → 번거로움.


troubleshooting 시 issue를 찾는 것도 어려움.


Kubernetes는 우리 앱 전체에 대해 별로 신경 쓰지 않음. 우리가 알고 있는 것은 다양한 객체를 선언했고, 그것이 각각의 객체를 우리 클러스터 내에 존재하게 만든다는 것 뿐.


Helm은 그러한 것들에 대해 알기 위해 처음부터 기본적으로 설계되었음. 때때로 Kubernets 패키지 매니저라고 불림. 객체들을 그룹으로서 큰 패키지의 일부로 보고, 우리가 작업을 수행해야 할 때마다 헬름에게 어떤 객체를 만져야 하는지 말하지 않고, 어떤 패키지에서 작업할지만 알려줌. 그리고 패키지 이름에 따라 해당 패키지에 속하는 수백 개의 객체가 있더라도 어떤 객체를 어떻게 변경해야 하는지 알 수 있음.


```bash
helm install wordpress
helm upgrade wordpress
helm rollback wordpress
helm uninstall wordpress
```


## Installation and Configuration


Helm 설치 전에 먼저 로컬 컴퓨터에 적절한 로그인 세부 정보를 사용하여 기능적인 Kubernetes 클러스터와 kubectl을 설치하고 구성해야 함. 이를 위해 kubeconfig 파일이 의도한 Kubernetes 클러스터와 함께 작동하도록 설정해야 함.


[bookmark](https://helm.sh/docs/intro/install/#from-script)


## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치
2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPGC7AAB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIB2Jmmij4ttUJMR7KJoV9P2seFMi7tQKzXjLaEgzb%2FGlAiEAtw%2B%2FSH3qdeXCe6Od6uSrdM%2B7YElERLytqPYPgF3Dx1kqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8zSBT9iGGuR2SbrircA4KiL5klzLfBIbBTKQUBV4axNpz8J5Y0wNPqax3WNd3DWJsuPkiC29JMDM9x7%2F%2BHmpVKNUoYk%2BMAs9Kjt%2Bnykd%2F5s%2Fo2LW4cTPdv5d8zJb1XfQFIToUgJ8h5JBKLLrHRwm6Y%2FstbaWnQ%2FJfhwrEiLjLpGwTOHE8L2j9DRc8l2EVZnetsBU8uSuab2XR3nHlwWNTLtkHm85si9GdyN48enYLA9lBZ7DI%2FnTezJ8sNJDtnCdu3ysHQ5DGfUS6tsWGsTNntRQ3JLyTNsHryFHw4P3Wv5ssE8HcMMxxMcrZmbRNXMJfQ6W%2BIvXyJtpJoW7eSd3kr9YU58XZMF9PDHPOzf94QzxhrjX982dRLVPpK0udFXpOLmEwRcDpTVNzUxUe7ZtQQeLfKHK%2ByuJS33XnurrbCI4BPJ27MwNqr90S7QZIdap93ptS9NrRsEEpvXC3c22JUPsTOfJsrfowmeSjZNMW9YqUDzKd7fBY83u%2FACllLJEKS1K9cumlGAj4fr9O%2FC3x7s7YeGvtX8OfHtUL1JTX%2FbhMCQwI7kzyGCRyk9wJYV16jCLqi87xRJHLM2ZDgdD9vKTb62RsyH3sjCVB7RG2yhmyiXKMKiSmtA3eNUP7KshwLaVdF65bXE8vYMKrGk8AGOqUBMRH7ndp22Z5aKJlWQ1CjrYthXCCa4T8inyl32vwI4tQjWAfnO%2B7k6qbteWc9RZKQqQnGjeTtSYcfWnS499Il4XCn%2BN%2BFuwOUE07Pw0olm7%2FwbVb06DOnayURKnf9iDPKaR5y0OL13APeP0Xr1Qh1tbWCJo9yeEyrGqZJvz7%2B3CMf5%2BqO4oPk3ult9g%2FtCG8%2FYSdPZ8Y3c43Oe%2BGiOYH8DMkuF8ve&X-Amz-Signature=15aa95d9a6d577e9664b8e0dfebde6db9e7fe7b0dae194ab46e7d60db7000117&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIS3XCZG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGfB3QfHTchOEgA2hausPdO08%2FxkAoaJ1xSx9kuavH8oAiEAmVpObX%2Fo5aOkvpufC8zwvaYVJetFpgMngGU6fIe6SxoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYBZd40SvJwm%2BotDircA3NQJE%2F3Xbb1zrW8osQPAkKXc3kLQrOU10HjZqvenukpeHtSej%2FHA6bBllQ1eRKoR7Cwlivz9WWQXHd1%2FEE6R8r1ZvFxgTCA5BFIwyoucOMZtbWyL2KZruGO96RYUVY%2FaNbmAcs53hEYGgpFpie03M42bFj2g8n%2F8yoFPLVpAEPuI8kUkM4Q5vkiVPJiMLdZW%2Bp40g4g3PGiHVU8AJvgNyKr3fXPXlYZp4NsSSfvRLGZbbppAzk%2FEj4%2BPNLqxZGeDvS4fKFB4WFfG8LAg8wpJrN3h%2B0RMClfiBOCi%2BB0dK0oyzRKbyL9rY7J00%2BFYtUPCNeYsxPYlX82K%2B7o780N49ZWwgWNnECYUuf7R0M9NtQPn%2FsQV05eOaOTSIG5hTgRJlBsGRD9l4sKwp%2FYSsy7zJ5bJb30TnPcqL3HAXoroYDeEo86c9pWWoTkn%2BU%2FlMkeB%2BjivgPEFUii0DrQKc2IrsOo1kaUht%2FhR4QHBxEOuOaHzhcAlT2%2FgTbAu7L2qynVoWsSSEc6BVuXVLfJ5fYJjy3bZDM7uR1%2Br5fXoVnU0iVLuFhgq6FOQ5mpR90rhCWSZraWRbaXGyMJ7MC69h0mCKQM3O1zZ9KWFNPb%2BR1xc3u6wUN6yIq3D5TbnpuaMJzJk8AGOqUBo1nsIz%2FI8ab2UlCvcT1u2R%2BifwOigFKy4rIEWrwlT5gJp%2F6FvR9b5kYdL1Hur%2FtsTj%2FbV0e5qXL35Ia1oPFKM7XDGB9vQOBqyTk1wAXKadKUhW%2BSr%2Fm%2B4mzZIshk0rs1s%2BF8O4tBYuhZHcFL7Z8N1Ok6nUUGXWdR%2BTZZiLD4nR8nT4HCu%2Br3vGv%2FSC9uSKskcUcsnUHeSQ9cN%2Fjm21AKfNcWANGg&X-Amz-Signature=b571030609f9f4389ff4751b49f8bea40211f6c800bf8f8803a42683392bce26&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWW3PVC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIGPoXCrS6aFaoImgFIlg7Yhi3rU3nkDae15KDDTYY6knAiEA5wHGjAvQCU4SBRrzfdjNLZGCQF5LV7%2Fri%2FrT5x449AAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPfxdcxZsMkOzSdNSrcA7YvyRAvPsCS9ndN%2B59BuHAl%2B4TT%2FZj4%2BAGzc1B82xIGxmVqV%2FH36NjcaZrVHuywOJ3DWSYm7wVWTiB5AsAVFZa5E9SBtST1%2BLhIKPnpBxk8DZKWrw8sZDTYKX7d6U5%2B4L4iip7ALKdw90N6NMw32jLBSdyrU8GJzP364cw2H0rI1BZrfJTqR8TAasnwWpf7bY4vs%2Bx7VkUNU%2BYudrgEtyR%2BTlns%2BfP6VvtMoKEHeztmuTINLo7Wc9c3MzLtjq9ANNCeAOeelYeWNd7bs7J%2BdVssJy463ZWDEnmjRESvCDj4TsXMvJ7pDGDkfWx%2FSMUsbiFA6pbcm4hMXbjtgZRVN4%2Bv0OqzkmMiamgKvjm0TdTY%2Be9l2kkfntcMqQ%2BzZOP85PauVwsqNG1BIux5ab4IuH%2BDcfgQGIIS3PJVKWvs9tFvhULZH4DnlF1DfzGeAawovcYtD5ueavD2eDmCJInzbVis2yU%2Bi8k3y5CJbiXDIN%2FJ4ChfTwONz2Oo9l%2BDNupVNlaNMZWSZIPswsxI%2BFl1mDHkKpl2dSNy0mW1H6t8PkC80VSMFJeZQyDEXtTCxueahexzLoifdrNAMFxFfbK5csrgaoWgdflDG2K%2F2b9m8TVEZSvPR8toHgQ6Yr1iMIbEk8AGOqUB3zeU4oq6jJxSRB%2BkI4z1%2BW1MuBDhW3F59aRVZuq3wy%2B0aVTQIiKh%2FInYf%2BGhakGmLBCDzsgnuANVbeHfvq4AgZFmmu%2BkPnPNCHODG%2BZy3Cw59Z7n3pkZXtunsh%2FDiEDnAVZNdkt01xZHtewyXpjNrEhJELZ8Zod0UJxwI5qiFBAvunqFOJFg6E4tlVdcIT%2FGsVQWoSdbk5e%2BHxTdLyIfJGHFARAk&X-Amz-Signature=cd72eae67b3f23d24f83e17864a9d25642f91c45339864a2c47371757abec0a3&X-Amz-SignedHeaders=host&x-id=GetObject)


## A quick note about Helm2 vs Helm3


Helm3에서 Tiller 없앰. Helm과 클러스터 사이에는 아무것도 존재하지 않음. 또한 RBAC를 사용하면 보안이 훨씬 향상되고 모든 사용자가 Helm으로 할 수 있는 작업에 제한을 받을 수 있음. 이전에는 Tiller에서 이러한 제한을 설정해야 했는데, 좋은 선택은 아니었지만, RBAC가 Kubernetes에서 사용자 권한을 미세 조정하기 위해 처음부터 구축되었기 때문에 이제는 간단하게 할 수 있음.


|                                 | Helm2 | Helm3 |
| ------------------------------- | ----- | ----- |
| Tiller                          | ✅     | ❌     |
| Three-way Strategic Merge Patch | ❌     | ✅     |


 helm으로 설치하고 kubectl로 이미지를 바꿈. rollback을 하려고 할 때 helm에서 현재 버전은 이전 버전으로 알고 있으므로 변화를 감지하지 못 하여 rollback을 하지 않음. helm2는 이전 차트를 가지고 현재 차트와 비교. 사용자가 수동으로 바꿨기 때문에 여전히 바꾼 버전으로 동작.


반면에 helm3의 경우 사용 중인 현재 차트를 비교. 되돌리고 싶은 차트와 라이브 상태, 그리고 현재 kubernetes 객체들이 yaml 형태로 선언된 것처럼 보이는 모습은 three-way merge patch 이름에서 유래됨.


[bookmark](https://helm.sh/docs/faq/changes_since_helm2/)


## Helm Components


차트는 파일 모음. Kubernetes 클러스터에서 필요한 객체 모음을 만들기 위해 Helm이 알아야 할 모든 지침를 포함하고 있음.


릴리스는 helm 차트를 사용하여 애플리케이션을 단일 설치하는 것. 각 릴리스마다 여러 개의 수정본을 가질 수 있으며, 각 수정본은 애플리케이션의 스냅샷과 같음.


다른 사람이 helm을 통해 릴리스 작업을 해야 한다면, 이 데이터의 사본이 필요할 것. helm은 이 메타데이터를 kubernetes 클러스터에 직접 저장하여 kubernetes secret으로 만듦. 이렇게 하면 데이터가 유지되고, 쿠버네티스 클러스터가 유지되고 팀의 모든 사람이 접근할 수 있는 한 헬름 업그레이드 등 원하는 모든 작업을 수행 가능.


## Helm charts


deployment와 서비스라는 두 가지 객체가 있음. 그리고 이미지의 일부를 배포하는 표준 deployment와 이를 노드 포트 서비스로 노출하는 서비스. 그러나 이미지 이름과 복제본이 다른 형태로 지정되어 있다는 것을 알 수 있음. 이것을 templating. 여기서 values는 values.yaml의 일부.


두 파일(deployment.yaml과 service.yaml)은 템플릿. values.yaml 파일로 values를 사용하여 커스터마이징.


values.yaml 파일 외에도 모든 차트에는 chart.yaml 파일이 있음. 여기에는 차트 자체에 대한 정보가 포함되어 있으며, 예를 들어 차트 API 버전은 V1 또는 V2일 수 있음. 애플리케이션 버전을 지정하는 데 사용되는 앱 버전도 있음.


helm3는 apiVersion을 v2로 설정.


type은 application과 library 두 가지가 있음. 기본적으로 application. library는 차트 빌드를 돕는 유틸리티를 제공.


dependencies. 여기서 wordpress 애플리케이션은 2-tier 애플리케이션. database는 mariadb로 자체 helm차트를 갖고 있음. dependency로 추가.


keywords 리스트는 public chart repository에서 차트를 찾을 때 유용.


maintainers부분은 maintainers의 정보가 있음.


home같은 optional 필드가 있음. icon은 icon의 url과 프로젝트 홈페이지의 url을 공유하는 데 사용됨.


```mermaid
graph TD
  hello-world-chart --> templates
  hello-world-chart --> values.yaml
  hello-world-chart --> Chart.yaml
  hello-world-chart --> LICENSE
  hello-world-chart --> README.md
  hello-world-chart --> charts
```


## Working with Helm:basics


## Customizing chart parameters


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SRW3AIR%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH5mf2kwOXwEdiTXVeoAr5IYx846WWJLlmiK8WgVbQ0AAiBDzlfLg8y9tjWBF8KYbU4jvNNCMisHdrUmyOVuyRhNpSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrT3JpUEZS9RM2l9GKtwDiNL7LAK0vkgRYBFUTdPynjvmKKDZWpQcdFKXCMvpXpT%2F%2BKaBWgoCy%2FuAHMV0TV05mgcpeB6lSOFPwfes1KqsVC6rj72U%2BWKAO%2B7SM%2Fxl07c03qwy3OignisRlndpK3w1oIpXAN0gpkwOoVS4O3D7MUKy2wuFWp4MirwHlczgWaF%2Fx49lXPVLjnvFWhkos9MIjl2h3g840iFLUn1%2F2VLOCL8JFrL0KlZgVqLzEKJy9FHqpnGL6KuaNVp89V1AalU8CTCy15Ly7YPxH6ZNyI8%2Fw5c%2BUH%2BSXWijVEQkvtAGtHBZv%2FWoRTa%2B%2BoeyKydM8X242%2F9UVfodXxw3MdY%2FwzlX2TQmA8DfDRlC39HH5tbhsaVvvBTz9Iu4tDqsGAuLih%2FbSMgdSF%2BtrtN4nCGOGpW%2FPeKavGjg5BEJzLpNzzJoSPVvg74vkegR6jUzV6JUYAKPCesvnf94dE3Nt8uYOBExghZ7oKPZzeLIa8xwVKs7mqBlPjFpUYOVl5o0XKf2jz93LMT3RUAg3pAImQFXOlEYtlsyPzaOwWIQ713bggOWdsLeBd5G20EifoV5JicSrijzfgUQ4e65kWLghNISyht%2B3OT7kuZKzHCdgZdalpUOK%2FsUQOwFFYr%2BNnYDG5cw88mTwAY6pgHeUMFCABezjhe3LJ7OxQsp5dyYkuoXXy6QWjAbgozrRJEWL9%2FI7mQUhMDFi3ygeaTlf8wn72G%2BTeyqGZHjO9%2F63dhXSBN4KTRDxvv7zZlABJWluC%2FUT0Xc9sdiejrL74S3rsJt4Nw1%2B3L0seo%2B%2Fy2rsIgJxqDT6lIz8HcwQGl4Gz2nxhTAQjMO5woMTpSNJmBwXBe%2B1JYGZHahaU0Wfv%2F4g5ja5pc%2B&X-Amz-Signature=1a8831998f0e96540130cda1e51394c139f0946c6579f5e489ab715bbcac77fe&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q6OAY2A%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDUhsOBxqCP7Hl7TK3%2FNcKJIPmZDAFtfrOU8IfmpwYlBQIgLsIT5OwsQ37N%2FNqimsAUduXi2072ob8VUGPPaGxCkDIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL399VdXXVR9gt%2BuryrcA%2BIYJIGLo0csBRspgLpJScUP6rpLkQglDPGnHl5XAW4cW%2F3q2UnPf2aonuQ0BlPH8P86Xaszk%2BHVsvUK0lUdl03GCNdtO85GpNFzCIUDy7OjIc%2BWcCXF5edSCuQ5QpS5NfSMxiYSFDBKZ2oVyKZjSU7AzG82xESf2PzxMURZkVdSbvNQghrFk%2FBDCpNtUfh2Rji2%2BSTOTGJfm2vW78sTdqHNYKxlcIhDpHn5ItpC0KN9EhuYpJmc0dXgfuI%2BZ1JRGXvN%2FAejxShJr3FEmvFrubmCI6Fl3%2FG5doh2dEkElAlPS5o8xGY29m4xE3IirOHCagBCXoKkfQSI9D7IL3%2BDA9d76fdlCJjdlxDuMbnOiX1RbJ2%2Fbc81XBS1Kik78JblN3EBeH6uwvdcWecWfgjMNAVb037cnGZjORizmUPD9ecn1Wb9mKrbM9sk0xDeBKQFHgQ%2BhLPlUERwhm09E4qnfuY7D%2FuRYzVG8PrnEmZaw5kYWsqejD92Qbh1gqBD7pYFqV1UC3m28PzfoFhH6gQxxEK0ktxl3TnTPznW3mabztsUP9VrxyVzPU7VjCdXSO9InLo2rftUjVsy7N%2FdIgJhqKoHwmFUQU9XkRANuUAR5yn%2FRQt1Q5QWKaVyL439MNydk8AGOqUBhdgE%2Fpl5mU46iW5qsSnkdaArEyDb1SfguA27xpDDGuoipu0RUc%2FFtihGsL650OGZgrPTSuif2wrXoMBu7MSGdLMP0r1mP0ftnD%2F4VVRu0VbhJhft1pQfnEPAVionpJckM609qmNKifbwhyTsQeizfq7b5udRulbdldvl7Uz1Ywk4Kk5HTSqAKDjZLHSF4FlqItZ2dlkx480AjyrUkcFqZ20%2F1cXF&X-Amz-Signature=48e4214b68d8f2fe82bedc0871c9ec6eeca85073a549e48f7cb203cdf61f9d37&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HPGPJOT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIHoxGuEdeRaQBiTBpjBR6Q0UYDpQyp%2B5rPvKkDAdMNDdAiEAzhqYgttfWgI6MQdEJsyb60uAK3WcWmbkKlerN%2FfOUasqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQw1NUTzmBKMuyZfyrcA19Z3g%2FoAMRKw9D80gpv2p7d8tCp6%2BqiSNXyV%2BD%2F7JWwVXc7zeh0ViRvJFY0wcgZmFy2nlYI1KtC13DUi5ByKVJ%2FLLe8vLt%2B8GElw%2BpeMLdxzeJrDAeT%2BOKDyus1paUMK7k%2FarkVP0yqEDSpf92sM7RgMfjaDQ8NdUWT9pgnSiiO79Po0JXz49Aa%2BdOdhrTzeZ%2BPEp5P7%2FpZ8D72yvGfaqX4hwkbJpQtLK%2FWq0vS8jaa%2BbUXfHl%2BIrZA9v%2F8eAr6idGsqh0xXoopC32%2FvGgbBgWt2G4l1rSLjg8kAZ2d4BkvJYSXakNEnhM1%2BypEVqv%2FdgniyNsEAnh5qcHqY7PvvZjszSBwnXFZGr6dyF7rXx1c0fTGSQQSdoYYglPdR10Ubwkglm6PAlwBPLgfX%2BH%2B7RBjKvy3le1KazkL862YOjE1DlS5Luu3fc1PzLQS2ljmKYN%2B6xPIR%2BWbkWvz%2BkO69r2cjSE%2F%2B%2FlRlHfMwx4fiRRVE%2BQ2dIrymOZMbTHf0mup1JAOk9yW77GkgDI%2Bbd%2F19IsTpbQKDbCNENT4qqXi7tTTS17wsaVrWY%2B%2FjujXHZ0W%2F5wN%2FMYDeLnQ9GQj%2FO2GQbJt9QWtU28PM0p9tg93V5XK6yacN6IN7XNR9LU%2FMKLuk8AGOqUBXHCNc2VfALVZSDs9XkiGt6hzTPaklwiMmU1xFqs1UJfpj7V%2F9fFzzmiDmNPrv9%2BgS5wSwLU5YbxtB4xx61BigisaaLJQic1HrT%2BM%2Feo6T815%2F%2Bfc%2FziONJUdjK%2FHH0OxsJPk5gtk06%2BLt7zc1wPr%2B4hQYMUlyamcrVvFnTv0nUfGYy%2B%2Fo1G1PshmQtqHBBcyC45tXwyitpFMMEFpWyVHGuDqHPPc&X-Amz-Signature=fce20cd70a4cf7b092dae59784a0cbce54d561bb13b573ef460f06e176e688ab&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XW5LBN7%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHaHasn7bF%2BGySiqS5RoDOSAzmUWXG6lzcnPLb2msdP%2BAiBL4b1470MZi2twok%2F%2FqibVgyBdDoDMK2Nn5pzDL4SnGiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOyXqshnKibvZQK7aKtwDD8i6AsLfhVkJVS1Jc%2FZJ7diAtzfJuVp0%2Bl4uTaP9I5gSVbyGRME0cEiFmKW3ufIH5bSGQF83xFD2PAGzLTZbZqUnzo36SkGeRtdvQEPOhH1tEKIWjM%2Bw24tiIGGFVZpvezOdrhcCyYq0PwrygZsZE%2FrtBsD2fC9vVeHIqfIBvCDlmf5p%2FhMMz7TqfL8DAC13ETQsRH26xvu6edTTo0QRm5%2F2a7OoxCYK%2BHZNHPYTWozLocIGI4ocwbpWAhe81rE%2BlpMTJw%2FsUYml%2Fr74%2BlbkUjoDIPTGJweHc0qhIJpwRX4%2FMMoA8k8MTHcOjJTgowKe5IxQF3SxjEyQkAwRuNGO%2Bdm4gJ8aWpcRQSas5agGw3NKG5480Uq1tIKpiDzNCZj0si6u6V8NbjydNxECE1zEZWE6tai%2FgSEvywgfK3NfUCUPm%2BZ0OZ%2FsUfnevAUi4En64vPP76b2%2BDpMkWae%2BY%2FQhBoR1AJzk3TxIzboVmqkb8YZUSMtIerzJLes%2F%2B0Jrmhwyi5dcRten6oFo%2F08mNy4bwbaAw%2FbpMbGemON6LAFObyV%2Fxk65GPCAVRJAi7yvK%2BVs6b1SMU6%2F%2BRQ7Is9YwyFSyIsq%2FlIiBxM14QnjF8xj4g9n1g6yoFp2QtDfIMw7MOTwAY6pgGh7KJAs9IfexSruVzIg8b3RAuZPPax0v%2F%2FN6zWRUPFizyVVXkUUmAtgaHYWCA6lQL9TCuqnqlPDhhDs3R67VIt0QT3Jd9iodN0ZS80oeQBnllFUXuLSePXcFxi8MCcS5n5OObBvye%2BbNNQOrPp1SHfuEuwVQ4EeYocXELhFYNpVg4tUrDHYZCXsDLJuqzp%2F0vJh4Mm0N7cfJdtwtv48RehsbRxRpnc&X-Amz-Signature=19d05022600875819d4975333537658ecf47eef3e506704a700f7faa759ab551&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lifecycle management with Helm


명령줄에 매개변수를 추가하면 쉽게 해결할 수 있음. 하지만 왜 이런 일이 발생할까? 이 경우 Helm은 일부 관리 비밀번호에 액세스하지 않고는 모든 것을 업그레이드할 수 없음. 필요한 변경 권한을 얻기 위해서는 데이터베이스와 WordPress 웹사이트 자체에 대한 관리 권한이 필요. 또한 모든 롤백이 백업 복원 기능과 매우 유사하다는 점도 언급할 가치가 있음. 이 기능은 우리 애플리케이션에서 생성할 수 있는 파일이나 디렉토리 데이터를 다루지 않음. 대신 Helm은 Kubernetes 객체의 선언문 또는 매니페스트 파일을 백업하고 복원. 따라서 외부 데이터베이스와 같이 지속적인 볼륨이나 다른 형태의 지속적인 데이터를 사용하는 경우 롤백을 통해 해당 데이터도 복원할 수 없음.


따라서 차트를 업그레이드하기 전에 데이터베이스를 일관되게 백업하거나 데이터베이스를 롤백하거나 복원할 수 있는 옵션이 있지만, 이를 차트 훅이라고 하는 방법을 사용하여 수행할 수 있음.


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MTHHAU%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDsUb5MhHw29%2FggX4kt9hWueFlxXYh07zt6zgyV2dLCkwIhAJjbOcfzzcszbQSpcl8Jxykj4WUytj70Jx2bnM58E48VKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSB%2FHYXTKYk54zIn4q3APEPgASxpgo9E3atkOD5xEs%2FTHBxeHR%2Bl9rmFouA%2FwM%2FaVffBKiESxDyOcBgFH0n5sMMXRlElAizJFEMdC%2B83wDTDZpxqucAH%2FSzkF%2B8kaI9v5tnL769S8pwBjiX%2FCrHUHY3IDv9leDXImCyNhXZH1qpfwOcp8sXkX7z5J6E5NPD%2BkV4xLXevxqmASxZhnVG639FT1n%2B9iOTrnp3NAtDXzh80s1pSQbeRwDYBYW29ZjHDNihZ4%2BtClvxDNSK7dLrDWh6GBJozspuk9s%2FuLq2rxThDEyhaa%2F0sV6rhAVrSEEWxpku%2BJVFmpcIyz0jP1%2B1krmHt8HDqvmymjNv6WVyxL2FKi7BYtqr2NgLzwK6t%2B3%2BGSOyuo0%2Ft4Tz%2FsOo1Cl1OoHwOW8rHmjEf9%2B26DpoI916yEheLzYh1GduCp5ZNxSuQJdqixe1HSUiUfn%2Bcjz%2BaMIE8QIfqOTxG5FVZUB4fB00o9POko5OE8K6LeFJdrj%2FRMVmm1rI6jf9M7PpqhAqFifEQoIvTtM%2FrT5gCn7kN3gJqwDgeWawzZ8PHhmJvsLcODZDGtZ5AjvJfp9Ai3HWmMcHa0TsrgIGUXDbAwig9jQZGGdcbjj6yzu7Ng%2B81T%2B9nLQZm%2BmONH97v9efDCw%2BJPABjqkATxgL%2FffrExe2QiJUWEdX9jzsae%2F5rzp6M1dTgXuGuO8QsQ1RbYmBwZ0IG5%2BX8Z99WK23pWqwEo2xILiThKD5XTJt%2Fcr28tBF%2FDRr3DJGQoVeZ78nJ%2B0vFebPM0xoQSQKb1A2l0QwsAqABAKNqnP6Okyxer3%2Bsfvn3k%2F9JXrYkxEVMSg3wRvkuJsfYx5gfbY52beDDPut1fWfQQuvnDioXnrio%2FQ&X-Amz-Signature=a3a50a4490d66c1595d6ebe212d2b25c63b7f3a278a5ca0da7e5e243471dd166&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637J6A4AD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIHoZ0Wr3rSGcjcrU27ZzYeYRnTx3tTcLYpQx%2FLisxiBXAiB0uWRfcfMkiPmu0TXdSqNsxV%2B1Ju2rvNqMtcgc0tg52SqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq0HKyQ9KjYqclSt5KtwDBNNZ40fOAotBHqS%2F4BZYDiH7yCu%2FF6fL3AE1XYhNxLjz5Fdml4p%2FCppnLv%2FNPCfHM4UUL388RO9nKuRvwBw8vA286X7f41hRliFIaPuybUaHgnN4zqbKIekA96pA9O14tqaFpSut454BrBuZ%2FySayTN%2BYdKe5G0qfnJgW6JUZ7C3bCkHOM8HCbUzwaDCP3sW3DrjhMHkURUXu9ultWPujbP%2BvJLZLjv6OEjh9je45EKNTo%2B8rkLl9tG9nwX1lZWY9pHWvh6PB40qOIPONroSfkHIWhqpDU7lKY2DiLqFTmee%2BbwX%2FGMnretqI57BGwLkOLc7UmSWnb%2F9WSaLcMQUx1vb1VtHvfBS4en%2FcBlca657KmXRAZo81Y71rX1oFUYOn4FYvbU%2FoqiG%2BeozIgzJKncKMhYX9zO4hXFNJruuBoG0CUPdKIuOXau%2BFq2U6XE8Q5btz0IopCmVxx6Kg3Dlp464YiH8SXbspMkP67%2Ft80EWcOd3%2BaFTooKU%2Ba7SvfMkVeHCDFe%2FXkmmWg54YB7%2FnIdhqfc3oLiXJrZdg3XatXamYVFqOV%2F76plzuKJwZJZveIxOXFTsxpQdWGwH1wEMrQdeK4eHQQzyt2bYZ4gbATd1DtoqihhHux5lOZswpsqTwAY6pgG%2FmYvhfwIcjSKZ0gVybXvp0exELQ11FDZ%2BVVq8LD3RE9vO9bijdVPLrC81SmL9CcKcM3qAqTCtQnbnOuO%2FE8JlbrpREkbCWoKIoroF6TlYccT%2FTDzs6fEQlW4HW4PWInwWo7YXsxpJzCzpeXVc8p1j2aX5BsFLpvPvjuayLLwPhKOZeOLEIn48oSLW5%2FzFXVE%2FvVRQJJ%2FS9P49uDvQ4gq%2By4gwjq9t&X-Amz-Signature=693910673a414db3d56b8786ce363b5dcd501a552d0be7c5ab5711a8b3b545ec&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

