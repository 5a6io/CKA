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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSWIN7YS%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIDOcWF%2BDiwp3Ig8oAQY2Fg0Bw5VAC7HVwjC8ZhbARmv8AiEAkoPS6GYsIQaiuaxOpdMLGOYT0lymjca43oyfhOvPcjMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNE4cUv2zRKjn1LDHyrcA7QWKL998aqEWB27j6W9TACaV5x0%2ByvJbaB5h3VYh6I6ymUjLsvwkDLdEAYHrrFRkxKzjoFJpwj9moMT7K7YGJrtcSnM%2FQTUgPEutKCMjEvRDKS8X0EzyjJVTeYxo5c6joI9GngRpwq12qWOjtoAZLEb8ADfP3DWs%2ByIpshCVQSRNvK86HUGdPsMT%2B0nj3u8EyBph7culfSp5txHS%2Fzskk7DhoTGzfY9eadhR648lqZ%2F2Gl9x%2FFmXIsR9TlGAkNKt5BhW7vnom46KVilJb9dzouMLHjGJVAfw%2FubXBlnF4FpQQQtg5tpcztz9Q%2BheBcM1ASYvx8VjKMBsvTHpm8gBEetVvZCUHPvGhHvjIY8W%2BQHZ2i8CUfO59uq1maP9btN0%2FdM6OIuJQGZ%2FC40qLiFl9lm6qU9oDYvgFvDgdkM%2BayigR1S0LFMqsng%2B0twJB3z0ltNQ6LT9ExIXhTA9HVsIN6TR1S6tagtXI50ID6GHBndAHUSRTs9SNX%2ByonzAi%2BqikLpv8YRZOj1OIH5VI%2FXd1hXzTFCrTwk%2FsDJzRqeMt9OWzFTqMoWojV7uOer11p78wwVInpPCDWarkNEuoW4eWJ%2Fmkp7NkohS5C6jfnJWz3Y8EZmCmwWdTutdfBIMJOOjcEGOqUBV0R9vnkblYzx8OqrdneQtk3CAt%2BpErTR80HI49lE%2FPsbZOfx64xVoKK3rz%2FVXCy0B5XmLSSBtCkKzPLLQGgmRsfOzn0niYubl7dn%2BmIRcY0m8xznmk0V73eOGdcOwk4XW8mvH4FPevhYO303ClEOBAb8zJL0gwjy7EQn3rn6XYpLXKEkSwObLz1%2BszCEgo2UCUfGT57G2KwFyOYL1Kb2p77FkFjO&X-Amz-Signature=474c0016219796d51b105ab3e73857bb1cbfa1c646a662422e03431b3d6c0628&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6J6UHS5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDVXJ5W0EKbjLCmrPy4qYUWUQUFUunH8%2FQAkZnO9ugmsQIhAPA5Ks4oCgxAojhL97BWbs0cqUWUg8C%2FZzrnsopk1QeUKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ9SpZpk%2B6I2IQ8Rkq3AP4oIYQpOrG5R0yHDwMB4c6oVRNFZbb%2BcCYSgvDwB6nJBRJrjiJMM58%2FwDQWZ75HARXmsM4uBsVHfKxIAqBEho5kH1h2%2BWLQOIPDKpdxfXDoK1ZWkf3bLVecYW4jGslfxkoxe8YOM63XM9l3RbZXjBn3BsMfpJ2Q%2FIn%2FwFEkD3aqCFKGvNvbWmqfdo1SM2IFehtjVC2qVree7wc0ydN3ElTAYlfH4Wlr0m3p0sF7Rn37i36U7oCPynNRYbrlbMcUarHL5R60nIc7qJstK2NUlio82x%2FSbg7xH4%2BJpw%2Fdeown0p2g8by0Qu%2B2jmN9288OuCep9pDNg2Fd%2Bsj4YFQv2PpEYS7tH60c3%2BEz5wwp9wCzsFMOjKKXXxe9x%2BGN1JJuP7wgpZnCiYCI%2BtoqWiQAMowv7horkY4DAs1Bm%2BjrSUJBhPFXO0aqSnI2BgG5brFhyWoSweoiwO1uyiBKGnhJpZT6v63Wt0BY4e0Gq6w0wc5Fq0Qd3H8hEqa0oEBNOZ9d7hYjkcPGsy1rqDI7TImw29%2Bz2aYw0knnxUcsDvmvTWcCCvxgkSpCiNrowErmjuEnp2WfvIyimlHqozQOT1fxWCL8R%2FGKE%2Fvf7CEZF4HQJj1r%2F4PE7bcYdXA0U3YezCUjY3BBjqkAUskgGCpKC3CiQNv4XYZ8Y7bsQPdjNLc5DtaY%2FJDmS9gJGCV4SWNFlikb7jrYHh%2BEyBhh6yn3JzUiVUe4VHAQoDTraedJmdtyS3LY9EAK7e5LR3zk85SKp87ab1Jcm4pgC2oWngH5%2Bb2iy%2BUu7itx4D9HPK3eKofEsPsGE1DKY0%2FNLbOMZ8bmAwUgakwShRQEPDiRMHKdbxy%2B%2FpAFNMweuf6u5im&X-Amz-Signature=cfe75ae30cb1bc28c5e84e1ff9462440d51d19d8463fe6c8223a70dabb3311f8&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QI2DTIZ2%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAjrOpfE7%2FnGelng1ari9bVzzqA5TuOShlrTkEkaTfUdAiBhTOvawNXLxDEItCX4jvEDv1C47VVKm%2BRWbKZMvW0SRCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM17%2FUjqFaunW1RF98KtwDAMs%2F1nra1L6OeRqxFbO9jVeVlC1Rz9Y2K9ZuX7cvKGwShm1F84lIRd%2F9Hjd%2BOrk%2FuBCbfmpxqc8oCbQN31cCiUXW6ewJMJ0U843Vm0F9wnck9O1ixRvlAMl1Dc5gPRRLrmv%2BYk7ZbCiYf2O%2BMoLWs9Avvb8Ca8gJKlScLDPZ0CGMBYaHU6KhA7dObIEQfOnG%2B%2BuRzDSoJQ6IAKLP5baTUnh%2Bzkng6yE6UVRl9fyhFQ7IDgvGqxj88CCkgS0m9JtifVzyz8HIxIZgJyc5bnDaidP%2BuPiJqhNyJUCuzH6QK3NDKyTjlox3x2L8BxCgsBNHOnC%2Bv6S5UuMwRi5gUP1bcXagLfC1%2BrjaTuKfXu3wLxvACnn%2BWXJVLUFKu3wK%2FAzHaottOLihRQor%2BU8F7UCUf9PSBN5ecoB8vFaeJ6lTA2mifbfqsBLzkNyGPmer30dL87p0TPUU4SbZb5YI92TnPLn2JBrRoJJth59gyvMDttvhkMWUEOEx306sACbhNPfm3aDb0TS3uzJa43rfDyJFxB8o1WndDvqkeJjpHQiYWjj8pB17X5DxDlm8ImmtasH1Coi5l1WQriQaY5P8EPs68emPx2LyPSpYNeHuV4wA2jBEDuDj27GpZGT5Yrkws46NwQY6pgGbRpuThMrzF9e9h4B77xG%2FUuZWnI%2BhV8q4p706%2FnZfH4Le%2FKJe%2F69bA0w7tGm%2FGw%2F4j%2BlQV80Netuy9mtoqU091cJoErSkWw0VU7To%2B%2BRn00QQ01kVGmsF5mUA2eTlXN6B5dFseBOwX2N3me9Jp%2BaE1TOgiOfdBBFtdIW3q4BHobtGym5ImQtqeSrHIdjyWQLteOhH8dvCynW4l9l%2BncHhV3%2Bc22US&X-Amz-Signature=cc763358fdac2b86151429403f5dd69a9d2e3de159c10fc75023a596fa6bb9c4&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRHO5JX%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCGug%2Fk5fuhd9%2BAEMhPYKV5%2FWDRj%2BDnu7wQ4iFE42oWAwIhAPYuQqSMOF8YgYPrHQ7k%2Byw8SCeGMhcjnRWr3u8anQzSKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNs3yLEWMDseRyEwcq3APeytxsfLGEQKuhTBy3zWuYNYv1wnyu35czuXMlZeMCELaluN6Az%2FhUwvDt%2BphuTyVJPmPDWC%2B4Yfww4NNnTXHWFFG3L%2Fhm6ifSoduWu%2FLZ8PDu7h0tYB44ruOMiXCVOQhRJ7FcDqlFU%2Bd9QRDQo2pdgMoFJE2R4J1BGenbZDYzXTUiARAO2czb23fH%2FbREL4XaOYrtkeTT65KbXsnpeKoRWS6fWGO1III26tFl80cem%2FfTyeJNq56%2Bt5Ns0nmIubOntD3aVvHiKUjThTIS39b1A1xdtxw%2BMum%2B8GFR%2FfPufTWctvtrf4HV%2FyPhPDEiCFdvSZkJCYagu%2F9uVno77BWjAOS0ks4%2BT6XgArn1Yw0OKuf4X5cLFHEOwjXPIg2Nd1vnaxzvo0YCk8FOd99n%2FYw8pg1hzlnvebB4180N%2F9sR%2FLTvbya%2BtMcJvIh09fyiftvo4weiheDquFEdyqvFzGdsja0scEYPvdqibdZCDs6dyb%2B%2BbEZJfBGtTv15wmveAVAifV%2FnO94bEn3trxT7EzdBGh95KoVJOQDR9i5G7TPhS5VxytTEo2Mf9rhK6V2FglXf9J6w0cw25yOEJcTDzX4%2B8fQazdD1%2FaPc1vt2o2GMIJIR%2BCQ7g8GqYL7N9TCfjo3BBjqkAQYNedpCpqsCg54DXlhilxwRnID9%2F1ndhLYSxRduyiXXj9YYTcViSgE%2FU8ILKmMD7lFZaOv0hss9POrYZcv5XevahnIuGAOkxR2l2iBQclXs859T%2FaPJko2gZapQTFCPTLUaFuRMLMsVpAdgZkbhChicxYb9SJ8GT7Jdi2e21mF7NiUrKRtZErY3O08LPbsVOsiN3fD3d4NVq8ubG26QO0ID5RVT&X-Amz-Signature=0bab3f6ce12f80527a920c60c35a2da7088b91cb54d98dcff740cd91f4769c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHM7R4W%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIBuSkEOkFbBHO9%2FZFZxBj0PcCsYr%2BqxOO0oiaCv3Tbk8AiAB2%2FqYPx34DdNY3NFlpJCvZ6mxze%2FQW0wcQAcIEpC0OCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMcf2yztb2ZSCcFQKtwDXyEd8WXVpGbAaFAWsEEsxt0phExzsmq%2Bgk%2FNAmXwD2UOThzcEh20EZAlKE1Wsy72ij1lDtiZK%2BwiwhjaDh7GSWP0fpGb8wxv5drcvjCDiM77AAv1dj6NPpvpTyC3oaXIPu740l8M33r47N7rxfIB4rgFqmfjCHFeCzaCd9bttnL417pFeIvDt2ciiNq%2B%2FbyLNb4dKgIJslNDdLkAn26Kxsf2pTV8XdukRfGjVUI70p1358s9QtXbS2kVYH1Zr81nrzEK%2FRTGi6FDR57XXqKtsEKY5D1Y1Gr7wxrTV3Y1YfNqif53CxxGuuBlkEGdSb2UGxG%2B52DzNGcqfJvdIhE03aK5YjaFihoTu0MBppFSzUSQfSvA5i6%2FLZw2Q4mtGJEGn5XJIlr%2FAGLFlfqxhXTuO9X0Ap4cTG2BwzxmezQPeYpq%2BAwbwceJevUQ5cYawkTp35BNjnRg9ba5gVz4anmoV%2F7HPQV%2FzZMvpU2368LObfnzB5o08HRh6gHhCsZ%2Fk6llFXLlp4P%2B8%2FD7v8icvGO3a8G4jxdPdAwVoKP9dxvQb%2BFB7ZPAscW0LazEoWtCm1ZstAoj%2FSljd8eH9BMDvCL2zuIHBFHeJ%2F34YhsXuJPMwjjYpH7hKFZtlhnEHzgwko2NwQY6pgEj%2Brc62UPyB08zrIB6rkSja%2B8qIZEwIFoC0Jq%2FQEmCGu9HBSzoke9p4w7BlIVW9hMbLD6%2FGsQmg5moPCd%2FIVx4kOAcX%2Bi1J07z9AN8vPY29j1J9GLHN5iFUen2NDc34g%2FpOtYuvLWZ68JlHtU0ICpm%2FrJrYaa8f7eQw9g8c54%2BJcTyzlH%2B38FIghbL1ScfnseEU3jH3d1Wp7qjHqE2Nix%2FK0953SOz&X-Amz-Signature=17dcfd55da0b368ce27895309d412e263aa8e744934f77f6e5a88ecb53376272&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOL5E4T%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCIRwJ7ugjI%2FJrK55X8Xq8vr%2BGdjC6TFQpFNrLGa6CvNgIgUISIsmsW76tCL%2Fh4o7Wr0jOFA7FZhmoNkPBuAJNbmcYqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgluO%2BhHwMbz%2BBEDyrcA8GSg2ooHX8Nznvs8Wp1tKMGBYtVWlUlMUIkT6EdFx9NNKP0bUHhDMBvfYMFQ8duhwHllBCgvgyWb6prZ8U0s6B51lQwNt35seQjvnbjPLP9%2FDxp%2FapnQdIbWx%2BGaRZL9HBPun%2FPu6A7DfIxJyKYSe8tirhNxU4Oe4pTdO1Qa3%2BckWIzys1jGvCdKMnX7DPyojod3Z9Oa97HyM0zOwCkHAm8lk%2FBOkR%2F169RgjADC1WE7fsAm%2BgmQp%2BiqVj%2BEWcNu90Fy24cwgM0WSb%2FCRsiYCTVVCkNEf5ygN0OhjOhy4FVF2w8dSvHW8%2FpsPFOBTnCdgs6TmIgUI5LJZofNaUIAyGy3Ovd4oFsEwSE05en1jCbzhyyPI2LF8Hi%2FemYIqZUY85919H4bSVfB%2By3tG88%2F0BOB%2BwGzsiluqadI4%2BUzJ38IVnpoFgNr4Gs4sQXEMiye1Ve%2BZ5ufJYDI0%2B2PSrFdW0xjQAfrErtdJyVSSKvw08s5vdnW9xqboDmZpR4dydh3z5FhhuOsTfuf7uLHYXCbBDyZ8H%2FKLS8NS7xPBu9ZzOi02DywyncaIIaOFh73se3ikOhG3VPE4pMwu7O4YkcwYl2LEbTDwkbKiH1fU44F0El4U%2FHMg1AhnEFKmK1MIyNjcEGOqUBjBny29K6BRczmpl7nDDsGscAySqzMzQtoIpm%2BAioKZKf7tRPqc4hBVRgftHKX1cO4F7h1SNK4EQKtESEmpdVmidT2dAJp3x%2BjAAY9VyGg21KDS5d32t1RV%2B53CyXHNCpCr00OfZ0cOwz%2Bmv8D8gS9fKE8QeuBNOg7hBiPwDFd6uxoO2TJssQf0TiSBNgsy%2Bb2EAwSUjLEw0gOIGBoWeWYXNTz9vo&X-Amz-Signature=51cbf203519d960cf2bf6e63f634c5c38deaf28e6515c51a4f6610fbb94d377d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XILYBFG%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIETOeI5nH0io%2BDmCTuCemA2DfUrl%2FrMRXbfaVbd1mwnCAiEA5tKc9Up0PVE0hYHTuiUkYpDlS9MbHjRAxq3yiWeSiNUqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvtVTNvQZK5GcpEzyrcA2xVEvj%2BMdzRm47siu8Lfv6MlkJhW3%2Fy3qxWoYftUf4OI90ld6RPAUz08r%2B2mM%2FhTctv39VbtaNKCyH22z4TaFKK%2BuPVWD8gpVuq72rmrWkdT%2BeKHbEiXUisBi1Ttyc3kjAQBSHTxvqRlsP2VBGDUqt1A7F%2FjS8zw%2F0J%2FhONgoY4hOCJI3BTWRcNLVvi4QTbzrJH69HpjHPGjiwSLDclUjNOuW6cp7M5ZJ8CHH8XK0nLisP6oH9lqx717WZUwErqFhJliJ0Tum5LU75lZfw4DcgDMPJ9YxTrpXP%2BBk3OmLwPw%2BsZl4cLOXSLX8N6VKNzpM4ShtwjZIZs4c79Gh%2FPamMW1OdoWBmZ3DqzOQjSjH4dGAD8rGv07lHaJ6orJFO%2FaL%2BBfCtaWtddo8wpMJ3v%2FoIGPY0Ukcmq3uRPDLK3hZzbqsRQyV20n2ROPz9f7W6ILv2ZYNsUcaS%2F3fwQT%2F6dhzwGIZoa%2Bkhi2bK%2B3JfgHuUphT8%2F8PxiA8SliNUKy2%2Bpm4fmlopIqD%2BB25lqx%2F%2BCUS7ogXyEnPxpw%2FnBrOFAQ3Yg2YjN2R82%2F%2FknxGkmNWgb1KmbRASdHFTM38oUvjtt91fqihvYnAKsHAMLRyENzXyRFJqa6eWzsIEjbhOCMIaNjcEGOqUBqYji4%2BvP62AFaFDkuVD7EuDFE5r%2BqA8PkavplrirxYy2BeGUJMdLI%2BzqZnbw6AupnvJunNwBcA2UbYdDHxft%2BTEDX9zbV599mLSbgeX7nDYH6X8kGicbT0aQZk5yH%2F7irY%2BlGbDE5sXunwItwyw9qd6%2BL1tI3qDhI4iLrMX%2FZTMC8lhbe94KSOmMC5ZYUHWM%2FyKqtqpTYonxguiu8omdU7jx%2B4hW&X-Amz-Signature=1f0f9f0d6ed3c263e596879b8607df12551682efac56f8ed4e4ab1eaa7d77eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPZATTBZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIH6G7jve%2FriZn160mXyPOwzJUgiDUPhucJELJ7gnAmS7AiEAh6100XFtq6xdSZkp0QpHtpr4f4Q4HVHMA79PKuQAmwwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNLvXNjsOrMxH7r7CrcA0Oy2106FtNI0kQAY%2B5uSczjJc3SuGVu5Yyr6aXNqdUxkVQ2zMMaqaMvjHb43PLGJBCFVhn6xd7iYsLHp8mbuxYZ3trpTT7pS3V6A5GEvUvQ%2BhtfhxScG0R3dORKzoH4%2F6gYMWNWDCjcB0T2CcpZRZcnhVFexiE7QY84GrQgJpVC2DON1qg9s9RI39MjI9JA0isBYgsFGNEHu4BjGqhIR9PmGAaBwVoBc2RpMrmT54faGMo3OYENyOW%2BV0xfNPLwFB2w62zyjHcPcspogkutx7qCrzZuy%2FDlX%2By0T3FzLM1OIJ1LVlo8XYRedyYsKEuNSMovErRjHI6%2Fy%2FpP8f4sN8cd0KjM5uQl6I6r0%2BancJUNdKflcjDZ9%2BV8U18pGH3kiYn4CcmlZi5%2FhISdXcsz1lDHGh1bysOvm9i0c6g9VKiV0KGH4LtK0W%2FmtoQw80yZFLX1Lg6rShdF0dUQ%2BBvJaZDm1RGMJlK8Z%2Bh0ZxmLANGgIXHFSPvhQayigz%2F24e%2Bftx0XPrYxI5aD0%2BxD5w7zYLHxFKSReCpNy4DG5P7nADfP%2FBYSkqIk9Slw4134xksPyIEoM5zsuq1mmqtAcbWPXaCEIsrAFnvR32XMPjCMvX3a%2FNQ8dBj%2BRtMqz43CMJ6OjcEGOqUBogZ4FuECyyWTHTovFQHr36us5f0WGAQOp7%2BGGKQlmS%2FnZ2BwY72KomaXSt2egxr4QHFhNMmjZUzFzIX5Y7JgclGUsOzZ5jo524oi07gwZWI4suVs9NM%2BgYo7DA4jdLfTA7s%2BdnMl48r9I176OiwxV%2BaUMDA335Eexgivvg%2FeysQ7BLCJ%2B1MqdRwBiaEEkCmJVWzJEy0DAUdNImbepl%2FdqN4gJCuR&X-Amz-Signature=0d1a42e38ebe7c44b12b75fa1551278433737bdf452fa76cbb2a5237fecaefe6&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZV5AF5%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDra5BWmh7iEYI6M%2FYNqUauo9POPLbMgecjzCbVU%2BNqqQIhAJZIH1Wr4ArSfnGcKB91AeMkaIJEHMJco%2F%2FC6ZSoQX6zKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEEuwx9tdmwJFXFtgq3AOLdkviO2lxXjr0cxUawZC%2B2yuqC%2BDLBh0r%2BfOv50UMw2UgoE6h3MhYU0F31SDbW0HA6dcwmIL9%2Fh1fd6bliexN2X6NHCgMXQl2jT8egfiA7UCsCRfSoGxz3dMOt%2FtFP8Q%2Fl%2F2Su49q9O5BPfcWFWIbdUEF2Oax0GOWIFt0e3JQT2zdFUGzrWrwhcCzNAjfTrxwK%2BdgotJm7WJOWEIdeRU%2BQ2HfO1npscrFhxBqnBn5EHlYSZWVYkRT5zoqF9db7n4CQCSAQaI72l%2BOL0h6KgRiwIBTZh1HByblvQq2s%2BMBSOjjfeBGDbLE1ea%2BPrZMGvtyYWo0F0vN7gG%2BGCtq73R9PKuyKpkTqV6znER6VpO4dqHEkhAFs79BCarlJCJdVh7PdT3x3XKQyeD3qO7b3vmzB%2BXexYwkFsq9wkR%2B5nmagCFpi5K6G4Mt9zqt4T%2FpvC3ExORdYTMt9xlmWBZ44xE2nv9HhJFcpCEmGz44iHroBYWvPaijffuarFM2v36z1QMKLjB3dQlUAYo2qR0yckeL5yttufkcSfRADzRudQciIEPs245A5uYPtK26VOov3GnTx0JOGmWGLVeHQxKQEZYIdoYGrvJchP0nSrOC8aFd0mANm08Z8eFALnM2ozCKjY3BBjqkAbJimh%2Be1XpneRFlBgJ9rpJ5iKh4ye9tl%2BaycGrgNHTcMWGslxCKo51F8LWv7qEdgCCG0pgd6VtDA78kBIpbLpvNzYnWcsX2h01ZKvmWPn49Zg2MaUr9ov%2BrOsgMjA9N0D0bBh4%2BRrRQ%2B%2BgDXvBfKUiRX9ffcSV%2BrQQyHmrTipT1R%2BNex6107NeC57%2BIpVfzckZIAwpsv%2FN147FV0Vxi2XytOE87&X-Amz-Signature=fb91727fef142bc6525b75483d35d88e81b1ce020b8bf46161d8b7c564b19221&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

