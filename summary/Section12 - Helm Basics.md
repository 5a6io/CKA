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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUQA574O%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAhiDZkdD9KkpDijF2tbKThRmUBqLkqeqd3JXBVl97t4AiEA9fb%2BxG5MzRGh2gw%2FmJv5OODssJQVgIQsJZxLOvyWnrAqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLw2CGmMOV%2Blwn4rSrcA635LDzp%2F%2BsxIXs1GfhfKOYsQ%2BtxZ9q3sLuPW7Epw1gGvFxIMLdZ3q0cRKtrZINozHWPpJrG9WRgCJecMYaaOwZzs91%2BwUsTlOoFqt4Tp593KWlMqNdQCAXOFpJSQ2v6rNfMfpDT9jBhyWC%2FGr%2F1uj3WB3zT3lcMldSi2MYEMtuxUKd48%2Bp0NRoBxc%2Fo2IeRDBQE141i5sGZ3RJwjuWAEk2AQaAxW2x6thhwXBGnEchg6C7919WNlEP9nDsrQqJu5dfQsmXZOnxRVH6hrHD1qQftPRVivz3ZO2M9sHhiHAXoGXHiwHSs%2FuUzPF5yAxTOCKuTlj4SUEBkFYUHcGf8yLqQ3stlG3IQeYHmWSSlBgsUMHrpVqDCVyIWA4%2BVCR94IgZlIvHRrLvUWSi3JQnn%2FPAxNv5YHWyk%2B5fgNQtf8MaluAJEFkJVmOH9UCQzTpKljN5coPJVULqYFnhh7Motars%2F4ECMVrGtFm6s%2BdnaBFhsxx4I7EAE8lrulOFdka%2B6qbAoCRlhQFatvzxR3UZcbLCJCbDd40VAIJ90Luu4KswDhrxAGCKr0G28N3eMoz2y6bXLEOxgKnndOwpXfDDjlFOjFdbxrtmgaiEBbmtb8qFXVV8dN7b8brCTGWcsMKWk08AGOqUBoYyM78Q5jIlgkEznSRA%2BrwWyZofGQ4Oq1ty206%2BRaDIa1MoxMR8PWscOj1i54frdq9923YZM9%2BQvOAojTmg0Wkhe3u8uCdr0eUKoUl6YIK8oEiqH4Pr5AHE9TXcu%2Bp1u2h5MwCE%2FSxXMDTW3oHrY4X5CoikYhrIteRUSUFjlDXfBHVGiJ6xQ5xe3ochQ1rS7qoGRQTfInkuHs0BUqILmzIM43XYY&X-Amz-Signature=388a916a86d529314c13bcaea2bdfc8be6a2b1f1d0a7e68f596f35d60cdc418c&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVRSLAOD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIEkhhDHozkbFGG%2BbPhL8taj8V35putzKwXZWRxPfgel0AiEA5mn%2FNejyAxFUhcyYuK9gTN9%2BEZMvSOk4IxmIoIFYif0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGivJsobz%2BRRMEuKaCrcA0Y5qfCt%2BpkbP0guVh4KQa6ijcGhuGy9Y7EtDc3JKxuV9uO7fSdyJevCw5m2Ot0mb5kjnpX1IgNl2hFO707rVkT8T%2BL69M9Vhu5PPn6CjS6%2BicctM8MllGUlcA15Y6EkEanm1rLnKCdlDHRPRn6qYZQTMWq7jdxVA18xDENELdbs%2FQLnaP52Xzouyg3rHw4oIQ3pzLcaDuof2%2Fi6%2BOFIsP9X5rMhCTpctsvyDTMmN0E%2F%2FvRvnIXFWw2olurJik8bfh6QUjXffAo4TYAtvNtDd6BGT2kaauYOOlWFSkHS%2BvYWRaRSZDRYBXPv2SSnWVtiYJdLX1NBH2HN1mcScmcaaegR6aUZFWmKPsvYzOTJyvuQhA1imbQjh36YphDpo8Rgy2s%2FEHUM4qt0GEU8dLViVGWhPT5NfdJM6oCNucVzWxGDZvrfeWYIItP9Nqqcdx7TnBi0jx0pMeECwNb7BLH%2BcgAuX3SPHMIs2ARpJ%2Btr%2BiCMOo6oo0qQPDihhHXmVcKlnOIUfApSUbc4Qkk448nImG0iGUs%2BFLZwiVjnDGU3BlyoKkTpNwE59CFgcZ3X0NvBSAAdybrMPKYo%2FOmU2E97UzednYeIAPpAg5ITplqjxuR1wYh2eQASvdhRbeDLMI2O08AGOqUBFtPxAHSJa5HOSm2%2BnYJ8B%2BsyW6wTsyxgv2RNAXJRXynh770rIQzuQhCVp58Ywn4R2lRhKQe%2B%2Bv6EvX8RtJKwc5L5RcRrsFWqU4wGazAcXXYXolf9TmwmBkhpi4vd3ninrLZQ%2F7HetiU2H%2BfJpa909CVJCYXYxbJlzl3FQog5p7ksHC2N5eBevbex%2BBL95CJR9UrIOC0fnvpX6XHKAXZua%2FqOJ970&X-Amz-Signature=24b635cf5bac231d69a677e65a3dc762420ff0bef23970ab6cb3d22fcf47fde2&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOZZQEH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIGmcUYD25ls46oLVySCSfoElfMCp445rSdSOz3or%2FFa8AiEAy%2FX5LcMemCUyQJN2gWjXTBGyomY0xL49Ad5vWnQ1UxIqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBpeh%2FsjdvqEjBP%2FircA3%2Bel8VIN4X71i%2Bm%2B4vK1Qww4U0Uqmhm09CIWmCkeeJRRHrrhb3H6IgZiW7abZ9aqDIkqOHqsUHAwGMBto2SNA59U%2BALGcm0P9q715DNEYp6lD%2BjOveBLRF25C3rbY%2FtODQYIoandVgx6Bgk6xSInJ4uY7o8ax5HX3QM5eqq9mlf5ImC6Bt%2F%2FkO8NV4S63zsQaotFT40IIkQ0fzGUlBMp%2FyL3GEGVDT9VTCuqxsr12ayaOSXCrn7jquvqIbQvp%2FSrnFwpKLUMcYrN1hsgO0HQPkGTN%2BdrjLgr1%2Bcch7fAIyB80wBmK3%2F2x7NFFunR1oc1vbLuntgstc0PVjdPthcAtwwF0gCF6bX%2F6ssdb9xCv6GkZ%2F0GY7X4UoyCpOKugLFOwBiFKrNADUwymNQQG6yw5NMUM4r5sslm2nj9KOsqfMf2lqg8ysKBSMqF1AHkKTZCbMpLT%2FyJmHUM4CwyB6aV0Kz3sSJw8vHBNV6rMVyVi28sDRPD1zSgut%2FMhq8b6roOkFoEj9lOK4E1MVizNR3dkdfdZuH4QOyWXV7X7S%2BkeIujPwmk1hboQap3FdjTSPQr9167Tm9%2F5DJ9Vnl5WbT%2Fmocxa1cycfpknaixb2uUF5jgBwFYg0BwexNrQVJMJGO08AGOqUBJzrRdsU5RC5JKNENMIpIEsEzjjpHx510Czl4%2BbyqtmTYatJuLY0mvRkcxzrqet%2F%2BX7dKRqZ6M45M1480tNC3%2FLVpBgBEdnTckEFsDT4I9OPalD6offOnnxBRD2YVhGlUZPdT0FLji1xb31HhqI4GTetLS%2FVBHSifNT9A75%2FG44pNyPWqeIOeg1CrWiI7iaqOxq1A1TKUArOAwe4WxPoBCsl5P89d&X-Amz-Signature=dfe45d91d18c59845ec96bd19b77dfe239952ffa9c6f0c5ebe0a52f1032fa923&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELTK4GH%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCv3tBJN12T6DfRR7V8BBBJr0IrgxdH3xw2zMHLgQMx4QIhAIJ%2BaseIQeQGmtQzkkanvx95H%2F97uZXG46TZ0bgWJ4vCKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqWw4e7AzvHWWn7PUq3ANzxHoONSAp1Z7N6Xhbb8upvOWFVCw179%2BpJzQdOkuH8I%2B0iPbTUtN99Xw7dcy3CcWXz%2Bipjc6mJfORl8D6YyEX2s5pdL2QUeXht7dN5g3X5PeXT3p7ydm9jIeYZ4tAyVkqAWH9feGDnpvOS3%2FQa34mDfcPeFsRVaaqHrDzwU310Oz%2BsncCv%2BnBCMqGyzStHH5xwnjDs3RrcDRH5y8bBzHq2rurAiMljp%2F93aVdzQ7KAuUlgYdLCvNJPhqdzVivnTEpDpCdEuG3TyULtmRXrHWLVLR8V7hBb70eUhTLNm1kGnWXEIz7riQNXQOBJr0ZClmi3GoZI%2Btq3uPTDsZw%2BHSs1adc7lbQgQNpC0i%2B2VlY1fgoSw4Z3oYqcCYTPyLxpCkJdoZTBdbtiqZ8lKdlAEJu3TjSbfLD07eq7lg03lNEBlzLuSbSnpg%2FX2fNsqLOPDL3T0BRse4%2FfP7IfyrAlkqPr4AneoBrC5AFcVcW9VjJtdMZ8ZIm2w8e9Vh%2FCkfwT9d4O6Q%2F0VRleTMVFrysFc%2F7%2F%2FH2OFuKzfSlYOdqaDEbWHN6oX8pck11b8Ltija%2BjgUZRs5bc3LmE0NRKb2oeAL%2Bki5kZfJP7vUQU5RhckN%2Fp5rBI6KVVoxfShaehTDQjtPABjqkAd7XanZogBhBkRyfN1Vo99cWcUtN3TvWkPenjlIH0ztixVecwFzCITPO%2BrTmtujcALHrjmhR8BLYrJengDL6mynTFHi5h7Reg%2FTMVQfFSpoPgI88%2BOHW7w%2BlJ2MP%2BsmMPNK2uXGQOenjPvcELz8DRVXu1qZs%2BZLiqU4llnz%2FTWyvxG0KvFk0dLeVHHRGy35ng5cdtnXqAu4x5ElH1Q4fbd%2FyxKSm&X-Amz-Signature=f5b55f5652dde9b880bb0772139999cd3701e7c6e73cd42fb2ff9871af1bf7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMMNZXM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCXDKmdroI5gUmoL%2FEtPBjNgo1nQwDi01rvCoT%2FooFkuAIgCM5YYU8rJDzfl6GxKuZZownANJLKSfcbXgwimyTCBgUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSR5ZzWrzC9d17P6yrcA4OOlyI1zPTrUDnH0xo3dd5%2Bw5nGe5RJxaIlwArp%2FswdCpyIJ75Ku88DiN8KOO01Tnm2QPQ30zF%2B5%2FdAInsRMq3JvKpbHLbBFcAYy6kabq6UK%2BtKahfPdYGo7gKIQeZ%2Bw7eS8TUwJBazHnw4vHYa2hP%2BVKaGvAIfDjokoeJ47USkvS2Whel0aU%2Bc3q7F3iuuq4MiGCVIC%2BZ70H0Q9%2F3c%2FelKKvXlHfloz%2BeVNXhLky2GT751wAwUuwWfXFRb3GAm%2BLjzgV72wSyEKZsNtdZwe7lU93j6vTPdmGLYSnAyOrVIVoibaMUz3YiAkYGs0j7cGKK%2FRcPcjI7NQqIrKqbwy%2B9I5sAF6kk%2Bx94B9pQt4SqEYOQtDUzjtvv5tr6IdpS%2B%2BFWjwtUpBl0SOxFBxkLU4ui%2Fn%2FIKWi8H9OBZ1z6Y%2F%2Bvx8rmVR96ovPxC5BxhPJ55OGByGbNtt5pMsK0HSyrSNWi58DVdQq2c2vvsHEvX4UuukNXCZqk5vx%2FJHWw6uw%2Bh8EK87lVQiXLvoVUIIu4VTumDuPa9Bq6%2Fe3JqVbqGZZZi4n%2BGooravylIj9mBNrAcfNZ8o8LIIyr8%2BiVgVDyNRAAIYmLqONYJPhkGDVNXs56H4vwzAONk1MUMwiqBMKWk08AGOqUBfky%2Bz%2BYR5JsvQQua6hlVko42Hw253hh3NhbnNl9ESlTYsmgEcfPi24fE%2BPr0uczi1uVVdlI5xHmE26bx1mc2JTHdZN6nyCmSIa%2BuwWvecpMjuEkqYf%2F24OJQZ%2BBbQC0SareajNxqxtodXECea16EGJTR5amk9YoTG3OTi9ic7DgF1BZLSsGFe98ErqgIxiI9RQJaJAoitZRAn23MzSeAKwvUK%2FvB&X-Amz-Signature=d2627f0bc0c942ae5ff7d31cbbb9875808fed305ac0aa7f76b31762cca2ce5ae&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUSFNFP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDlKnE0KKrY%2FrlM4tk5014aFtxChFYyguhv8wzmjvJN6AiACXQsHzHt4VvDfob44vu0D5i%2Bc3zaac6YCfw3JLBxCCyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFuYSQB%2FVYf%2F7xyYCKtwDDBX7WltpzG9m2OrXcdsISzUWPyXdtPmkS4Wu8VL0fyXOPPEwGmf5t0ZnwOnPr2jcW2er9oJonClfVXwHP27Tv6mRME9lgsPNO6pFxZPLBUkpMW82fOHrnJWvsUNpSUvzfz24uS4GXjL4hAao%2FwVi5r%2B7amnWgr8r9SALyQ5wU9%2Bzx7aZbNSuSSMw2w%2BMmQwEypSbaJuMzqD1tO60uxoc9l6GZBXrYVKMSkhaFgjxtw6zaputICKPHFHSnmQeVHmDcMoLMvksttMwTirYBwfHEnHKJOiL07tntmO3QEEu0qUYcyU0SIUQEI4fUn7rvkDENHg5H%2Fbz%2B9JB0s4SswXKOK4AjiFrIsKCgTGMRNhaL6DqCzfhJbxX6Ll1yu3j7UBFY8erExuSRgy%2BRzhzGPOUi2xUhIGLaZAW6snoIGohXgQ5I5UyVJEo9j9lh9YhdwHu6ynz6%2Fu8HuOXJ9zheAewSjf2WLjLUDuTf9Dd%2FfTU0rjIwXY3gtALB1rAOUtfhbo7mO9HAvaidaSmiNE5uOXgyWNc8XMRbYC%2BG0mDOgmYyrD1liJusvknht8H6JFxwsompPCOP1wuU1R3k4jP01FNcelasflE0fRuUV6wtKShptdvxZkrMtD3HltFU4gwlI7TwAY6pgEvD%2FNf%2FPAexsDqV3tvGAjCtgy8pklad5s4KxpiJoHhQ0EAJs1IXweEMLi519Jh29roisRoh531qr3ne6cCsGP2X99Pt6iVokwVbkKCoog%2FlAH5559rJNtzp9ts0I528E54NMGzM1j4TsWSiSdsfb6Mw13gTgHkLtnke4YwvTbp0kOyMjmlYEP9SlcAT5MXXGy1yVYz4T6zd6%2F3q%2FPz05JSN2g9XXq7&X-Amz-Signature=abbe24b1c0a914f1a26778d90c4cbf243af20139fe621199606d520b784bbb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMMTT73%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDkYLdAv1ykUOLYoPCEIOuP%2FIrIvABliYOiMVw7bY5dWQIgHsT7I3tG6rIiPz0QGg3RCNMD3tiI4FQEbhmw2gVOgLkqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOH5xtEATUofgBTLOyrcA7f59fk9o5L6qvt9jtagutxzY%2FPehQDbINIk2W9fyFCTu80IpbxHEzQJF2cl62OfZehcVP05udCdVayudiaaifsLX78ha7EqP5Nif0lnBEu2EqIVDmb2jMuuwOyTS9hB8w%2BKxaYQw0GNMabwFGo0uqkdMFfbiL6JHzLVqROmInc8o%2F4k8unFWmZWrTi1csmcVwzkses76U7Rwk0hOUjd81pNPX3fkHTtThl7%2FQDhE7G35CXbrEMCrUs776ovq20caxpmZyNOxLSKFgQ6QEMugcHTeSoLKI7ouZ0dX0FD49TbXYRcUIZq%2FWiVnw%2B7l5GeUFSBuwEhPdok36kxkFVjkuJn4B4DS%2BEKHulaiqKgPYTsjJEm5HP%2F%2B2g205Sr2n8lXFtyml3cYHpg38HqO6OkOV0xKP23W2aOVyAxz7skW3yrSf1uHiESn8vxPIWrsg0vo%2Fo6oCr3ZpKNkjtBcqwpM7EiCQODBeq9FrzZE4ZBdUVGm7%2FwMYGcljjoza%2BT3WnuoU%2Bz9%2FA9LCVggzfQAjBl%2FQi1H9%2B9sVIU%2BVxG63uSYIjzpEsbLbU7mImuUFDtBGDT0SREf5Ccq5tcMRDquwLqpb99qobrr3X4F3Z5bErwCjiiKrP3cqoG57E8Anj1MO6N08AGOqUBaO5Vtakqfq6wTxUFmy0k1z5bf1a8njkNDWbrHs1Sj5uqqT2ABdgNtL8MFyYJ0EH3GaRjQFj0%2BxIdbn17vbpY3Xh4G2%2FdrOfdRw%2FcQ1vy2m1%2FTRLtkNsPfbkGTOQPrmhlUbhwKmrqzRxyIWAD%2FoWBa5TpK0A%2B%2FyfhWb1JTDjag5n9kNurhH1QXfA1YLUTSYIItQNVMS%2FJJIGVHOYXXy4E0UMRwJUW&X-Amz-Signature=033836588e8b1473e7ed99a3fcd89d8cd4d09d2df517c12f2f230106fc39743d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSGW4IZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCID%2FUVF%2FI8mp37IS1eVtm33iTJIoaU9h1qSqTjZnH%2Fyi0AiAvZqE4j6L0VHMdeDgji9JNxOdzZTwaxyH9yz%2B3G9PsFiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FwmX0fTD0ArAf3fMKtwDelSgDCE7r5LiReZNlAXO8WYi%2F2xi%2F%2BHdMxkwTHhYplIgzPWt0DKDi%2BHiFz%2BcZ6btOqpXgnlCMS2R8FghC8TAO9H9E%2FSROsH0QjMJNSD03Bx6rXHRXdw2gvuVBS0PoCrV5cQhh5XnAtD39xGSZtYTeJtkvYEL1DevYKG6VuJr4grDM4%2B5XkfrBzHyrlKPdxGbjH%2BIY7ZDGljONhQ5F7aKaogMA6YTUYVtpN0qRjz3DAkwPJXV6HD%2FihqFClsZ%2FL3y4prSYAfbOqIMEcaAIVF8jCcsHU%2F%2B0C8C20N5WTDwH9QYgLQZ65qcCD288wJAmOGMx41v56imC3nImALpdsZDjIjhp9DK34566vkM55mXT7HQOUTPuvcLU2%2FabrSsK20eDF4uqlAdb4wDQVzRTpj3YekYvxXKVC5rV0AsJOXJzV8c4rAFRcJgqNOv50aSEwz3UBisBXO2MUV99uDAkd1N9FXs5lvf2Q9l8isiZxPPMIyXgmJVVC89OhcEmipkRnDhA4ZJBt7Fz9Ejlx%2FEXIQaApYjCUbCp%2B7ND83CIRf3awDsU%2BilG4tdgullyNpcc08Y0AyfEP3mLCN4L6Zrw1qN1hA1bTYCwycfEEKKwP7qPWW05zaEuH1BnZUUGhkwi47TwAY6pgFF%2B0d7%2F3tzmanhfAnbWAao1Kg0kr4pzRO5zd8c9W8JViXgw31kHFn51gO1e9XhZ6%2BkuDQZQ3f50Edfcf6zXqFtYxisFPxtxTP1baHPLPNAxcaxH2fDVaB2RhESSnbRfzeGhfDb2grZgQvh%2B%2F%2FsysFh%2BPyoTRJ99ajS9beT2TKYQX2ZiTg83v%2BN1qIgq4Y1L0MEyAFEoaXe6iFTMALljtZZos1sNPNx&X-Amz-Signature=86c8330d5439a9f99c416a5abde40cec43b6c6ba4fb801a56283280355bcd108&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMPHW2L%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T141151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQDYzsuBxnEQDkxidPPtYFUYg5LdMN3EM41mc8W4OwrKAgIgV6t9TWVqVPDktrikjOL26mEUJMaw%2FWhUPnnpFFKVVqEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaAmrcs9BT8K57deircA6bePJ1mskK8hNDe56Rv8yl5hCsEH7IDpDpq5u5k5ImKCj3Bh6u5pVxQ8vXNo5PfjFK%2B8Eu4ph9OnRjSKLyYVP7%2BKSWy8TmBV%2BTY8oXJZWF6tPIEuMV0Ue4INnxHwguMzSbQHmR%2ByRWMh%2Brfr3z2K3TUQglXOgNbP9oxhoPyHzOFfzZLFxJ%2FPfyuNQE94d%2BA%2BQ7AtXPbxkbJ%2BX%2FDPI04KyRQtQwOtUI9jsg2L6EhInaZ6dWDokttjud4U37QOh4sfqICeS214Y5JSWWS2apwMtk962ACzeGOIrg%2B3H7PXyt329lLgdbpF8UMZCzWwMVFAybrCC9Dn8%2BHuOaUOIVVmixB0Ic7QmhHIQMOpuohcbJjTuKw%2FyTftvk0sdHzez0HsfvtFpI2l40bNTnDJReKJZWREX0LfNZHeaUSaJRpf8rXoZASoH7BoM%2BrVSc0g3iWya0BxCXjtXim8Oc5fDcZHYJ77t3reAdPzRE4zscLaJpQFAVwEfJ06XMtLOr8gRxdWpwtfLmIuTFedsw4mNWcp7D4QOAerqfgCnNPoUQxGtTs%2Bm6IiKavkbYdEMAWFYceIF%2FynWFN3FHmGRwUSE1DmZSPQ3pYcvp1ajZ7FpbJmReI4lwpLM%2BnAO9wYuvcMJSO08AGOqUBP%2FQN8KWVeVmrosIRGZiz%2BHDE2I%2FYUiQq0x6%2BnMZpveXhBtMrtKOcbMo1oR95EGUpGI72%2ByjtfDVr8h%2Fw8JyLt39FQIT37zt6E3hwO0PNktzyZUDMW4R1wwJm5iVbGjapCPEafF9tWDu6%2FBFCdNwTqzQE6BhsYB%2BgrZ72whEwt4lCgbI6LHU5cwAyoaFlK8eF4e2vjd5bZGIuE21Z6uHHH%2BwY1wHD&X-Amz-Signature=e771471e4281a7036810d9671cbc927705eedea98bce7e1511493fdd8c0b2470&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

