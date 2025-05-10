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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3U6S5MZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdn8imjoPsIzsKRh0VZI9dRyVmNpE1C%2Fln1LeSdLfy2QIhAIYabDZBCYZAkyTXqlAQ1FbqGzCG6bNCI7xv3TH%2FrQmlKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJzpCURKIKTxvaIG4q3AMwzZ6sIGR9s%2BkVi7f6RVqUetkIFGQzPLmj9EHnPeLS68pATSssnFY3Pfn5miKaLn6WOJ4NzrUTllQKxX%2Bs2D%2BwZFdRN%2FEDw2PfIVBkNWqPu3zXDVa37A2DeHZvy2q4yYfgJmhjPOrM4F%2BIyDpD6qRit%2Bq%2FcSceLDuGeHsl6rvkHC7JUSnSGf9N%2FmGvTBhnqBq9vuUYZlqpcQbJu%2BbKwHfXVEORVAiE%2FDLhDUvctLeHka2OGzOANFqaHP%2FrSopJgb3mUzALU1OGZgyOc7l5IHxS7Cln2oxxSDxKv9%2BkRuAD8M4wi%2FnPk3LWz46QlU8nx%2BpnoQtHT6c7kJ5%2FAIExec8SxUC8vF7f0cUTWcRgljtU%2F7qY2S7QdmGh2PclcAdy6N6o05AxiA5RP%2BOSkCZ4tE3T4gE7jLd4Aj4TYzClDh7qGdxulTnWTxQnoc7E6PPPIeeVxl%2Br7Q%2FtSKEhH4XVn2rFX2dPyZXiwa4mC2dbXDVqzDstZK8GoAMghxXjaFNMKCAPElAXkKfmqGcHrSdcabwoE%2FhGX9TAp5KUQMsjCsrgmpPg50XWpN%2F%2FVvpiY03YzbkDlYOMTG0DSxCBgcJ6uhD8%2FkzK1dkdcHgqVFI6tQEtfcAtCEhBwmOZImB6LTDQsP3ABjqkAa1%2B3sp11V6XBNsM1Xpuor4BpZj1jm3Gp%2B5%2FnKtYgFI0rcTgzkKiTV0ReSy5YPJDO%2B3qmlrVEsqikFlaJWN31OYCS3w%2FZBXQsKwjTBz1AdYgZM4UK%2FJG8c0xsse%2BwO5munPWPZ1zH57QVQjpGINvM%2B7u2CcPMmhNp%2Bw0DO7zT36j1NYOQRr0ZMzh07EngS0wCYicOYQV2NoLIJgTeemXVGUT5Ahv&X-Amz-Signature=27881b8caef0567e71d449005867995d63f7361775a1d635f403c0955eb79960&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YNUTWX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmMB4ElJNKaEOKEGvtUoFhAyu8Sh2L8OYQnTzpXUKt8QIgd%2BDpJhsBsxWh9agmI1A4omLRArFrJcEHjC5ohFszpUAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBpns3srmheiXZC9SrcAxPLwef7h%2BZ7WrBDlCCHN5Yko1Fi5WKsFQWHkSHd2El3JwSq2hhk3%2BQKP9qWt%2BqhCHviae1W9sZy2eD901q4QTvvMEm%2Fe1AbxvGfiiHw8l1f3UXpYJNoP9%2BIu5fLy6Ik%2F%2B313lC92FXfbuTruwB%2FMg0%2FkaDn7f5Ze%2FcsxPsu1l8R1eSwXmpCIfwrEe8l7zMAEQ0LpmihAJoWbvR9xfqAaB9X5owuhQvIFAptaq3L4xD5IREOKK%2Bo947y%2Bnff%2BTrlPMuGQcv3h%2F%2BsbsM7cP9V1qXpIQdAF4RqdhkWW0hMwEtBE7w%2BVsr%2F1%2B9PjRJpRgbgALEnMOvn4jANAPBYuG8GNvFgjYScrAKCa1NgcGjEDWYe0360S8NdS2gki8EtMwaNtOERRnKR5hhV9yV9NNQq2RThdyidoL9k7Nuq0mk5V3mhKHzuOZiPcC6adkQT7wuudQANi01SjOcy57PqtHKUsuOAqTyOrBDndeqTplWzd%2BNcylA0v%2F1VXXx6Mh5UTSfujyrME%2B3mh4qkGuWm22ibzr7rRX47ttldaQ6ndNtF8SmRoIs9NfFa2x1etmkbpFxZTqZKWRIicqFcYAgLc3STZoKZ4E6z5lxVdVhAbggfZHGXN36hyUtvWbMpdEpKMJTv%2FMAGOqUBu8%2BvpKnfvCNZrTVxneZiEpAvZNgjPpj0v9WMJoEX90GRvdnLr5X%2BzbJq8A7JajC934NioRjyuyjENpkE3b12%2FfFSgKp4If3a97ptq1bWG05Fh4FcsVZ9RHfT8fgwz4kbiW9WZTKLTP0%2BMEfgR8aD5XnT%2FTzKSGn3jVMr4svnDzLS%2FzoaCRdxkmIXouIYzYYadoUmr5fd1ItB4G0YR4h5qLdvwGm9&X-Amz-Signature=102d0ad6c867c07327711a3e6d7cdf01dbeccc021afc9653bde3659b9fae84b6&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4UVTID%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhyaHHC5AYv9twRkquebmcI3hFL5yWKiz22o1%2FUBnE6AiAocis0Bg24pHMF7MsDZaQCDitVTwXnPyP3NMNfboj9iyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2F1b5zLN4s4ToHHSKtwDM8ii2W517ICn3YvY1smigXZ61hLZL3%2FycZom7f9xw8G9tVva7bEI0FRs3SkJ2QdpicGrgo8%2BdJl5la0QgtYaKxpafptTbQm%2B2D8JJPishlzmVyLlS9TxDDrdlM%2B0Nz0spttEQcn2nLwuhC2qcia0wrxJRa%2FVoc2yrlrDzgi0A8tMYpW60KARkqlz9lMmsmvOXJWvYuxLhNN6SE47nUFtXIlrfUVNNLYjO8ho5FI9hE4MZnIRy7pTQptMrQ42eMw3svTXOi825e09wOdz3UgHZr1yCJKksrkETAPWgMBSOxc0GIRI1u0zwTO3KgR6OkJwQVnPUCAnot3sjiC%2Fw3VCwU4Vwo75c3UV69ZvspbV01AXdMU6WFJk7REPIXiAG2KGKNzZwaNzkPaaOtOF9yAuCArcOMdU%2FLTZKiD4fAklRGGZNeGKcKdHQz3WlivrZQIQdAYAL4zy1Wc1VcgOH%2BlcwkfoVGHVBuZvI3XTQFWAYT1vbPrQu3lrMqxuP6Xp7KNdcZwmUJkamzu%2Bs%2BNZxuNXryIZAukJJ5%2ByS8x%2BMS0NkYEspeK%2BOoSVyzYf3a0MTNiXbAesSWWhN0X1K0%2F6ZVDs8tIA0T%2Fw5YyGuH6%2BsPmgrYoe3FpldZ%2FbbIvTYwswlZ79wAY6pgEr%2B6sQDd7t9A7sBTsE0NoI3aLBzFKKNyMTMjWETLpOIZkkoIYKuxYSn2L1FD9wtdvErNxJkdIO02PDGUAiZubw2iO%2BBoHxsH1lXsGSEJg8wldMhD3fXe5fIERfCqGX93oCGPKPUuZ49NLaAYz1oAMXZbBFNaGxouT9tZbTm5SKgMla3BOZ%2F6dp8PFSsfE4GK%2B2nRfttnFDaBi9qoeynzp7bsoJQ4i2&X-Amz-Signature=de9f500b1a7133767b70f02a2d2a1f514f2fea57bf99a22ab44bb7a5df6abf47&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYUMFK5Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2B8UEXjU0qukSlyB%2Fv%2Fvj1VoKRve0LjjvE1iP7j%2FxaqAiAlYEzlojRH9EnCQIlSVJo15pjrWeWBt6p%2BMr8jl7LvniqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsCNrhKxmsiPHBhaTKtwDVn%2BBPuUAwR2RWpbjPOvR%2BishNK65dd3beakotmpmyNwQp2hIxkfCDoz0yMesLVpeY9sQvLFUut4PWiHMqFJro27ro7FdIEegfgjDE81Fcq0qcQp4sCYnQ73yzXkeqcUFGkzF6y2pO6k6j4WTajgi3Gt6UE6lEQ%2F%2BAwMUlSL9nJQ8TARuKfGOBydf1S4Acn4ZWa6in8dqO8GpxJH43mD0OzUTwkBvp%2FX1pN%2BmOa71zLnSw5MnG0rHEPCMlDef%2FTVVOsO3obekhDvgIMD32XEqeEFlwB9JFMizRNGlM%2BdOWBa5wHLFDc4%2FZRDj0Vc%2FYTjkuGNIxeCF%2Ff2bQYlh3aIETLoZMxcLuEWMxm%2B%2Btclc61Tk3l6mzsRgbQmiG6iUPw6JdVVVO5VAlAo%2FbSfoki%2FRS%2FYIvWDk3az%2BEKLM%2B31nFd77%2B3zYjJc%2BZAB0gJRRWSzkKXey3qY3gRsw2%2Fbx6g56bKvbTy0V5JOqImZHA2c4DnSziY78FMlqniK2OrdXH15Ll6m0zujVYxQcMsXiRAC8zjAH%2Fl9VaEzlUjNk5QiA67bbASh77VSKRGDAh0eVBH8fDvVHAL6Eo%2BUupc4w9M0NPrG0EdKeRVX2WTPZJKKqZCbftcI%2BWBZhTQz2t9Awk6r9wAY6pgGkWTM71t7CCFQJoqbLS9wT3ivI0%2FHNP5BzjRTu7A72q8ypDi3XwILiAOfysSgAEQBXgMqO%2FZhls%2FytQvEiu8s4pp4PFRmmlja0JCO%2FAWijiGYVFjuVW2HUKhUg7RGGpS9rju16Kh5%2BfQOlS535W1NAppiACts1Aa9tgZVZDigH0BWkq4eTa%2B52144yGmbW%2BXuWzu2WekrfYmY0GllzVce9EMU%2BU2s9&X-Amz-Signature=ddb8853e7fa23d932988dff5c644b611f17853a098bffc725c32f12491e23a4b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EVPCQGF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4%2Fxw3EQDDSlow8HRnhIv10vbZaY4uZyU673Xf6clWuAiEAtP81FESXLOCsKM7zyF1SWUUlZNkHRLurFvf0i91p0xAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIHxFiOi6jKUjYysSrcAxK7YcgZHaoymBayR9PefDhzX8fpYlTj8IgKK%2F9ud6q56YOb%2BbEZmg6ZZ91qgM%2BmOBnF3NYRwnP5ec%2BGjJktI1iG%2B6ZUxsLbXVtbvNGdpLyBgvl7fslqCJrEml%2BcZi8D3v4UNFZka5Mq0dAFZdgWpcsXsATu732yKBSwX45mJuR%2BkcHNWcq7ICPjihcVVV6dtq3tH4Tqzwy%2FfYffsU3MGzpuO4aZbX0bGCM9VZi6erOJwzb3qY1hiQopE1xn57d2jfRfzrKWXtdqKSt6Cef1WoQjOZ1K5VT3A4PP2NWsvekENfb7pIE5XvIftabfMHpx%2FZCh86XNkFBy68YrFyJAqnHD8n7RL4F9nU1izNNM%2BE0LrNdNTKAYvm0EoaS7%2BKuRjXhGw2WUkC3Y2Ij%2FoL9VfCDImIWBfuLWpXipd76L2XeVGBdRieeqfHjRQ2TZXb0l253dindeRf3WedFXy0WonBGRr%2FsKdTWOwabto3ulNJeDKo7TrGbK7xJGI39dDkyC%2BE%2FJHbzMLowDIvim8J6etpK%2FCJo1CJ%2BMjKv%2BP6p0RpdTYeRUE1Y8rZFZ1ORg1O%2FvkOKgXsc%2B8Lx%2BmPeNFeSJvTX%2BY4XCKtvrmb3ewx8nstKPjf7GAd93bVyNvmJYMJOY%2FcAGOqUBdEwOa%2FQoeerjjr8WUDB6qGApRsITowGS6esLGJuR%2BksoeNIHxkt9dBIFjEHx7dSyeOrOL2Vefa8NDNS7p61KvX8KE3%2BsOZHG9AWbr3i9zP6NMih5iCMpYemqmpnNosERKvaphYYE%2BDPKoJMs1xbm8C8jWkTK%2FuIrWslB%2FJxVg%2FqPJJtVB8tblYhLvMA4cMKW40hEtTD0f5s6PZ8OpqVBJpT%2FqLsm&X-Amz-Signature=a5b2556f2d00cc758f663b5666abe5e26abe39fc7e70b9284f60b7d1adb3acbf&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFMKQCEL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQrxLTrxYNmYQUQLyJk9U9Kpw%2F0vBCLLV9TwYSDuxjwwIgDX30%2Byvlp1dLEnrZ96ncNwUmNs0PCv0MKk3Rz5u0HGoqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuHOAUnLni%2F62aqzircA4zpg0%2B9hTJaPFZR20yeaX3X2dNBiZEOf%2FNcszGOVp1TM%2BBdfm%2FJ8265uyJzURghERH%2FUcCvaIZVOB3LwZ0Vgrct1q6uNX9SiIeLpvYAKVdP46nSkfng2Nrj4zJEmouKYAW5hlq%2BsTxRQDV7fqZjNQ7DAmrV2xyvLvWeFOxmIrwPiB8AMy8dHJgYBrAAUxtwt5G4zfMw8K7V%2FZHKdWtoDCAs0scuS8AmAChPs8J0yO69nz0Pn0iWW1TYEc%2BNHXgT9mHFMfzSQA6n1l2CD4h8SC1Kv6rDBioSs7sLZXqTb9JxES206t3POXPmc7b52YU722MrPbIHbrSBipz8ZL%2BB%2BLw12PvYJyazcY9s61u1TU%2FkR3lJEYtDmCOBC7hcuMUA3NojZaGLgBrONehYVc1g60V9A2DM0W1Q%2BC0DettJTve3CeINYs%2BQe%2BffSLAcIsFh7sThbUP0Z0rW%2FrBUR0VKH%2BFdGF3jicuqtDfFLwH1H8KAAZf76m2YuC%2FyuajghuXd7a%2BaurYYL6ndnjrUcGvm9lawjgJtw4xOlElflg7SRQU%2BL6RFxgMQ7Oi9SEuv%2Ftsm9UYr6CpbWcEX%2B6NXrhBXfaTcQns%2BKVvPCXW8RIy3MnWgQM7k2H6FiNGmdFwoMNav%2FcAGOqUBBslFmpCuunqfGIm9gebFlWmNClMPCB9GxKBHs%2BGwoS9MMpcRxWccTii9O9pKojWi0gnIoImSYIdbvW4EP7PCrqQvOeHQKkmwkIDGMmkEZ63DrzWO5W3b1pa7qa%2BCHBaI%2F%2FWcM7lraeJ31VB8SCGVuSOvcorPP4isRH5skZWEGwBDG0gM5J9oh4MHHPTJcqQ9NZecAmK1xqtipcLailFjvLlgd8rP&X-Amz-Signature=82f6ea765a5b141394b42c8627c7485992369f5a1db757bc20a76545b127e36a&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7FY6FRX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbHx0LPNvLtNMZiIcNIfIAYwcIcpn%2Btae2eHZt5Uan8gIgVU%2Foxmjj9wIXQsQeE9f2CuKTBLPcokEPLhz%2Bh0wbDnkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJ7RMQ8ZRS8WQveVyrcAwSnvcIP%2F1bTZJz6bkquBmtPt0ZAjCTyDqoJ23fSmNAnm2ZlYxCJ8BMb%2FNl7j6LzzsPbGYYyOLjPfY%2FtMb9HLzIdRBbBa71D1IYEr5OToFO2jxzPCqUfRf8B2TtasXQKhCuL%2FgBlbLjRGAyRHCiKztlsMI10Yeyhm11Of1g2wubnc%2FrwQuJ8XaRjx6eFeaZheBTlbtvxahoxzyGMRgYNNcbYsIEWmJq9q1ZT9aekeyX6BhH8payn2ccAg%2BwTiiQQemmqjBcrlRumeErEdx3ct%2FUQ83rgMWUtcz5Z3PTUiMMVbXYZytxy8mPbsqnDRKxXDIHw2IX6P6gBl6UdEfv1Fui8NcNa%2B9LWWAxmBGcLcYQlW8atGxsXihKxfOwxTMfotA49FO3cVJRJoqhaFg62abe3b5CBwFLMfjCwR9%2FJZcDhXAyT%2BFaZF2tZkbzGkGTqw6%2BAWEXJ%2BuQC8xe5vfzxqvWqwca9pUuTiPCjZUJp1bsaohD0WpaAjQBpfILCXeVzMlwybiFTWabwKU4%2FpkxdEX1%2FR%2FFkDhs04JA3zT4bSaaz0%2BGX9ZC2dlpsjC0PrOHwdrbG22XMHduY1dAnL7y2gD4ZglXgK4mdPeYK%2FcTZHOketHScd9A3wH93YfsPMOir%2FcAGOqUBC8rv5N7coBmIgfiOGFjbgMfr3fF0Qdx7HUPnGarTdDchuZ7ktCD%2FM5nWYkF0hja9LxmkN%2FBgfL4fkUgcf2EFjmTTotkPN811sYuTheYYeuSQjnomp4yQgdFA0xoI7GrEGS0Y%2BiJZGXYcUpRv6NEi6vfgpdE4gvjoSplod%2FaijAq38d1PETPcWVnN%2FkP%2FPsKwJ%2BZEKP434vJIHo7g54RWH7lIFEeG&X-Amz-Signature=b1ebfa6f0bc8aa9ca889967d983d21dad6bb801202e987c839b5c9702c910fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NNVOQQ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjbNyTKN9syEekV8C8QoDDo4o1DPPnyKMkxTNC5y2tjAiB9dRlJEXRuuHdBYidhZ8zo0Q6UHBRrWyaOEIDeN8KaTiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr5WawCOJY3C7RbMjKtwDELquzL5nd6XxBcqYwl4MSsYI9dLKtIHyRSxf47ZAsRYLhiIP9Nnn%2FgefAckyXsHq7VPW85CVIdllE%2FgKYeeedsPxA%2BbY7Ha8%2FEWdukeQoUpRPfyCpaGZvU0ua15uFiODfBfrCucH6y7Y2ND4qg2juGU8guK3ACSrSzJ%2FVMtfxbNzorMOw5PUaDq%2FEfB0k5deYtYsvf%2BtcGlBPZXUhOWJsJ2u8dgslNgbjsf3%2Bipfn%2FvQ7aUKZ2wB3OUckxObs3UWfF0LQbNxgi1tr%2BLGTIpiS02YuSqIaBXdZrmQEnRE8aTi2XmFEEo1UKlmCV0b4Pdrkx1udeNGaJfDvsIyT60Es3kvr8JzjGCvW%2F9TYxmmVxibF5gIiSfyDLpelqe4pb3WdktXeRzHUiymPy9reO12YCRYbjZh1SaSnRx%2FhjxjLpNd53AudE1wJ871Z0aGFR6ONORGQaOnqp1tq0LA4WlvDqY3Z%2FNu9tpBBNiAA1AKbeOLsVTdnHmmxYxsZMV2CxIbbtVb7dRVtgEajcFZqJPrpYWc3YEtIVyBGoCdBEOnmukhoPN%2BH1tnPkp5ofUVKHebiasryqnSnmZiOH06RQuowImUHdR5MpjDEzl62XpvgNWTyCVethKec%2Bb3q7sw0rH9wAY6pgFxOYet0sMqUHbPjAp5KUPSG7%2BTsmyKIxcOon%2BCunBZqj9vBO3eYy%2FPWoMxS2a1%2F27GlkL2TNKjlSQyY%2FEBzpmzs97dz31P5QJX0%2F5FyGnr%2BAVTExMeccHSpLR2vrR%2Bue38ZGI9RS8gjDtyTzpJB%2Bv9OTH%2Bfj5AXPW%2FgXRbtSdiyL%2BCZzRJlYc7YHlg%2Flvqqcp01X5swtueZ33PcZV0R8aMUcc%2BKAGw&X-Amz-Signature=673b969778fce6fda13b8e492e08b0fa6587abd8eccf1c6cd201eb960e4321a9&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFKFQIY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T141117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHb0hHOrrfo6mywJ0nUdQFLfKaetsVggL9zuggA7TLS%2BAiAVOIJyxUsvNTDaj22wyx9Mgis7yf3IiI4KlsWPCa1ObCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNFMSc8fdM8k3MEgsKtwD9vAUo1zH3%2FuLk1T%2Fb93gQ3FHdxbvCJIWLS%2FpwaPTn4UeI9fOiwCtFGHDC1l1D81kdWhsgzlt%2BjnOyvvgdwaWd7rWPP82cnCtaA1UcQ95FH21w679RP9%2FU4Kzg5uacddAkb1f2EztJYFpjOqRdga3VLzhwNWRYMTn0mTlVkkI44r%2FfQftBC8Db%2B5Wv%2FE2vJkXuCBlRUXZXQtSvavlC3XZuVH7N6EclvlQeSwNNBwK%2FQV9kuTT8KuuQlE5LaZkeG9Wkx46sOZAKaBfZkr3tfeDq0nl5mnfSL%2F%2FNh7o4KypAhMEMl704ykKrva9%2Fdi%2FsPRg9ckzevPgFDJ2ugOfoErD6THm2tbSWEsVtWLFWiyoV5oA%2FuUeXYoSslvV0QqQ%2Ba3qFT%2FY%2BG3rgqhuRVttAHEIUiqFZFoH3K2NwLeofkcvg2Q2MtSiXB7B%2BRp0R6QA3LVWtvfyLFN%2FyPCLOHWUmSTrIVYBj6lPCB5XEykGbYczJeB1Kb%2B9kKlFFDVZECFxTpNOW%2BbQAc7Hr60ZJs5hs5jS%2BXqNLKfw%2Fd1GDHt2ZHkL4Y8zFw7sZNi2a%2B73MV8rdXz6Hj%2F5epQTlmA3v8I%2Ba63EetDsAHia%2BKsWVCx0uFexNquz0zRutrPqH2YOLR8woqr9wAY6pgEfxgUGYEs6dyoNtgAfFMAU0JfId7d2iF2uA%2FHSd7v9D%2B4QeIj2VyAfY2bcbsgD8UUhaNjabGfqZP9FmPGCKZPnQL5ANYcpnRotgC5h8KFhzQqgnW5%2BrQQCnEyNWM1gHw%2Fgle88o4g52ug9ABWT27EPTKoluBi057IDYmXEVUx53XPCEkvA9dycLKFJDAKmDH15Epg%2BeAw00mYKK1Mg%2FacWgCHzNwsP&X-Amz-Signature=f39b1ba0d414b0b00bbe14766469995c20ac2b509feb877f338eeb43051a8251&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

