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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR475Q7F%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCID8GynLGj68zhTx27Dapr%2FYZX1pwpnYWeye11EVZ3B3uAiEAwrBtJEFHuhJtqPbGyJqpEKcsA84wqOuGgs1HbqvqGaoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH7uXSXwULl8YCOTyrcAwaBw%2Bs4zr%2BPwtWu%2BeFsbx94n1Zn%2FT8ucmXqJb1W7lq%2FtYXqNzlBO4gQsia%2BQ7qcplYK6vcDNIwMaVsHN%2FzBK%2BcSXUv7HM8j9%2BHb8783ChHbSSboLBoR%2FAS3%2B1XC4FghhOMkSEs88oE1YgDlALrNO%2Bq4%2BiFco3N0IvceEmlDROA9rXxuz0LM5LGA5lJiNdEpRbwML9Ndx%2F0LNH3NOTT01MrHHpnxcFH9ChAEiuZmYm32R%2B5asThTg0VPdASbsLlE53kaxq16C3gVi97Ftksw5N6hGmLnqgXTrPHvk2ndZrlGFbJl38HdQFLMNZMIbpz6dgluKCelinLLWpjhJHNDE1WN0Ib4nx2FepnEjwy1OofxBwAdWTcbnLin1LIR4wKXjEsTiQMo%2BAeHxWrSiRGYZlAhOM0w9F96BDtIG2ukphAY01AxFxFENT6VxFOJMPfnfjsC010koqiYQVNlZlyCQKVCa6dY45fWqLB16Qo5Q%2FugX%2F%2FxU%2FHgz6BGqAMCMse%2BREldERyALI%2BLr6rQLHu2bRpiWsHjxhiRGGDwlLwXJ5QGKp7my7F83Dq%2F4yRfTLRP85bRLDhMy9k0DnJMhFXHXtpdEHKBmUUoVLK%2BvnCqBcbvf5IzujcYM3039JqGMJzFnsAGOqUBYWX2oleypiA4ngfChTKlTMi75FX96jfFDXP2Bg6F9kMQtbIKtA6OCcG%2FvGOuUlA7n3You%2Ba5mxwqI0NQGqX7TrCeXzvJ%2FYuHcBc9hTC7TM0AJqGPTETMEYCSBoVEJZu4YUWipaERwo5gbUSfxvPy3SAOvYcVsNqNyN4FMiEnocdivJnzFF6lfUHi8Bi5bUHHf1JEXm3lntR95KVC%2ByW4IGZwpfpu&X-Amz-Signature=ba2704120b4a0dfe55057cecb955db84c70b6b95e1733652d76ff44aa0593b87&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRQNRYC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDqJokl21nZ7qx99klyYB%2BSTZyxNJDMBviBO%2FsFxpVu4QIgWzbWZO%2BQDR%2F7blWqIgODC81jdmyhvCJ4KpnBfDqssm4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BAYi1O4IQekys6iCrcA0HUeiY4AKkkg4qjVolmBdN4PBaNjvW%2FYwZJdae6Jpf1Xj3rIYO6YSvCLskLXaiyOUKA0I%2BU91dJaA9NWZmDeEBvKENa7bx%2FEFIvX2foRSNECLsY5m4H0cpjPJrEqZbli9Su8xqKLV6uIerY5MgueXH3QbUtNgZOZioMivcu%2FHnkPWCh2YM69VEV3FGOI%2BRzCQomtSE20UfE3IwIVNdJSqoF%2BWXFSb%2FeBBlwEbzILT%2FbcK3jAW2WrePCDNPwenXoIVzSQEhnoX%2BxoIIX5jg4qI4S8jPd6hX2lQVAdEzOsAyHeP5qZk9M5UHpk%2BcyyS95sdzA9w%2FGVtz8LGSLgZBorOBB8OtNqdmwiCGX8uBYNVjFQEiELSSwqDGK1fDnleD2Y%2B%2F78qV72rURhgbunxo6%2BDRPhqSyVU%2FuEB1W8JBwLiTR2%2BspmXpgZ34sQ%2F2LW02E24fT9yZMJYz1W6YQdI4IeuvUXhhBlzOkPy4ocFO8vIkY94lyzqqhyrIpXvNG5ostvJgGOolG0ApEC8sJ0%2FDJDamNnOKP5QCxT4lRiR%2BiLHSa%2FHD2VLB7mvqTokgRXsQtOq8JAHIj33YbzjGCoYp5Q%2B%2BCP7zzRx4B%2FNkpI%2BsyU%2FS4sFtkgjNXzzKgQq3KMM3FnsAGOqUBQ49KBMGIcEV%2BvdorBZAjvQBrLUkC4K0o1q862S1h2DOq7iU6%2BU8HP%2BhRgXpgSPO4ewuYvyqNYBDiAmPjRvNFO6u%2F4XX0PPWeJgE4FbjMk6BrH10%2BTqZXX%2FsaiJF6v0R2A9zHc5RBVSbgm0j6xjS619VqPx7dRMKhfbJwHLMqERy%2Bc17X8TlLWgssT1PKskPAFypjAo4fg7iqaz17H1ZoiyLTMkKT&X-Amz-Signature=19ccf3d0bda965ddf763f051aa735fbd7d95d9abaf902f5cc0cf114f14b0b923&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLEP2IQ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIDjE0jWT33X6a7SWrDmDuShmGxIVJAL%2Fo8KYt%2BM3hNgYAiEAiRhGicfirDiEM1BTF2%2Fqy9CFaIjL9hMwsrtML7Hb%2FcoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1Ca3t29KnaZFw9syrcA7QNX4hyRIdm%2BF8%2Fb0FljVGb8fsDx2mOh%2FVXopZTlOZ3LuOXsafhSAD%2Bs5T1HNnA65XgDh8HGTzgy09EhG9GpMH7NYH%2BiviMeX1CWEKPwcKX2wYvUOPy8igkKFPkf%2FmiK0xCZJlvFXsfC575%2Fiugr9A4RF1xXrWO0Ui1BjzaVueP3jbdYpMtHQvhANv1xOeoX9Zw5Iml%2BlIIeENjyL2EGV1S1vTS6W5Ko3OW2VYI8ZH%2BbpN8ii%2FzcKIOoO9rOuFs7ZK0RfxD0UzD9P2Ox901X0piiqOKBW9yStgo7bpiVwz5306utGsAIFyrRvre4ZGPR0zrsT%2B1yC762Evr7Bx18zFxEbIZNWjvozhe9%2FN57vcZApcXtTzEG0F8aSBNOpKM4UGpgRFOEFWXpgE0wYC6MpiSTKBXUx7zUAi%2FzHkz3KXAvL%2FcIPvbccyCFj%2Fwru0JskR2yRWrtKBx160pOgDcr1v%2BO4I7Ea6yAQBoT0hFbsxJNrJkWJ7yGzb72kkQ5q8A2inU5XYogtMLlV6fg5xv%2Fg29AOwQx%2BDfSB76AiZx1JGC6mEvQ4T3mp9g4d2qVAoo0NMO169QIUq3xv54WQDJ9a%2F7%2BvsNyqbec6VCkccyg%2FSK1w6qrntwBRpB0iDxMN3FnsAGOqUBr7wZdQc1vcI2LKqORfqgMowRkEnF8EezAiYeE1KHpnUukRIwdA6WIr5zcQ9NTNUfYflH7j%2FT5cXwUVUoWmud%2FQHdhrQ44elRx%2FUjeQB8nqiiv1X3ZI5Hkfh36GjUIagKkDDAQoylHmy2oxbVqcTqIAn61ZmGzNb2NxTgP1Oct54VBmcyBtkw91MGPSUZLXvycjGDuRkLrD3jWYua1Fi8m7h38ZV5&X-Amz-Signature=3f5911043cc9fad7b7460a671ad009efc8956ab8c04dfd74ee4ceef65a85c834&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UZDVO5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDnJY51y9L4qXHVJGDOh1y%2FhikZYGWPY31GmBsZHwuPtgIhAJvSpaXfZf6lo7BEhpgRNPCcDGImTrf8WxGfye2nTGPgKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIo4uA9CkNEkUD%2FcEq3APzkRH%2FV9TEDMJYPOMzI%2BrOVkBHrVHAwpEfKJeHlXMVKyp%2FU3YHCli%2Bp6qnFrW%2BW6zSRgwKRoGrHdDtmndkONDCRm6E2gIU8vSd3YEUvmQ0DcohX6v7bKfBvBTzlaUIw0eoixOQGGQzY5iUp2Zvtvc7wfUCfzZhH9orIivR9ZtowBGcA%2FchZsUxAgZR39LToPD4sGN4MyV3eLlHsHtp2ISBzzcfjUzUq%2B3r4yNQu%2BC0CI2Q7jvRYqrEN2R%2BDfpv7P2IZtVTkrMCaQhFQhUnF0tYzSdFSmdqH74WkhXtQdzho2%2FJ2TF6sJpa4wM1BXRnaLMUwytVJMrpIGHJYjxvPL9%2FUi0CB3J5yVHNNvqZ1KPtQJpOeGfJhQcOptO%2FcbUEUTnDQpo5Oe%2BabdIc%2Fx3JFu0kquIEswd4HUPfI3xoFY9508ttonnY492Ecz1Uqtwi3HIc0UppLKkx6O66N5EoaVu4Xa9CxPoXlpYlfpk4lUj6NEdbNsmf8iEmXrBDhKbEiFvyxX79f3L66t3THxycG8FW%2FcZ7ztT2dl7EPeTiN5J7vfHO2vWQh3lkFhi7rjsA7Ey3Oge23PDoQAXKxU2D81SBYR1TFzJ0Rg6lOPoSCtN%2FxGlsGEMPWadmjjba8TCMxZ7ABjqkAZ5YpZ4IE2inNDKb7YR1l79757r0roVURxDRtFgjJyIo6wlT9%2BGeg3VudBOVNhPHT0yQPDsniLmdsfX%2BqOUP2eEfcdAobcgzDHrkcUiJXRYAPcbTIL5wsNkBVUaPAoFCdw5cimbUG%2Fbn52MKbO%2B2RI8uT%2BDtbxMFLI%2BG48n2bYiL%2Fai%2F24uguaQR7LFqsV%2Ffx3%2Bmt5OFIY5THVx%2FQZs7RwWYJBZz&X-Amz-Signature=de394bf28fd65d9ffa9b15c1bc6be2991bfd2cf108953d3b590eed682c808c97&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPPHP7A%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDxifNqeQRY1i6y2nLrgjFjKcATDpo%2BV1UeKlOffMn8PAiBVL9HY%2Bh7YQwNFxixqDL%2F4ZzNdFOyKSl6TfgOZCF6MHCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnW5LW7mn9z5jljlQKtwD%2FkJfPtAPZjGFVTL5gBDyO%2ByolQTqluDeGaU9QSfk3v1sN47VIc9gIVMyZeHcoCmoxZN9KddfF4OoEXNjE%2B6%2Fxc3AkC%2FIJHuiGfE4BBE3tor%2BOLwYthKWtLcNuFrF4qPrLyjwOhAmFBL5dZ4AguhARzDtJai%2Bbv3kzuYUckN3gOgX3PEeswAuTDHOKNdOBMiMot%2BCrfI9spD42C9WAoGQIUqurmX%2BCHWyWCXWP4muyUBphnac9HdPVWOsD93TdbyRYA5Uv5qRjWZfESk%2FUWd13G%2FzqNO1yiez2HUK8ChzsQW05M6Qy25FU1RgklQqwufjr0R8cf3MHKVDMXXYYWdThhwoTGaeW6k69in6ZruoMnjBdKNOPQQN2LVowlUxbOdpw7oYXnMzJoIrMv3qdgQprSjFbSy7d6BGgvQsGmkiswdE4iafU6PM6cAZu07E%2BC%2FT337WF2BKU9avyL2rBOns042nBxM8VOC77H5MgwLbJV99tynQzIhFUvuYUt%2BNqC1KKmywdH54cTZzUMuommtAOSnyq8UYMaq9DuHuRWXi3D8iQPcaoOmyFIFsO5JiHRzg5cZItBQzoWh%2B8VO6Krop1%2FIVvTxKQx4LC1x5t0USJu64LgDhQE3%2BMyrT3G8w6sWewAY6pgF57cDLKdOPCStCYfZGNBA6mlxVUsmZaPXp1GeKcptpYgXCYjObq5rnenj4MquDGtEXy3kSy8QhsF%2B%2FOt3WOpROqyGWxN4FkgeFDILJjSgSTm3dhmzw6F8n3oEqVUya%2BdHo%2Fw8Vt%2BdTdLEOnLHDYHIMdkS9iKRKYdthpjHt48hud8NPYAVdjq4xbK%2BBUxjNDCi4bL0bU2pHvIuDFSF%2FvU9%2BVUGSkeMd&X-Amz-Signature=4eb07cfd03bd3e85cd77262410fa20d6f8b1135266c581f42368d52c4e91e618&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ3Z2EFN%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIEZ5gXnFGfZekvm0voih4HR0Ce33Az5tUjW5mZdTIFmLAiEAzVLVmkIHgvYoPyxFdKo3mBTjgEeXkgBF5bsMskQCc0EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAt9wDmbbLGOEgNESrcA21KNhaJVYsieOd17iQfz%2B1qMZ%2FKWQu%2BD3uDrlj7dudKwg3g8b7hocbH9Z7zY8msHexZusMackaExSfFWPwmDRBBmiT%2Ba9kAuRIXjpAigfY6QTFnB3DQrzRc5BgZalghHRENRpAr%2FMGlsiNH1nUdX1VdJZmfcw6OJBd8pGzO4pqupoZshxVBMpygeF8KzlEp4MKuAR0UayqMPvmmoxPqoOlQaY2YkUO%2BR72W95thRVZJOibwK0KK3FaSiePXKxzONImNyKKMaLrNcxl%2B0didHmULJUVXShaApmDOzHw%2BT471N6gj4ugkhPhuos8ytp2CsTuf%2FDWIxQY3OvWF7BHX88111RFpvMrRPgh1ntKaZx7XG0NDSqKcJFS1eFYQNg%2FK%2BNPRGvFkhAgaEO%2BHCz1SDxrGrrZyRketq%2BmFvGHLTPSEVBJQljtwIGNSoVXh6BARFP%2BWXalg752tEHELW9loFsAtJZCLTJ6AI3wDZmAdSkaqv4%2BhzT8MNu2JemkImICHQ1SK6Oigcc7LIOSlto6dV4I%2BcBjOgaTOtiGNK1qzzElNuNp%2F%2F19tmydvNc0hP8OAhfPv8dv0cpi3jAMGSRjjpGprMTPx%2BztnKnvu4iaLbtORVEYPEsJwHQepaCYzMM%2FFnsAGOqUBR%2BNcYD1BcK7%2FYzj1RGdV2OIyG6RSIkaHRpvIp532Ah1XRbNnqQzJ2f4eLH7CE%2BK3aqQE1fY31IqgfSO7ZjXOATtQvb1EcbnRXoNIiNXLMX1llE2n%2FTM5PpbuajyOP0gmrUYkCK4w3XkwPvLC5UYyR6APedxDg8Dt8JMmhEvZl2pgHue%2FE0nJyp%2FJu3Io1kmu%2FVlY4wRIKHS%2BE5kyFJP18eN%2B8Ksn&X-Amz-Signature=36ccb0482d78e36ef367335a757e77763f7da101ea0d67cd73d8e26af53b39d1&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PVR66CP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIH4nQvK82Gr96YnPqnd64omRDdX1vH4KRamADi4RY7r7AiEA1uy4ssPGASgK4AgX%2BS9Fpe6da3CiKWrnqxITHb7qXScqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD3Q%2FC911fXNobYQ6yrcAx392oASO7VKk6sen4xe5xe6s3IFTK2XoPbeeaa6XE26ufuc7EkwTJMv%2FRLRME8EycFoKq6KQxU6uyhryKsQdXSmGQR%2B73lEqit3w9bNQPAdIBuclAwhcWxI%2F3uTZr%2BkRcdHIpfEN5L1MLwygDybWQ4RpKJi66u9mUGUjT%2Bp6HFPlMMY%2F4uQPzFCBz5wYMGHizuLNv8u2WIGHsUx5LtwMT2POjrkRspZHo9YVAqF7gkJuuynPV6mAwr05L78A13jiHRRgdes%2F%2FVVrIHx%2F%2BM%2B6%2BFHZ79NlTypBMXpQ%2BbYo8sypLaXw3uPcYWpXDBd57sfxtuppimexeXCFMRcN0MArJmgYaNfUiULRxskO9d%2FU%2F%2By9UHQjQ1NshbET6l4jtzUvSZLG7iiCj1DTw1Cp2GiRyif8H%2FzMcJYyjk4AkA%2FfAG1bZr37bSD%2BzusreiDK3jdNG88K1ureF2ykZl2r8Eyp7c0bhRqGP4PBflTzQQ10FsBC2hfBIxoaZbGAVBGw09wCuZzJJ3Utyo%2BURtU43yCjxj4q8NPIwkTCOFrvCe5qlmgwM7bKeG96torhrsZY4Z1T35ha3E6pAschSF94a5YazbkO9BzWIn4KVzpyf%2BQPeloA%2BXRyBqZh1a1taKFMJnFnsAGOqUB23r7HDXbXC4Fp83eyGUBNMvMlmnff4wMDQWWsIQPoJnH5lf86tyevBpzwOyqzF071y3brTrgZdeW1XyJRDGAxnUi%2F71eRfZK4bmZsRfgZUQgxYIuCdV%2BdE9FXC3%2BMakE1nl8wYR5jhn45yPLneVhB2Bco%2BYJE9StoVkWUG%2BOUmO15PRvFWhGZ7Ol7gEYK1gQpmMjHM%2B%2Bfv5ZPMEJ9PkVCamFw5SD&X-Amz-Signature=bd24cd92a4439af3c4640edbfd4785a8a31f68a54b3a00a4309bbb2b74ca5e11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DIGQZBY%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCb1Fb5Cn%2B8rRMFMA7kW7qbNGJOomkL%2Ful2odPKbQ1ZWgIhAM4aDuaFO72%2BbCUlSdBYJ2gHJD2jMoTpyLhPW%2B%2FwpBOLKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsGe3nPXDfG1AejUQq3AM%2B8cROqWrLYRD2DrsaJsO4nXufdcmnZpUR0D9yszLEabG2tCglACXGGUevJawxjnI%2B8IUJBriCGJ9dx0V4%2FC26dDikG5mBtDZNnYaMyv%2BpGjtevtWLAbWtPTFwo%2BqJLV5RKQv6OceOSA5ZtfBtSs6ImJxd4loig0nrExxCbBgxkHsm87FnC5EysyMf5rJrOoMzY9rH214yNEGVTewZv9qole1pNZ29ROvp1F3VyTiMg67Y9rAt47iqjArXJ6Y5WnXgXbiIM2d06wGW31nOgneJHyq%2Fh2k2bdVCUDE%2F3bCAR6L0%2BGlPR%2BI1x2SQ%2FXWXOToFQbik2drq3xPr4W6N89svBJToOGNIzVhsBE4D9MNBU5yZe%2BOLFQ7A6%2BqHUHGZb%2FjCr%2FJnQhdbGE6AWDNhFyJ%2FszB0ma6%2FZYItRygeXbI%2BoEjK3LX5YzmOukIOQN9mg66y97c1F2UJfc2EFiZI5wir4%2Fb19hLmLqL%2F6hXJdAv6ZKWzXpKShnoia01qYF%2BUXDldgU27BBj%2FEVA%2Frm5T7BVt92Czp1AsG1IDYto6xMnvoXUSsL42oZMQ3xUKCCO2dMRIlv263i5bRqYoFslSla7prPDQQkPslJHjcZcMeqXTNg86gg%2FUNFQOSr2oyjDkxZ7ABjqkAbVGm5rDstj%2FJ3Nkaqaylwe4ORJuxWSCKjtp1l8GoUaHAoYAglVz5Xzh%2FCPgeZMO%2FeOE2KvjnPvSg4CUWgHNQv4LHLJSjkKOfC539RNskGDJ2EE4Ou5%2FKrpnXKuGipHBjRufTjYfQc2yWcR%2Bh6lrfgX0mjrj5uJ3359YhNAjYeELf1So6EbaBGDBXGQweRatdE37cTgC5jcOdYoivt6dQ4l6%2FGBP&X-Amz-Signature=0af24a68a520757964c95d49536d4b074b0899cf319890867b55514cfd715804&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4VAJDP%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T141309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCASxRYVs08HwThm%2BKe1zTVQfo7FEBcwv980aapvJ%2F2QQIgdKFffhykoeUNyWE6dyJ3hYfA9UFFjl%2Bgl%2B32p6vkd5UqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHoOtzGNitUNYaaByCrcA4Q%2Blgtfb2k49lxASXLtRaGZgqoFdKh9vbfWjnKVGJdI43ttCRmFgZq%2FVPqZid0GMIr6smTD1Zc7wc1NlaG4y9Kym5RIFhPe1BuY2SSXlJYYHnc52v36o8un%2F%2Ba8faabWmTkbboRJC4PwiSjNrbgPuPJQRtvHS4OiTBxet19Nx6niSqD3VvdsYP4Whit2K5lPN3kr4tVFBZ%2BhoXVSs%2FWvbgkeUOBjCKRRW92lRPkuKc1OGpkiGzJhvvYDbhEiJGJr0LOEePtHRw4SA89nQWI%2F3jqmMCarHxFetdMmE9ocYaD95anqxc7y%2F5S5FLEX%2FuEjwWHhZUH%2BxkaltsyR%2FruEZwFfyZNKN4EcT2%2F2754umkpkpIq12FmLXhB5ID1O7ot4JSYzPtvC1A6nr6E9tcgRJQRCJJP5sTGB9cbny7QICU6stz%2BHagv%2F2P9qaQpo1ml7w%2BizvWsRSz4vpOJG0OZPiy7q9vaaR3PEnUPHA4eb%2FNCPbwqgHcDLCHSwt8PV9CXjguq%2Fyf1RdR97wXuor5Qxj%2BaboK99s1xIKS20UXiOG15ZdDfPm54pclOa1YZBfS%2BqPhymf8xArVGgoO%2FyfNljJZj1fvrD47naVkVo%2Fkjh5YoAMT7d%2BguXT%2BmuVrJMNfFnsAGOqUB15c1itOZlKY1KB2xz04EGHkRLUvkYREBFA88bw44OvOMBwcNhIj%2BDWRM2dLHMXgM%2F%2BapA5K7MAFNETe%2BEcw39HToPKC7PaN32ENIa521SRavEFbwCUWsYrkLhuIR4TOKoGVmBeq%2BZ9%2BcJuG%2BeY%2BuVmY2Mlt%2BzStBKma3KLKpqVg5mFoZiPWiLNPx468ubMVMrcuWh%2Bae48I4b3gaMA2BKPifxt4T&X-Amz-Signature=07f2bba02f293d556095c3f7b1622899f46dedda665bb0dbb346b907b853b8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

