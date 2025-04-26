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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTBF5IO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9Lc%2F3wdPiEaCNnTdz2RHOezFpST5YNJ08UYVQfmEsRAiAXtuOwNJl%2BvgOT6SmiHf9nk3%2Bg6lC6iiMfQCVG03O6tir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLB03BRyxv4dcuIF6KtwDGQ3mNA2QO46%2FGZRO3rBBtFC5Q5R3oRR0DsB1j37Mx8DtDBav13Rya9riH8%2BWhwHElBh13Rf4ysJCehAbYWpNeotNkt%2BVj5ruX7ogUAzmKXmUrKAG9WkXazuCirqq1OCj73Ky21B67EnDfBTmzaKEG1QYgsQe%2BUpc6%2BLBPYarE0%2FxhgMx9hj0qyV0nyAXxBndTvCpJidzU%2BSuVt3OHvRuxzboVG1En3%2FusF0jbTpJHV9NOJSlrb4Ef1dgKRrp2rIweopJ%2BWzdMe4RXgAgcwt3ovCLVeWDaF0zOJtoTt7TEI8ZjmsNKkQ4hgDBJ62tNUwlYC1cEswlOscRoUyOuwnPOSVURT4InQgnfE73qfZGrsRUxOkttrGYuVgL9bphzMU79pRZukIB1w4hC%2FFBB0A8tggRdFibDL5wrQ4mMUmdrMnHM762afNMCUm7vCBnyPAqoOXihBiI6b5eWO5REeWZSO74kQ1XUzXiW%2B88p4HNF20DaGgV8Zfx13SckfXpgBls5%2FwdX%2Fx5VnQu25%2BjGyN9vuG5j3NgJQmGTxwdJEvfgLAxgfhEJKiBX9KCGIoEZeTeyfPEQ3b96PtTJ7hx5UTLSHW1cPzdghfQiiZoFiyuHKl2EBZMnrg%2FdGy46uowrMyzwAY6pgGw6vjf5Pu6ZjX9KpsVDT3QoIC3ZWrVfAfc%2BvzeyY5H8qThZ7dlJQ2d9KKKsV2plnq9EySUK0MwRx3XwZQV35DmSWUGYu92dkyiWWK%2FSN%2BNY56%2Fwqq0BX6bBfgjWK%2FW%2FrwQVax%2FIypc0RF66uvrtQ0J1X5Zst23RSc1VyE755m8vVw6CvIFyfskZxpe3dQs7DDFkgHbckiquT9Ff7owfXTwrkV%2FZn5A&X-Amz-Signature=6e2e50384e2d2c6e05baed72fef418a95b98192a54d8735f2ce90bbc57fb7255&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U63NVEKI%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJ%2B8%2FyMwnhoUfNxy%2FE%2B%2BNxMYdXFvGdq6lrgL5AyQehXAiAjHuJA90tsdDRftE%2F6t1td8z6ghssjM7B%2BoYUF3jsbMir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMkPlDB%2FNCQ0sQgqpXKtwDSKMZUdROaXeqHwVMC%2Bc9Ax92jS0pemuXrMAJ4Sj09V61H9SU0iHwT5NywtxxEsPxTn%2B8y2QYJ4quMw5iB%2BCJhX0m0WTrfHfBjx6LujdM8HPclmngZrKpo%2F85gUTW46fw6qa5joZ4XVQsBrxJDL98UuvWVZlduB7xYtMVS8HWG1tqnxhw%2BC2KPtjarAE4K5OCZIQxyXDBPbjsOHDiUOCNOl3HQ3SxBP6vx1nRNs1vFYhu6mV5UDGTo4CtMpVUwaS6EbtSIThREo9MlBjh3w%2B9V4RJ4LSr16xFRul9YRSj50n5OMynAwTj2Qmz6lSByAYbdAaAkxop9kItyXrRlm%2BgAT7jknXghIZkWNCXp8oanaXB5IP7o%2FPcAtwzj6VAxgC%2F2FphcYeaLztDTkoAsz0%2BSlZ3naqNtUtveqviO%2Fxoc9ZdNKhNSzwvyZy3l6SQF4FU1W8srYwRq%2B3RGwYe2kLqgyjVWo7SYABi2kKtEcdUT%2BLybfT6eN4FeL3K5tgEm7m%2F50X9yPSjZgK5ZatNV9Kl9JFPOpMihyangfnx6dqL6AK18lmNMQe03xAlJVOUSlow7EO9%2F%2BnM8AW8xel6zxdE6bP%2BMkRtcxx48HlpBg3pWUnykd%2FKuD6HIUig%2Fg4wncyzwAY6pgGcTwEZRHqqdREkpaq4Mq9H9bG8kyKgvP7F9HYq6M19GSopz8jWtsMU3i0oEUxXk%2Bsz9RtdSC85ZemlRE%2F8lWSqK5iLvgsEgu%2F%2FSYC%2B5DTUJ7Bg07cOujSPleOSUW4Zysq4nGJaBELkl8JnceHg6wPDivURtsjw%2B38m9iiy1xf0Qc4qzm8lVopVatWJff5b6z8hTrXUy1pYECcw8yZeyyi9GeCouhf%2B&X-Amz-Signature=55c2134759e1a03c074020a903fcba856245901b7251310df96605dacd3cd9a4&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HQY6XFZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BtTG26q6m48ZW5utSYCiy44bvRRua4s8LkMHP%2FKQlqwIgHQJjlapTHk%2Bv8tQLgrY4WdUg0d9s%2FWosT%2FbDYhAfCOsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDOcfQw2Or8jesOPJPyrcA4cW9jJWUH2fHz6nEqEsuIp3pVH2m%2FHvzgUe7%2BxjF5xPgs3ZMh6YkAIQwWlO6klmLIxR9h1GtdKiW8pYDO5lMwJSw7Vt5y%2FUGXpliFAkutbl8UZxcVlN3EHbwk5UUmreUsxvkWv50G60tWAPjAOx0Hlvl9Fmr0zY2jPosQ0RXFTLdCGuXW0QXmAxEgBMxrEDVCQMurjGyo8n9679f7ektcQPcTxxp8KHinNNFI%2BvaDuj5TlTL4BSaLbAzJgG7b7M%2Bf3BV%2FThu8kRzJO57zw6%2FpPpxJwKfUNEBGPDWqitIV774PC%2FY%2Fw9PJ2kxUhMwYMKFrxkPEMB9OjxGXMO1JcfY%2FjGoiySAlVoOSSG0s6HFT2HbQVlOlByuEJ%2BB6ZKCJk1ovghsTgmjJ%2BD3RQwpI8WY7%2FcU6t3524w4skQaTEfu20Ye2aaN1ZE%2BTv36mnzPw1si8FoYUwjQDnvYHge6ahFmpGit0FL9ooJNWHCAUhBOMvJdow3Yz0iSHLKA0gCcjtDSe9yLlMnH1QhUJ%2BbSPPTmJs%2F%2BDd%2FH4UTmRvNKRRfPz11dtVRLsFyNsSwFtf3gqX%2BmIhtrzpvfF%2BxIFB%2BOz523MHgyg9iNlC8SffqMuLuMep63tDXai%2Bmrc1HXmQfMIDNs8AGOqUBH%2FLiQg66pgb%2Fb%2BXXvG2igpGgXIPRrbdb%2BSEMIUuu1WpPto86uQ5ll3TIBW9jjfQLYj%2FjLBHf2RPlRWjqdk95d8OUUaUUdLtxhJFu5H3iY9xcrnh7x54NH3xOj3%2FnSo71pkQ62QGXjD8dF9O2aTsTc5WgDabbSZQAhXkK0UIz%2B2ZpgWlAjC68bhZlutYv870kGChZQW2q4jSCTUMLV%2FBFl3qHEzcL&X-Amz-Signature=6f159c3156f91422cb95b186aa64c1a94442d33565a150ba81a4030d6ab7cc6b&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R256N6WX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD41gxgbxXbE1PGN2u41jo8AgFCbSwEdoin5gEtNsYetwIgB3G6bFq2Ot5zm0c4nPxdkP%2BuWYkAYiEC%2BP9abmIEa4Uq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDBze6QlP4vy8jXxv0SrcA3C%2B%2FEiCtK6BhKuy5Ud3Bi5lrBoTivz51RKAiJsFzIRgZx8naUzflxEKs9V%2F4Ed4Gz78WJ4PtFviIBV4I1cWs04x7A3xFI0tdcm3V4GaipYuyLUN3sUWXykHvkoG48RyaU%2FkmhgkC2ge%2FOzFO8IDv2Z50y6ifMt6Dg38smF4GVlJWbsnEP3Su4r0HwfhveXinB83WT0NtDBsAxSQXB%2F0GcGv4x1Eovy0u27PFA%2B9D7N0llMZFFpNIEI4ZLdnHcdK5IHZfHEF4ebiu5%2FlQ9nuo8OZD%2BcISa2b3ZHzxPNFSmh3zTwSL0aRc%2Fr1z1kcBnU2q%2F%2BspzykZs%2F0d%2BAiZWEeTDEAwoS1DqHxbYSkqlHFAd3gqMEv6Kuxl5ofxKa3NFE7w%2FIR9Jxju3ToJHSgUk0isOdk89DvuRprHkuzrkgVMpRBcmapMv%2F3%2FEWvrAVCIxQlhN0ciXuP4VQjmHduo%2Fpec2j5c07hsYouRMSHeenTS3gchG1ktUIUuZ0F2kny6NZgQdsStNT7K7LhAmnvHQ4uZlSN0DHU1%2FJbXegDC1ZLnFqpIP97A0cFzjz6K4hIjgn6CK1nJlV2M7039WNErg03s0ePYXObo48Q6ScZsK%2FZKlXmNgi8q%2FdGqPg2zx2HMKLMs8AGOqUBJpJZ4FQJcuzO%2FAral%2FG5X58dBfuaZAIQME%2FD2Qb%2BOCYWyXej4UhG9gLjP7xiKx%2BUbE3quDV3yNrDSJf8wRZIQp2c2YORSq7IqZUHuQkSLsoVRWW7oE7FSomftWE4FK5FTGi333wbgYHov8nxqEpEGCkE9MAKSE1lVnB8FCSiSJNH%2FiW5sNEb%2BKMrVoL0NRKrPHJpE8ePh0M2TZfXblxc3Lc9Pw2y&X-Amz-Signature=5994418ebd46f9ddce6fb8871c32d962c30cf608159bbe1c772691af1a06cae7&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2IC33B%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGTbF1Xpp9MgEScqiMcF0s6WA%2B5h8lfJp34iNXFaSa4QIhAMpKe3D2gijTcmwqJHFLvx5Hmp%2BZJwhLPHg4ngW%2FDcOEKv8DCEcQABoMNjM3NDIzMTgzODA1IgzHZ6%2BX3lcX7j1S%2Bu0q3AMi%2BYmNqi9j9Nz0uY7GwZUTxAzfgc4fy4RaB5Hfprh5QKBnAhn5nAf4BjBYnNBV%2FG1%2BF52p2pxwk5SDPKkfH6OnYv4709yQzOEB8wuuxbR0E96d9m8CQ8kiakfKpq8d96Inb5%2BKOPYm%2FbfDDiAkdG%2Fn0yU9EOU71651ArS%2BMzOW7HaGQQhSK95zLmmo7SzyXmZJxH%2BnPqZ%2BEuQ9s7J2R2J3acGZNtgO9ckSJhMJRzNQZs3arpEgRuwqt%2B4N8xf%2BCq%2BEc%2FjrI5L9FSj3p2%2FoVhvRDIiH1TAcXNI7a8Dl4utle8Q9kaAFFOBfVdvjgBdAbowxdQmSlZG32RljdHqU477dtJp7CrCEnP5Sv7o058lvGGPbi1hmfMez3gfPOzOGHjyixGBi0574uGDOC2gc810ObtCReX7y%2FdrIv9fRS5D32Qdt8059fmCl7%2BaLm7txBEPf%2BdQ0PogDz6g3uZA6vSveMrQR7APfa2LNQEgWHRVFoUAUpS1wCaB1T0ZXQrlOxNZi3ojba6oEy5XktkSCavzpxSByX97XIxh0YKSm2YTbHah43AQLH4K1HYbxOBh31Rn5EUyDH8OXSTTbEli0%2F44zbUs7FKaTANC2nV1TO2gCkfAw6OeN4NCO6MdXczCvzLPABjqkAYV3WskImfbXbBrAHr5TQ0xCSkjiUr0YRvgl1gvnHAkvJa%2FJ21jF6KX0QIfBd3ZfPUUbSKeEOF6sU%2BNm6j%2F3ahd2e4Pgmq2pwuNhy5WEa%2B4ZtqfkUX0qAPJqrq4dfn3C25FT7PXha4GVp4otcVAqh0cVGLloF6HnuqJpnAJ529vkD%2Ffa1Xj%2FYwtOADLu%2BfB8RBJ%2BQOB5UoEi%2BuWiOU%2F%2F4e%2BfRVtu&X-Amz-Signature=ff5150c284e523060e1cee7423de8e6a636c9fb81b8fddc43cf03708472bc8bc&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675RIP35G%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgcqMh%2BbG1vvQHwxgEUwmASEsHdYuzE9okmuColOtqDAiEA2fQLAapGdyMiyFl0Orp%2FW3GuURqCcZFDcl887N8zeQMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJhyIGFqSvax2PnADyrcAzRnzihtbb%2FRsw8%2FacIib0y6CmLY6Ju6wczrv4PeGOwTGWLrXJGttbg4VGfdpDqTpfOmuFOw7HwfGhq0BKBRtFr7rW5tdB9D%2BByPGFD1MZlKnhB0Q%2BsOvWph85UyoXaaS5%2BTZZgwRecUCc71dPfJQXQlej%2BHyooaZBEgqnB8N%2Fb5gfG0b1HFLeQ1BqxSeTbyDUGxyXAGPJ4ZviVEwqLp8xPxkalm3Fz6Y57gjIPMIPBnz7VcV2Krhxfq7FZmPUz8XdUIDwmayE24sgOuXdyhZw1MVYCqRA04sdL7Dk5iOw60Vm6Pd6SaeP2YzeQ3lXptYq%2BqG2PFQ5QCnxqEVDYGLtigSh0jE2RpHNNQqZ9e9d8eziLE5yyGPfbtDcH%2FXq8YI5TWwmfV1QKgt%2BDtY6HkZ9jm08sKiZCIm3Dj%2BrO1Ca1kQt2Cbryaydc3Gb%2Bx7IMS0MhlFHOECJp9DR4Gy45tYPbQ2EmwN%2Fyh6cYc4%2BR0VYCrsGwsY1OcXd0kCxTnBQ5FRx%2F0aD1BHTaa4p%2FBCDXjv%2FJoOdSucp5gI6LYMeOZEhYjsITZ3GSOLcqUetKjky8iQOpVaDZFkEXq%2FqMtmEr8hG4tYJUOgdxmmd3e6zIci%2Bxb1fqz2SNR6APjuWS5MMzMs8AGOqUBECRGjfpe9Ybb1%2FwC8CDuFgVFpCJC8y48MrXVm%2FLD3JjpcgdnIRUiUvhhmJ8hZlDhhfBa1ijhk6eZsc9QA%2BGvux4xxEKZlZQftQ4ZYg4iL7mjFSsfKbHEjC%2BkV08QP4yqyES99z86kVvWXTzgM9pkokPalbUh7fOka7s0ynfwpabt9B1TLPIpBD7s4eU%2B7UO7XHK8NftcVTCIz5vDQt5FGOMHOgum&X-Amz-Signature=cb5c27a68de5532720b03c151a4ea9f0adc62a93261b2436e3bd5317b3b89a96&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQSL33W%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYE4aTwCpUaQb0allquw%2FRPC3Jl9jTeWzpDyasPuNtxgIgEtd98lC%2F4V6VnSlgsdzDtB7YulUu%2F2EtcvtKdVHsNA4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDK7w8qZsP0X4IOv%2FJCrcA4KrJeOR%2BfacFxccT52Cd88g3QuWVT9TNLsx4mDaB%2FyE3RtRBC0Gnf1wg1dtoTnNIzwpu5lfoG0d6u5nr7fCdG2m%2FgfZ2dVLPr8EmiLueF9w9e0rHernMPsyMQEkFmsVW7pNHCwhYnu42ddNLI2KmH3y0rQ1v1q0jfPVzjfKC9hUb%2B4Da3RaMElgRdM%2BjnfkPYQJrjOp5w4D48UC4PPN9oxdykZdH9RwYMhTvZLf6L2Pgk71qZ5fvrfyffkUhtxunIeh657dgNAR%2FP6op9SMygNlL9tDymoWGWC6dFIn0EKEVy72FGodHVU7PPInIfLJfTQyFB5TbXNKE%2FURPFHrLzZoRQRadyQ7O3N2r%2BUV2wFg3T7RWic27uvdr%2FAMaKioEqmxe3azJqTpQDPERiiMXCaLc5VccWfk5KbthK4VZdRJI6RVYC9Yuzb0LzQkNBmV%2By1SUMl9RTnII32BqAYOYhaJwvvPigWdUT13nzAVAYVuA3KFMS%2FgEFvZaZBHSBIzsdx7CK52KgDhvytey0zXkHUKo%2Fipsic5mEIXmYAyZ%2FDcxPoj9W7Q1II1tvJ7zKgAhqmqVu%2BluouPRCxxdYbudunI2J8LxR4cAWal7NMYH1bGoCyizUZ4l6aygPedMK%2FMs8AGOqUB5HCHROXS2hYfd4ehXgeOFafvlKTtw9ug4xTNefm%2Bel2ewLjIMZBphqWoQdtTLbkJFREpGQyLg3vdIujewzK8iCpoTqdyUo2IzQ6mcRi5QNionI3q5zAwtZ%2F8jyBqD1FjzTw1rBbNPw8DeJMdrcUIKCk2I%2BEmbTCg1a54K1RwgSoKCbnvRPX0AAFFmpYA2kn1IjLmXcbgrLGH78lWaqWtVompUBvo&X-Amz-Signature=43ce9e27609ac098be79dee858886d9d691863dfee4837317ff177d0d2141d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CPX3AIZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUwKIiHkVrCqR%2FI12WacgiHFWXZ1cvFpIApRZ3jGNq6wIhAPN71cOnVgMWT26Kn%2FHW34LPlxzzjnV2mhMV%2BSquQ%2BwRKv8DCEcQABoMNjM3NDIzMTgzODA1Igy6OBO56cCdcy3eORMq3APZbarQG6J4%2BR77qI19NImsTGv5QcvpVJ8dZ0cyVt61svHlPbYvrq9T17Ec9CVJHn0v8QUZ%2FvHS1SY270sIuP5BTAd1oEfj%2FRmQA8dijhU3ru%2BxIbwsJjQOoiYopxxzj2vo2irifrpVP%2Bn%2F1OP4JBbGfV7iDRtuRryXI1WICecJzMuGhzLJZApT3iae2R7HIzHRgvb%2BWpSI6tyCYwYAgLgWv%2F6M%2Fly9fodQJHhqboA0yzIFTljIL33vHYdmYQ46wTs80cyJEoZDM8kcYMhmrYgq54D3ege5pVxfmY4k0Ez1L1PzvROYVU54tW8B186JgGL7mYLoKXBN9v%2BnwCZdZnraaZVvaWB2NLZr3IyiKT5mM6VvBuT9RlLK26wPEZ5Cn41Tl%2FcW4IhSs5tpvCCfkf4LELS58pPTXBlE%2Fl%2BKKBeelZOwWXhXixNg%2BCgO2r8ZMFC6i9CMncNr0ILAHAs9loPp4TFfY%2B2Jd29EFM%2FuDRdrrOkRChqSNpQD1aflFSf8P5ikCUvwi6UYrfvNzlnJcjskCTAlSH47UNGKV9J%2F%2BkseLq6F49jWGBBD0aOfgKgqzG7EdP%2FDTCyz34octdQi7VLRsMmiJJWFf62KwRBhT1rhAvaJaUbffVQNx0xP0TDDzLPABjqkATKFFsnRXDL3sUcaG1yQL7qkOIgwYACatQyontBUUwcpelJFejOkk3M6XcoYHFvygLMWufcnyJlhhd%2BnRgu2esvX%2BfJ7%2BJ5Wp6yUi1iEIA7vJZUvoo7vHlxqUwl9sCz%2Bcp%2FPdyJiV%2BWawU7zYTdXGfcAlQ3yzcst0pTA445fyG4vmx54dImzjj9yns%2BHc84CdxzGrf%2Blld8r9ulJf8wF%2BvLPOj83&X-Amz-Signature=fee8982c1b2bc56cc5cb7acb9613c8af69824095b9bf9253da07d41ffdea6861&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPXZM2D%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPIexOWsmgCF%2Bu9MgmYdlzcTCY%2FaXYYyzPq4IwRbYDdAiEAyMknVfL0Kx%2FWv5UfIBWGNia%2B9a2jJ6JT%2FXOKuBdzrs4q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPJOjsoy4oCxYqhFWSrcA9ItlrW%2FFM8yL0QV76ehehOrdUFlnzjeUbfhzqFBJfiROyOu5WAuvAL5Lo8Wq6XdKhuWY3moNJEexL1oTF6Y8dGUUp7kJebqwwmnsEoXR5kScDwcHPf8ChgEBxq6Rt0Dg7REqXHCABollcaankD%2B1afkpo%2FwmE2lOVX%2F4WBj5iyKS2P%2FQq1H5xWWffKz4H%2BA%2F40sVu4DWOrXqjTgCPciZXNgRAa6pGE9jeVtnhCZrpquHrfjWkj475NripnV8sEHvxlM5DPL5JY9zEfvIRFnMctx6MtTZoEjyT%2BmHN6geeaE8qhKbouFN%2F1Q7Kk7FUdNCglXIhUmgkNp1akFBY1mvka0O4nAuHywGuovoNwR3yhHyY6euMu4G4knzoazN9LYmdzZoYR2SdCiDS3XY9J0fFUD2GLTU6wK356NcNURDzeDuf%2Fv%2F%2Be2OU81u1O%2FZoZ8LngiJyShPVUiTk9WEOUYfSg%2BjsbcDnoDfKlw0d7pY4fk9ZzDYN3g%2FNqJaixX07IJRp1ifstwKvNt96X5HKlDYzDbkLUlehHyh20yLSbnyl8evvPhtPP4zaaPIHxlzs%2FAIgDmMiGJ%2FOlG7mh6jZTgBljLCmk%2FdudjmPuhmD037DTRju301W7%2BdVnafDT7MNXMs8AGOqUBs%2FhJjljfAkO3Gz42f0OFB%2BC5H9iO7jW5S5PgpO5t4ydZjXOh1yFesq2Hao6rVBlKDpilggBpWgcM8glRwoQxwGPil%2F8LV7k1cHp536cCnDEFgEz3Ue4k%2FrHqvK0EaqM%2FWN9fABfCTMh3u9n7geDpRtAvzrbN17Sgm6%2BJDwqSMptQ1mN%2BYduAYjQ4TemW2aTEq6sM1lHk6X7LcrHJgd6tQxcfQ8tH&X-Amz-Signature=4113b1ecf34c76a076f852f7c1317a932f8395cf4d4f6eabbd55bcf1fbace9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

