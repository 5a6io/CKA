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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHR2XFI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQD1xVjqZLjbvvdLMknJaKp0LPwmqbXQMh9PEKZCeLJRlgIhAOKqylpuFIt%2FBRs%2Fb4ZG6G%2FtKj2g1hWF%2BpKHyMAsixN%2FKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg3cxHS7S2szT4Zy4q3AO1JInRc3A61rsR%2FMYk2b8z9Xm91uaT%2FVdyPIsBPKnSQBpY0ZXfbjczBIYaZR9WlQBVTrgtkpyPpFof0lnsJNM0rU1IA3Aw0cMDGxuQQjesP0iEtyjDK7FzE%2BmzKhwVpC2mSjHEuwSrLfNDFkVXSSk7l0M3LNEm8HnTRecmcx3nQDWCaJO1%2Fq6UuhHnAy7Z8EKTaL%2FFqTMJUKqVmLOj7eh%2F8uSdEdyjw6wicJu%2BB3FJQBq69ZP5BxvGGQya%2BxUGEoR39Pl5rosIL3y8C5FuUEfZnTX3BVRDaAB9wZq722PqCrdg66UEkTBrBiZs9jWW5Z2FNypVguE6aPfeSgy2NHyXySojqc4YkRsMmOGFVINQy1bn7EI5CmYohxdiCJ5wFxXikoMoSk3Mn2FzF3YtywollZAPqc9hrOtxrSQNoYCdQFcZwaRaY5U6MtAl%2BwRl7ywMbywAd6eETeIBb0RXx5Ou2%2FHSS9aeo78JMp4XZ3aOlMCpaqyy84lXoFew0242gw4MnWLmhYbuvK3Qe48Rh6iFTCy5YB%2Bn314EzwyC1m7OKpz1VTpisAOEkGMGOsHdVfWIOYSliQCXKy0vyxV0Wbjv6Pkn1dSR7GO5mCGuOELByGuR85jvhfuyLsuhqjDGyM3ABjqkATt2tPILOUaW4zQIYxll3Yr8lervj4aAHvnVnqKKkKK9KcINCre%2FFCqDlFfUUV9bc9aI7G8lHjAPAgF4yhJuCjo2TeDIwaUTaSt6K%2BT0zGmcF9fs1%2BRexW3I0TPnUB65sNTjN%2FE25JvkuZWfopF8%2FUNeL3BojAmtI21Ho0BW%2BQ8jTHQwRvtfu5m1AFCmgAw3gRvzV4jeR79mb2xCyP%2Fhki5l7Nxd&X-Amz-Signature=8b23a8f635602845713572193a086bed382afcee635d610b7dcfc39e1132bcba&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCC7CXI%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDRD2CVHQUAp9YnItigNDI6v4Ak9ZsVR4Xkq6aWB6NregIgIrb%2FuEdYyLKHjVgYe090SdxpgJuUk4OnK5kqx0PCJikqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJRqXczLDj9wDuXhqCrcA4OZzFYeonHHkCaePdK2Dt6zmiN5lgiDCbQe1eAzlsHfSgQ3%2FX8QGe0qVOlfyocouRQBGbaRpmcV0l2GF%2BDJUg%2Fwh%2F%2BP13krxEC2kCZ3tkZi5PnIkaE7r7yhpEVkkVOcBdRWcWZV%2BbbVm5Umz7LJiGddne%2BKiY9u9A40Rz7dNzTTg6B7SZNMaMWdSP9IAWVzge%2FUB5BoZbE5Fh4Kmg%2Fqd2FyJBBuLRz7xZ5cpSxktQwcmKjNbmABOo943zKYKcoXbZBstBY3tmNdcRLVlTuMme1a%2FxIYbaKYIuumoeOW0j9HEvj1DCdlDLZBK1H7qhP512PPU%2FjST%2FQ9mVwo%2Bu5YQq1QP%2F%2FqNFene1OOqfbzXVQILm0GAILfxp2QuFIxN9n7Q1tP9P2Yb7WJfthmiHj2H%2FD0trc3kmKDdSSnNpzhhWcU4GY6fiqwPAsVoXCdb%2FFHHcCZ5EKn1POGKdidqgQ4QAup277%2BAylkpwoIIb0QrmUbWRmtMLADj%2FKKb5Guw%2B1gtLHM1Li5kAfB8iB8ItwTq0qphrxwclSjR3KG%2F%2FRSCPdYWkXL7nk6h8hMtnPRrc%2Bbaqi0ateHujYbBvRKWwlzo0%2F9syua349YsdgZhj0J9jS0hL0eo1MXkY2wdKqdMMbIzcAGOqUBmvBApvb9L6re50y59sEXEfE3%2BAuHJifSS5hdPoJzVjmWfddGirm7K3w344%2FzSWhIts9sas2%2FjxaRGQoAI1Klf%2BLsK5w9f8IE9bWNfp2XHYHb1LM3F7jXm%2FmFjT6eOR7rlONhHYogVcv%2F5w43iXqipMW%2FVlovmsDSpFsyA0Hvrl8xknInGFMCeml%2FJpZDT%2BKqUF4KWA8T%2FxkckxxNbc%2BdeTxnAYy0&X-Amz-Signature=a831973c4a90c8edb5cea6c6a00dda51bef34a3aec6094642ce3e8eace321790&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJP7WQVL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCID2Igay19w0SPUiUgOF1Yz7dYn2y8DbspvYwfon2q6KXAiEAkZ6wJyq%2FStSE6seDg3zQ%2BPwYPuBCrBZYZEwxYKsrQIwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAu0gQ%2Fa7T0FycJGcCrcA5Uke16i7NowaUgfEYYs2%2BbqBDTee8XXvrCz8ROni6ns4g7%2BUR2gLxEy%2BLsVmV7BDprubjXBVMBcODcEbuIsJHyAmx48%2BMCXD2C7Nd%2B5fH1ur8r%2F16Hialgr43sKeRsynYn3qlZ0QYhx5J69JgOqMj7y%2FMtzsEqMnC7sba5ylgdIVlEgfVY5pzCyrSAnyKSjh3mI3DKGVKPKKSdJ22FUwVvrPmaMDyoKCYFublcDXLgegmyOK6YUHKnR5Icnh6rfNB%2BQXNQ9cjFH9%2BpkyJsT8Loe%2FJ3NvW0Gt%2FNCBeLHlGC7dFkeRfIraifC2ZaDwcTZnjZb6ukSlegcF4ztX0cOVxzBExt5NsGKIBsT1HwQPQImlarZiyLLqusF2CDwSzhwf%2Fl4OPrT%2BbAcXOLEOVH%2FQHtuN8ePChGJviipYPGSGASPgFzDx%2Bi2AFukOTECP0uTDJTGtg6Kh%2BDXLUIZBGgp4v1Tsjm5QIdwIAKrclmVDlt9aN8KZilIx5IkWCziRt6LBeIKprpUTp4vK8wE%2B7YlyNmy4lDzjxTRzhUOb1k8a%2BU0e0MW6X26BxpNJqViKmALjs0%2F6o3gZeAwxUPYuKyv8lSmwU2HUu6Y0xn3ErljbPBKgeUWXb9aRGbE53pJMJnJzcAGOqUBISjqaR69eoOyZrsnK0ey%2BN48ReY49kUKEq7QnJE01CvqNkb54%2BrGQlUQnmXCn36OCTqgtKeNeJYe%2B1%2BVnffGHxLoqMMvwgTMrSnlTb84NqxUQ7Mc38oWsbnesOY8vel34EAKbWqsjNVvn62oMa9zdCoAJPvjw7IofqRXcJyVaHQZ8bWQ8z6JTw0Xd55aIcHkksXsFoW%2BKPEaa8uF4UubTgCbzzRY&X-Amz-Signature=920fa703cf915684a742d076b4818e11d486787d0a904abceda4a9808b1c61b4&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQPEWPK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAdA9fbDMBmB2DFYRfA6zYtD3XgHOXOzIZs6QKQlL3teAiBuyW6VAumnyMKcloJJkeUxjG%2FxBYFFJ5NNXL43NTYrayqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BSHcWiR1apN%2FqUWKtwDc6WP45voOQIz%2BHsj8w2qBCImwyvSoe1bJxJCL4qQgPJ2bmyBOQcODmnfbmjnaGd6D7qUxaSw6nHo4OdlCfBqB0ib9Q%2FDZTNyxcsNDPtW9YXx3kmwU4KdXpEGxiDxRoho40oXCIpZJKbsN9qpZQuXsnorHucmG6GOzB7vP167OCvgI0LGPdPXwCagUUJ7XVB5svdPrIVDw9ALWLS%2BlJtrhDpJ%2BMEi1%2Fejnb8zwF3A0Z1tYInkQ4pzDGcrsyDHsye3hamWdO%2BLg82%2Bs7lECwSF4NZgW3%2BgB%2F9RtEvI%2BRDl3Mz296vbd2RtepQNRzjhN7fRlFW655nXUhB1TBItw170Je5svSHhVedDmLQUA%2B6bWDgIun0UGZmvICI1TS1wIGWTdAm1M1OtnWHnO%2BByPMfb9udBF%2BVXBB%2F38AlCwwYE1j9Z270FhJpVDTfdzsxFyZkdJpDTadrx%2FVN01GzhjuiaEay6nmX7oTGGXIJwpfQGuKzPqUyiuiBqQD7L8i7jPSSmmS2tpeRHfvuo8GJXLHLRYRu55BC0AuN4R4BZ%2B3%2FoGmJBG8B0ATfPRHCaG%2Fy0xO58fwVjYMVMV2iBJPMLu3RyfxEDEmnE0m6sneYlBngEbsF6xv3NLjffSkn9rbwwhsnNwAY6pgGhiGhw7SM9476JkQYe0fnJVnrH5dhyfL78vJQUzn5ijxZiw8IyE%2FdnVytSgyja8gEnI1yMeibYHM2xSXdl%2BzSRtEZwar3orrR1YMw8z8kAxzj7qeXSYBLVsGtyp036U2T9dY%2BMwBPK3%2FiABVpeqyEybGh%2BES4K1pU1sg2Fu%2FwXOyWc8Qsjl6uvZKmG8UV5DKAPwTme55PNQvnuTPuz11VFDOOc03dy&X-Amz-Signature=9073684fefcfe3ff8e338048192ce9642f2d52ad95d6eddbb5f30b5a8e5191fe&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFEZJO4R%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDY57tcIjjYhCgEbFpqVolLCmde7FzsdbZRy4Qnp5ANPgIgDJbuTQc8s7Kfi2ncX3s7kyb5WFzY4KaB%2BcL1u08%2BocEqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPmc1JaiqQ%2B99teVCrcAwsKew49XiCavIG9ixdFV1f6Z8XZIkNUQRV0KcVc%2FDeSH1IcHGCdUTHKDSJBUg%2B%2BtZ45uYKKa%2B2ji4gJu6AoGP2Ik6hkkUZXTe7RsYSvs0I6kZZE%2B2AATZWKSBFu%2BCha4VwiLcKlURfJAr4PxeTBBJ8gr0d1CUcHg70Sx06jfSbAle83XCpZ%2F4c08MhP%2FWA02bzaMJhyTkuvDchZbVHQPzo16lsKrKbSpI8BiIMb6RP593klNgY6shPCBt4rMbslcl1rzXY4mt7Z4T8TlzsZEoh4viTlGLdnT8co8Dzv5qTmCSbXcShTI11Fm4fAZWP%2FQk3FIhREYD5y2iKkVMC7v0d0t2FRzCQh%2FHd8loC1pDVZfm8C%2FSm%2FdBqJAd1xkxfwIJhYQBRwRy4ofGdF0aQRovVrESQaK9bVLEk0tf5af9pExkcIVHIdGFb%2FWUfbs7%2ByWASA30n6fGWSSHHKaKn8b91OFRt4x%2BZkCGQHQtTUQNTYr7SyJAN2xuIwAVLK4EbFqrXDGwhFLvOm%2BLEJu%2FDWvYL%2F9d6KKkK9RMSMYT6%2BOK2bbvCbS5T5dj5b7a2YUY3X1jzW6y1we%2F%2BDfXbexyvd%2BZlKXoVBY4fVakA0b43TWxhNg5TCiPFPx1I55v1kMJnJzcAGOqUB35f3ApHy7fyqAADpZ9Q4hX8LVgw%2FsOeayotYk%2Fb%2Bc9w0gF1HtF7RN7H3WscvnoRo6OQvR8mqplXy5QbUCgF%2BSYe8LK9bjmKncrmkManqQcH9qqtR8%2FEj%2F03aHmwtEIFOkUVLBXuNeC%2FkIp444KL1Qum4jvm%2FYKL07%2BriPKa7U%2F9iSLOAvrNrxEkuEmr4hsP217AB5iX9exmQTR%2FNJuaJH08vHTDZ&X-Amz-Signature=b4e041b197bca64202578201c9f045e9dc4687529b1b322ec5780ef79256a446&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDSENPUF%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDEDI1iY4h%2FHFyuMFG4ZCAtlBn30QTSfyF9jH2Vf9F8nAIhALHny7q%2BnEvmycpwLxcfvTNXkpo%2BckstC8fW2S8jthOOKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJMw1A7TDOkMsfUxIq3AMUW3mIhdX6QrJKFOIeCyeMULQJ0kZjUEVevFxGZyJUM%2B6p6B%2FWko%2Fi6ZsGNLrSt0fgBIvq1feDFXlz4%2BLXriGHtdKz6lkRsDCaVue%2FrcCi1%2FSE036sRpJyz5lKAVvIsrq%2Fel8Y48Xx%2BbZ8dpySthHJujuTb4SroofsAzlQ1xtRCurp5zUqpRmWfCpFiKY5NaRTuQbz9BE4FZdIbEUNFT3N34p4f%2FJHirQx2dFIhaaMM03tO6kRN%2FCpSNAxlEeCHPN2ifIbCMH2C5h9uyAe2KUCBWRAJgpq8734rqFT7sDr0eiVoofPFpNuAu7iiyZSIXXAHWYIupUwvpTF76df5DyH736vXQOoMXuOFOmm%2B6nYX4XDlNGX92m8NLNrKARHi68tFCs42249QCcSrqVhihO5Yd7%2BbUa5yIa50nVPJnjPZ3UoRx36czVImqGQCUX1xnU%2FZgwd81RxC%2FHd9yy8ZjA6P7IsMRdRQU6JehB67p32YGryWyFpf5LZjBGMA2dYWRemskAyAhKyuvkSYTKmilInsiNnt71uMNNxze5uqBFZlRUwve%2F5%2Fpac3ayDQBdp2ivk6NEJcxHc6pNLBduxSVwLLudPWBC9VrdoqhN3UZonkV9gOjP4n8DJX2p1FjCdyc3ABjqkAXj0Q5VnUui68UEzUOe9bfhfdnkCwuMHKqjhUbl9LySVBRt2El3KNgTll2QUY%2FbqareRjxpDSHpEDqQANktsP31MfXAAfpBb6w9Vizf%2FtJo3S3im8zXEvHmWbhv6Qd%2BButBjUWTQJkXCJlYZ3c%2FmDCcJb0y%2FK%2FOXBIcz8PoEeHc8LjMOGwP8L9r7T%2FKn8HtDUFRZPzqc6HkjTttaiMvcrJVp67yM&X-Amz-Signature=f9fb10927755d9144b1f2781e9d2d89a5a0d77af04a5018d84800815f90ae39d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQPEWPK%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAdA9fbDMBmB2DFYRfA6zYtD3XgHOXOzIZs6QKQlL3teAiBuyW6VAumnyMKcloJJkeUxjG%2FxBYFFJ5NNXL43NTYrayqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx%2BSHcWiR1apN%2FqUWKtwDc6WP45voOQIz%2BHsj8w2qBCImwyvSoe1bJxJCL4qQgPJ2bmyBOQcODmnfbmjnaGd6D7qUxaSw6nHo4OdlCfBqB0ib9Q%2FDZTNyxcsNDPtW9YXx3kmwU4KdXpEGxiDxRoho40oXCIpZJKbsN9qpZQuXsnorHucmG6GOzB7vP167OCvgI0LGPdPXwCagUUJ7XVB5svdPrIVDw9ALWLS%2BlJtrhDpJ%2BMEi1%2Fejnb8zwF3A0Z1tYInkQ4pzDGcrsyDHsye3hamWdO%2BLg82%2Bs7lECwSF4NZgW3%2BgB%2F9RtEvI%2BRDl3Mz296vbd2RtepQNRzjhN7fRlFW655nXUhB1TBItw170Je5svSHhVedDmLQUA%2B6bWDgIun0UGZmvICI1TS1wIGWTdAm1M1OtnWHnO%2BByPMfb9udBF%2BVXBB%2F38AlCwwYE1j9Z270FhJpVDTfdzsxFyZkdJpDTadrx%2FVN01GzhjuiaEay6nmX7oTGGXIJwpfQGuKzPqUyiuiBqQD7L8i7jPSSmmS2tpeRHfvuo8GJXLHLRYRu55BC0AuN4R4BZ%2B3%2FoGmJBG8B0ATfPRHCaG%2Fy0xO58fwVjYMVMV2iBJPMLu3RyfxEDEmnE0m6sneYlBngEbsF6xv3NLjffSkn9rbwwhsnNwAY6pgGhiGhw7SM9476JkQYe0fnJVnrH5dhyfL78vJQUzn5ijxZiw8IyE%2FdnVytSgyja8gEnI1yMeibYHM2xSXdl%2BzSRtEZwar3orrR1YMw8z8kAxzj7qeXSYBLVsGtyp036U2T9dY%2BMwBPK3%2FiABVpeqyEybGh%2BES4K1pU1sg2Fu%2FwXOyWc8Qsjl6uvZKmG8UV5DKAPwTme55PNQvnuTPuz11VFDOOc03dy&X-Amz-Signature=b08903afa103eef3d71e4e9ee2bd1afacdf197353f3a8c43526609a8c63a4f33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLLW2IWW%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAw8QWt2tIOS9YykXWHLkZe4X165pNuVFwvYCHcIlA29AiB5z5w6LmH6deBmU7ve54BN7kQ4i2ot0%2FxeDoFd7DDbBiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS419wTEZBXCnFv26KtwDYrK0i7nt%2FORVtBjIWRd7eDXc7l8AG%2Be6QYDka3648wlSoaeViVux6MVIxTPIW06hcLrdbkLnVYyGGOk4Z8%2FulmUesGPvtC1VcY5D3ytkaJycqUdcjM72cQNzY7sudgrAOc9bNWtb%2B9QjQnvTCCRl7NsdxXERsjsqItfx7kwYU5yYtfiuo9XiSf9aWjQX%2BxuyJSg%2FMqOXxXOHnCZNfr7RQXc%2BfdWrYHZZPxmewIcJPZ2tVKg%2BNnCfIdp3alWer17ivKUY7MS48I4czHgtmcwCGx1FHnN2fa6NFfmE2i%2BoVT0B7HsMgBJXrOrecKajMRSyV3JVD3ZWqbZvcXRubo1gg%2BjoqvDL8h0CY2RDC0x%2FBjEbcU0PTir95ER02BWUjpztXxruxwQn6%2F5KZQMVBFarpiMgfRol3KWQmAcIxdA31k%2FCmUsvjgl9nadkHkM89uIPTTYhT%2BTVHSslTU5qKVG%2BAvPE7iad0myxni6ttqyQzHe%2BV4xkR7VLSWimvlJIe7xhcN%2BBEpCFW9Nmd5db3rovTGA2u42Nu8z2FxgntJIjDznIr1xfqBKpxCwXoudR%2FweEm%2BnaMwXI5JnAxI5Un2yz1dO2mTVvBoJcaWtIX5qgNO3lutCrCQWl3vH%2FT3EwkcnNwAY6pgG39ZaN4ReRrA7iZht8Hho0NpR9HURPBjvlQZgE3LFbIa4N6am5K8fh1LELSenHWIQ%2BgL8BtocGonwshvKHxq8TLdTmAvMI8eRCgarkpCqufQ7sbK7divG2QMxzhLqmKtxQLDIrx%2B7p9Z3XmOqRTy%2FK9H%2FDsV%2BHMTGfM0quNLFqrUjh8IYgcq32%2FRVvPnjZRQVcCcU%2FGro3SVO71WfaVv4h3R8Mhvhg&X-Amz-Signature=6b1acff1bf35c247aff2803758df7f31091804c14e285fef9fef0be0dbb973a4&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMXJWFC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T141142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCxhBKtdJNRjJa0CYtHTJzzedgYu5UNo%2Fg179f3cnSgYAIgJ2mXk0rd3rnPxqJbRhnPpg1hsHNgFQR2%2FKqImZ3LW60qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlnfq4EYWEmcVeEZSrcAyDRwKz5bHHYmMW%2BLr786ct%2FTGoMLaujEKcFSWbg30FeRA8q2Sg03zhOEtnVqFdHUyUHZtvh9z4D798Id0TaK0z4%2FOFTgBGTplxOtx6slUOkjpzdaXae6AJuTyTJ14b6XyLe6b0fO0olxtP%2F9rZZSXU4UnL1XduFfqiWUoNeV3ScARXltSolRci3DltFKltCTesHWSP2S15Lu4xkEJaqBASilYqzY1nwMwDT2wGqoe1S913Dmtb00h6qvMiH%2FkPzyTjvVjnZ679FpoC8%2FF1SK%2Fom15PuvyMsXHSR63PAlHhasMyhEo3p8qCiQEkO2h0rO%2BHDYUlIped6p32tgZ13oOFWkIJCfEj4n4XQb3c33V0XuNM3xhMtsbtq3IIU7CiEAyHPD9Tlcx0LWpE3bLzMa%2BO9RMk6nVBEL6P5BrnLwzF9fl4HuDyC8slcDnBjZUT3MlGBRMeAggJBV5EUpWdmunNKYpVjOwClx4fWPNCRzg4t2l4oYE%2Bmno266Gr%2F0hEHjQZJwQ5fDyuIyOLP%2FDNUAARqfZIrrksiXvJ5rcDkse7SZs1cUMSJrx%2B%2Fqs6LEv36DNCKQJNAFtd%2BVAl%2FOuz%2FLd8Jc7uqorh29DpsXygiJX8AnLNDaXSBJ9RRomfeMMjIzcAGOqUBOq2xbezLK0Yw6bla6RpgJksFrcYuUV1lA%2FD8KX%2FQ0eE%2B%2FdgsBhexgoLDOSMQnfYU2f69rxYXnKnBq%2FbWIxUXb%2Ff1V3c1goVC3Y01OhgnwgoBJZ3s2FrQg4X8uQ2Wu65PJgLt3DoRj3MZMf9eOM9%2FeRJAx0u4M73jbCVvMfXKH9YVDZsJgvyawXKsOWJBycRuF2L7NEpAg6GPVvVsNeTRc7z%2F2orF&X-Amz-Signature=2eccd642004ed90dafda89cf62a318d9cd43902af6bb0b511802e552205e6dae&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

