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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2QHTK4S%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQD69hsEiKx0QZRz7wAGsi0znWO%2BoAV8FfipVKKShBiUUwIhALgK%2BS%2F4x%2FRYNrZixbTDHZ7kufCcbRtYQ5%2FWmAXMeUHaKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyg6av48HZKm81RBWEq3APB6VEUneXGQlfL2rCDR24jKYS92kNQKR21ubjW5AczVF7qJY4SlZqz0T1Or6AIgmK0V9%2BvAPX4pxzsUFPs0niU23HVWEdWXa6zNCvYqJrIJpxtEFK0qSe7C6uKvfkDqymuII9myf7eV14YSZl9gykbLeqWR4ZjdXlEvoKnTGvL6xW4bbIC%2BVgzpOBA3qst3fmzmP34rPaG1%2BDlk2b2uOc99y1Ygm%2BQqOVHH9uhhQTZbFWI1jbRa5WehOp%2BaM%2Fwtx1RSuZVHUyAnxbSaF6WPf%2B5iEkeLfYOLoVRRILRtk9WPPVAk9AlB4dd72%2F2XAtVQrSG0U%2FumOcUkRDXSt5aO1K%2FU7g5r3LN%2FLvxkYsdeeGG%2B9fyshhE0yDpW%2B4LNHtYA4o2mJ8nByuQYPYK%2Fuf5uLahesrTDTTUB%2BLM2V5BB4NReuDPNjyefHABKTII6EidH0KzS4i7%2FSwRbXrYTy5yv3S335BRzbxPt2UTUShI%2FZA4dLWu0%2B4ZSPthT4V%2FeXi%2ByEAubcZK4bI8CCq7CXw9VUa1JJfao3IRSLPVswtSI0OkbsvqjH%2BBtWECPTE3WObbd8d4TCHNFfusDWNm1MFmZ%2BBVrjb8QEkPLn6rhmqqgIQpHyYcXwSnDpFu3Ve8ATDRoZnABjqkAe6EMvN98KQliN78QoUjA8ttjCCYlxrfepZvXrPVUAmMTVICkmkaHbBXFxQP%2F0TN2GlXUXgFsmgMAPef9hcQiXfsMJRoPlcUjor3ZYOsebk%2B4Zk1j6Ffn6MI1ziaOLazLF1aZWCXvAgEow4KF3o02hMCvxqbllV5gaF%2F6yzuDD8ted9T%2BroSgqEeid8y74%2FF%2BnsRHz2JaTJRkGExRSC4BTC7Gbck&X-Amz-Signature=6fb56688f90aff9aecfba464802d85a0f5630ef2c3ad53b30cf4fc13745f3eb3&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWYP545%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAKAl2EJOxr40RFgUVRl1uU8%2FBZ%2BUF93eER3sOCyZ9d8AiEAyJ1eoJEtzPi6uwUBiBX%2FXVUYbCbeOFgXIa791bIbd30qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPNscjMQf%2F26sKvZyrcA35%2FAB5Ve%2BdEqeBFiYentlTivJjem3sAYGWfPexwA9bmtcbsZe1OyT6QRFWtkzdj%2B7Ua3kWcLKPRYVV4ISKoLAutsQJVr0icB6ktBwhKJyYtnW0Qd1Un3TyyQUrx%2FOBq4%2BKxGEcAo7DJ7I6nRDKKXH0tILeQAkBIz8n8q%2FVldgUlJAcr3%2FR1kd0DJRm2shr3KTy5TK5YkzwKaOUwKYo2hP84O%2FISPhU%2FIHzwKCO4xRDmY5B56ctIQr5yVqgVi5z2xnrzOqCuqU2M43RWIzB5mWABvbXFbmAvUGbRscNKwoSw56V2nwOflRjv%2BDCTV0hGm7PkxLH3YcTH44TURmNUaptn3KUpoGN2vLULm5DhULX6o0wnhgHB9%2Fqo5Ma9eynr0xXIaCKf5g%2Bqr4d%2B41MnAnUcRLgScq6%2BhpYGdNLDYq7X17NfSYcaTbEpLP9xFPV7nEdwkXWA%2BMWEisnT7QxzXMVhqhLwhgHA2rOVBKnY99mPjiCAPLAYZmxGZKbGW4VFL8oCa3Xyy9Y7WUKP2sRYWdceobEptEbo7dAlOZNMNjcnkI3gRnGgL2J5OkawrUePdhjSvPx0Dz9vDKmHpTu9ByDA1AqHLwFRdWJ2yWu%2BuK0GKBjy1st%2B88SOlA1nMOqhmcAGOqUBNYyPN%2BROovh9JIqJ8S17tu%2BFUPqZd2FY%2FZ1CyJivAlMwyLG%2FfxFw7FtAk3Bzsy8Ut88PaflirtxGrqAPcs1oA%2FMiGwkeM%2FqO%2BSku9mrlYKm5rlxS%2F0WVz%2Bqu1d2TgceTWjy%2BOjCEaecZc4aBQru6Vmh4SDxv8TQMPFT99tVfmVS%2Bur71ADyBmJtoSAYDkkaJ97wGyA7bBMfqm%2FWvrIDFmaiTARNv&X-Amz-Signature=08dbd9a0723c13ce6acc400778bade6e4cf496729dd2568db7a09fb98887d47a&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRDKQ7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGHWd6O0sohAOtbMmwrHd39DI%2BV4NJlcZpZRz2J88%2FzuAiEAra%2F%2F56gGh94VBCh%2FUBYainDJCQpUEcwomSIGISc8gocqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHNto06m14gfmaF%2FircA3lttN5apxa8J7IuouHF2imvg%2FiffwqBaKmuI%2BAmpOgkjKPGoTxSJOrhON%2FD96gm8rUEFUeJXmQef61UlaFbdKvXKtg7hih1T8At8s84Qq7I3AgsPv2UCvbRaCrdaKi6qxEqjlf2gWPNE2VtRLwkTk4QmTDjFT2qA0hzsbRA2eQT3zbJtaxC13DobcI2diSm2L1tyS1BU9Gc4l22X5phf7o%2FT7QzJscqdtebGHiRlw6eW8CpaEM12AGyZY5oyzbdv8OoAUvdTT34fkxKpV%2FI1PjJ5IOuW3IKUc02NOmVTuKvqE0wGKpoLK4zkxoMtVCGNq8bKRFg7ZMwxHmOmbSC6QpJ8p2BC15gnW7aOsy5qv24OaqpAWtIYSQ6QtXf0XuXIW45oV1EL3BufdXlaBnPtNgTfctj7F11BmYqiU0axF3p04oL%2BcYhBxxjTRXnss0Ycf36HtXJCy3Msv%2BINONjmkMlLSbergcDvHWmxDEJnq3YPEhHS3fa7B2Lynv1Wy9V0ZcJDPVIT%2BM%2B9YPTvYSjPgFAPsxh7x4N%2Bdi9fVesfjzkXiRzWhLWbLxlZgh1hQynqihJ%2FaVGpWdpCaNjJiTsrQBhL1NXYcyWiGmgtXJgIgfXYmENcZFH296XUulfMLSimcAGOqUBkk3U6RRMzFNsTsCakTOAqnuVoTRu8CQmBWf8OhQS%2FvWfIcwY9j6hmSHpOepN0N5eCMSqFBYleyS47FzCW8vNKJRyufjTHf0NVuohqbshYVW1iXNlySO4eCSf5Vk63E4WEEaJFzyvwB3s%2BIoRQ%2B65O4PtAYwznZ5pjZzCy8V2YgttNrQag%2FAV3cVX4RGW9Rbe3%2Fr9FIlu5Aa03FeC5zoAhMuM4dft&X-Amz-Signature=4aa30082e39438d170e848213c6816b8193cc9332dc751630c0f0e3b5f9d072e&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466746JXNW2%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDdsRfqHqY9iIk9gkB8S48LC4b%2FLE1gprQ06rumXAzhIwIhANIKOj4Xrd67vmo0KViy7mMzuulCTCIXKOhjubNhN3w3KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuRaaXhIC%2BTpNBzukq3AMy8WohPZvyc9JMCvxRbCVxSDdbehbUepkbGwYdfqWHIwnjYm9dvqkxFa1%2F1yLluHb%2FUNPYhs898cTP6xDQnnd8ocZ6vk55JvZl0p%2Fm9f3Ogo3Q1OLBhq7f4bOdsN%2BlbRyShzErkMwLnHwkp%2B%2FjnTHlJaNMq3Yg1sDU0ErsG1RCj5izp3ErfHDB0ZPit9A00R59FHOSUnGynQ76mdcYVPCabIy9j3mrsqDESrDhZyxZVKsfRltH%2Bw0XysRDBdn%2B7yd8UvrA2ZI1vdTaVCKXfoNN4j5wpnVECOFhPsqasayWmC5VPvs9qK6oos601AFUxK6PqdWqwG27RM8k3%2FcnlRS9ntrmq%2BtcGcThPuhe99g43LE8Q5vB7YQlT5forlIHDKARK%2BN3qELhcfJnRKFA8ocWjae0jFbOaCabSB%2FgGCFNCwMLCEjnhbUynlZDy7iffhjHthc8nJoWpC83VFCo1g%2FvFo0WkRtJziisBPoqtZIeB3nkWLiKwcv1%2BOh0BLKr99baNroLiXHEJ0dNKuGnOTU2UYZKm46IPaVkG6a7tv%2Fx81VQfep0%2B8olJ6WF1L6u6FUqQULjplfdY9ypFiwjvuoKsQtM%2BkYgHl5%2FgyriGcUxxiHgSn3CBQ%2BTljfPxzDAoZnABjqkAZbFRol3tWfjGdpZBo2GJJylEtRPkDQSQnaEsbHy7IMoW0c9Omxbnu4LUD4EKxftFAn8HHTMXHbijSjIkj8x8sGc6enOAlnnvLgSH0dWkULj%2B0%2Bx7PW6T1Z8QhhZKfdG8j2IIaubcztzmk2Bn0NmWmDGBfs1l65GF2x5mD8akio5aDEkkhd%2BvzudLVWEA3FVarqfn6GS2TPDQAZSDUZbr8UpLaD%2B&X-Amz-Signature=73e49ee5c9d21950eb002e33ecb140eeac5f080d9179ae68e599dae8238c6f69&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCWPGD3Z%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDVkW94LhFx1mZenrG4%2F7zj%2BZgROslByoVnpXmf6xtk6QIhAOinMsaI5Lh9F2EgiuEaquSs1KDGjjLE2w4em4XRevQPKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCfs19kLYkl4K0qIsq3AOpTeWxB2z%2FPqMaDuuFtUeR2LRSRC8DnSq91euks3cucYbes9FwLGukMDgUv5EyBPRz0K2IVEkjkY0MalDPtpaslhWvC%2FPfzy%2F2lbizb0sL7mOy5ne4wW0eq1HxLsBOgIFvF6bV5AzwsV0vD%2BFlmWjaxl8ojD5LLwvWknQ956QlPRU8BNkZfICJI9g9nRYtfRoNTfsKX8A3HRnNCZh87qnmuyM60JWRGZffisB7SzOfvVkRUy1PmTivEWJOUhgJ%2FUJbaPm%2FilN7J0u7cbK1p7WwzgeNMgxnxRKDOjnvdKZGX5OlWYi4BzvVaC0XrVgSVL5%2FLjLYHwrpxa40JAVVrXYpHLt%2FAvnlVHsaXiMCsiusNUUIw0fpcxVSBej16xFKgjJVC10GrAZ5OQ2r6jgrux8dRgULyOPupx%2Bea139dM1zcqrHOSxfuZsDuYwaotC%2BisyxVP2uZqR354WQCFgKbzcMsO37FlFssjItd8YjXL9wAqIN%2FpatZw6lCJ6DPhefvbF9HMXA0NhCSlQIx10Ipqho3rHRW8gyFnXeByU8%2BWMEyMZ%2Bg8glDow5WY0GQZSltYOQnkya2W8bv5iiQgu235wQ1XqtD9z956W24hUkC3LirTn2vKxxwsdc8Bxm9TDToZnABjqkAYhIYxbFqRv5RXfMir7BHH7u28WW5ZBGnA5jNwta8Gw4ysHFJnB2OtVU5ZMQlrL0fJZRs14tU5LgZDdaPHR%2BAdboQPbWM7VjkhnvnFqhe4MT9YzOENAze3KilEVsMYcLu5kt%2BebNkAd6QrjAdL4B4zjauo11%2FRrIHwKLRBMIg4taoy%2BptEso%2F5yWKh%2BJH7pRNm8EmyytI9ya9m5LsLnB8ELCRcg7&X-Amz-Signature=41e588054fa1a1c16c96fb8822fd5730803757a36c8d51427f612a7c7f6b1c05&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Z3HNL5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCUAML6ql5x%2B5fc5y3UVuPROO5kdf9pCJSKmKkI%2FHaRAAIgSHyFhyc7j8PBAXJ6zYfY3AWd2JcuLAew9rjATVLeurkqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BcxslYZVlDr5KmryrcA9eBlYxh4anMRn%2Fp7n3HiOfq5uB3xaXq7%2Fxwu7kCgIWf0Bz9SHwqQGMl%2FtjEqTnWVc9N68Sn2BYdAzvzaE0vkNuvANwxTm8gPZ0LGm7DLPJIhl0gs1bw0UNjjG%2FmSxkt%2F1SS9qQbWVkHYMBT7J3ltOLFdcjBM%2FJA26FM0F5LKG5hDFUqM%2BlF4DTCgC6q5U9%2FZAJX%2BK3IB74GPUzJOy2mhBQzekes3Ptf3wuidxQe8AMydOKUoj61zp8OiyB3a68Hk86ub7gcioW0wJx%2B4TaLcQmsQ1n53KW9CF33CyQhLXcBv44Ez%2FfXy3HJMEtUCTCWQwcDLVRHkICVNz9D7CfKFWtxdx8TgM2MMZWtoAXA%2F6OerfSfjTeBkWonhbdu0L4TdXw2Cr0B3GgAuRAlhY2%2Brus7bU32MIi3qGZ2RsWumLIcQdjhFKSGzh7jV7QaGa%2FLt2BuECjr%2FX%2BvzKoXlcDnNmNf91werOHLI5Hw8Goy0ZkC7qWxwomwy9GEJkC5R2UL2P%2FJJOPyME3Ov7qcKXRNkfBPJXWGqYMEKV1GQ2VWHSvPcMfbEJ9Vdtc3jJiD5rvzicEY7QfmPVIS4LadOSHqrJp8NiSTxE35dWKQp1W1JUsbPRCPiuUKECjMsdReMLGimcAGOqUBUGLPqU%2BBoe7vH1ZYZuFJNjEH6eNtu%2F7xqfYI6jpO%2FIgr%2BoBT0p7lUk3csqoySMXKz455iZNJGzzpnhUswT2P%2FiZr13L8lehi76OJudFdsO%2FrkDBAXQu6UOcA6ucQsKiCd%2FfTP6R5bJE8PK9zBIj5M7tNxLC8YhQWWYLXqlRgxpKqB0ipvAaUCHWM9COA3gRnbu1lNz94KBlnSYxQQutHKYUwrwxI&X-Amz-Signature=d2e1b8db34859b4083959bbda2628af4f29a2ce9f8b47b4fb5744a86051af2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSUBUD5W%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCZDcCJ%2BmqxiYP2C%2Fc3Waog1FxJi3TH%2Fii8ACkqiIJbCgIhAMCq6C%2FRFXjGE8uw5jeJEYJIMHxcIFu97tidsMnoaiGPKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FHZIrx4xCpYjM8Tsq3ANScQsqo2cOrWwx1gilJFdJLDh28hIkvN8YSRKned%2FesHt3b3ZVH0jDN3AvT4bdRNb%2B%2FR2zznoM%2Fhiv1HzBZ5BtCSZpS%2FxWWeusyw3SYImfTu6qo5WNAijbuQM18Ij0zISLaIQzWhOE5%2Bc0Nrig89zBcudgI%2FJWoRo9HAq5FB6lFm2cMrE%2F0ivjv3rG4unWDktP1N66n8GzbJlzqjDavIQu21yeunyNqIiHQG5JSSP8EaJpuc4L4Dwc0xSqZM9UUH9pNW37B4zqdZ6oNKMGdd3JbJ2AJzVkbC25pk63%2BN1zs5wHXH%2Fzh0aHqIYtQ95MQTF8jwiugoypKCyI%2BaD%2B%2Fvz67FFlX1SkjHDaLWLTuGE3yICbb1bPhVmwtkJXKEtmDqNFLg4alFPW4qXePLLRZndDuSaMwM13zr4aKn1ecd13gO4FFdFrlTcyPVSuUIzIhl3hiOeX1JH4GkUuZ%2Fo%2B0R4ssZiu5nC8fkf19qC8n5x1UfebBGqZ9pAQPPz3Uxj1nq3h6AZ8GpLCpvuuZHvDVsNK6V1aoR%2BQDyv7HU27VxqJtWfg%2BQfm2YcjZlR9S3uytV6vWv5EgfC6pr3YukfvQC63sGkw1k1lNSqePY%2BDbGepFdgHQhyK%2Fm7hYB5UOjCEoZnABjqkAXV3WWBrykJRywtLWPk%2FM4LamWUP0VpYcebCDl0CyL7%2F7ZyH45RLQ6TKVN%2B7h%2FdbPalK9x1%2FhEY4OPcKT1YFSDiTJiKl0VswyGctkEDnxl3VBuaIox4asRDTgBvrfK3Rvvdm%2F0Hx87pTsQtCW31xQTdcq9FbHbGHGv7ZOSzUYrgf5wV24d98tID9aKzvO08gjZSPK%2FoRmCjwPmUseM0I9RsdwYm%2F&X-Amz-Signature=5f30250ad0113801b9a52ebb97f8da60555f2b69684daf2760807f665be165f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643P6OIVF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIHJtr8199BZYbG6F89KzGlwTKjxsx9ylOIDLOfLiDJExAiEA8WEM8MK2agx3KecX%2B2ycGMeIGHS5PjRErmxig%2FFsMikqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFwU1Te%2FRK%2FyCVlRyrcA9pFFNzJaMB6HIp%2Foqc5pLXYJykySjGjTtzxe%2BO%2FlN%2BsRt%2F5O4sY3J3TyGGbcgyjjBXth727F8qpTEB1UnF%2FxFBGNGiwbhyfxWQ%2BQfUuHm3b0nhIFLt4Db4BgmrYMeQF0KfZ41M3URjBRm5NLJuynUj6Rzy3MDMuNLCD%2FuK6B4M9kXQYuwJuG2T1nIdEI%2B8Hitec0lkK2yTNoADPV30qvg4kbRJbhq2lvLQu4LxdVHN%2Fta6sM2uCKJDgIRwQiW3o25HmTUtHKdy5QBjgb8SwrU28E%2FnbTI4vdGNNYMiPITUAzc6BTPftP0N9FqupIXjYvsjG00mgPxYFo%2FIgtwHeXW4srtInpqFroUS9GQBT%2BGlfzx13hTMnRfyQOsNQmquW29kOaLGhGhXXPhtPAbDO1GaddsHeGSIxRQmcC5YRyz7mfFYerIyFz9Z7sGdNq9%2Bs%2BCeSS11vpuWiGiYFjKbtBh0mZqOIEGbWhmjy1BgWUTLL0BZwVcJLR%2B7IH4%2B90n16Cvyk79pwRRHgyW5bC3CbPb08VHTfWz86L6IxrABI8pzsAz0xXbROvSQMc9q56P0469UhvA6lCNyWSc3dRMasMT1T27O%2FqnJaVtYuhWyhMFRoVxJcTVgdGN%2F3j9bjMLujmcAGOqUB45ej%2B2VFcGhUebJo%2Bt5H7yqtOz%2BwEKvxw9LYosHbRgIzdwd4Wb9WwDPKRjuf3ga9OAwXW11Prq4rvLz6N%2FntWk39RHNR5uzhKQZX8dbBj%2BuvnBRX%2FT4z9nU0mA7cf%2F7vEJdwCWcjlyw3GFMJFzqOLz1NE4TDAyU5xl1fvkpm%2BdlRbluMv34m5aCAGaVYCwPz05cLxkR9h%2Ba98UryxXz68AqWj7Gb&X-Amz-Signature=ba98c2aa637826dea1036d6abda44cb56fd2880fa52086438cd65344a3862cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYUGRPIR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD%2FZ%2Fy30JWQuD8RSk44HmHqMdTWFFOGOHe5DU%2Fpybgz3AIgEk0M%2FyIIa5NiWiMcGL1bJjt3ssxUod6PV%2BMwFZrI1P4qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBP7iVebbVLtAaKoXCrcAzxWe4Mw4kKQyPi1nFflWMOVj7YOMjR0yCDE2SYGhKmC0xs%2FZA4MDUUrfH3chxUIwoNoISm%2BIY%2FSGmjrpTZnz%2Fcm61zZRBnfeIbfB0G1XZ3VtJo2Y%2B%2B%2FF0rcavbusUOmZjIObMuaS0g9nf%2B%2BU9iqQC4pruzi1%2FI%2BYTtZhJYS%2FymqDMyJd7V6l7nFvX0tbURWJCE7h7Z7vMTPmlrJD%2FQ8KtEcP%2F%2FL1BrRm6Uz%2ByNwfDH8zTalmc4CKXcQwYyGJUsIdFd1AR7boi8hWkkGjmq34Yu39evfdV%2Bbuqk5EzDxHxneWqd%2FzXuKX4qLAjT6cRtaxUdeft4pIJ7WU%2BHS0mPuu0SXhpTs4EaaqV%2BHRfsscgZ1YRfKtm2HRRVvKqQSadQ9nbOzvTc9bEMTkVIQQUiiULLRsmxzCrWpceLDSLENhHMuxeSKF6ekvTfzayJgnoJWOisydjP5URzX55JDFNKTfR64%2F1Uc7jXDTJtBZWPQgAPqJBYjUVasbTS7cJARoZasW1%2F0pkl8xxrNLkf1pWgqqtPAFJqlgqQg1i1Qmbild%2BvUoxYqgs7GcW5XUyOt7WdHA7xVv%2FE7dJUDvo4VqI4stSo1ffKMj2pdP5DgnsJ5sNDWKFNsDcY%2FwwbhUR9MMIShmcAGOqUBh0t8%2BXWS83WJrw6pbEmVwM1ZofpJzWptiZMGYIK%2FssbIp%2Ft2gZ9ZjErNhfrMLc7G2R0Uyol3rcurQlzdej3T6vmFc%2BZv4%2Be%2F2rRwAT9YRCVz%2FcD4llVe4OJTjU306Cx7dIyVp9w20Olaw%2FkML8Sy7rjClo8uu%2Fe9FJJXaSfviKMASI6naSO%2BtoAOjbYZ54QNiDRZtvNn9LnLzvOuqrcen%2FkjDiXk&X-Amz-Signature=9c9ba1085b5076ae6fa7697b0d7f92070d2919e7ffede163eb32d3d1bf18eb17&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

