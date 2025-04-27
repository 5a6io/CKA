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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XU5CAX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEy23pW1tytlYiOAaY%2Fw1PAVbt178sPyxIKPHByhLzf8AiEA0IebqhYzmnmp4h6io9IjAPCoezwVESV2TgNUQLGr2vcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMxYrjb9bx4Jus26tCrcA2F8MEEvCWbQBftYGMVjTltWc7RDaIxS%2FuYbpz45K3rSnXiJjJvVFbTmcUDkQrltIEJ4eIlFrK8YyyT9n69uXvz3Jy4JSr6CL%2F7dX6woDLkW9k0nt%2FqmNbzAJhm2TzsAM0P2QJysPEVNZ4MrJscEF8LRz7%2Bc%2BfE%2FdfvUlDcPz9E4hYACkx9jyfyUnRX0NvgE00cMGLPrASmJrIgn%2BntncFBrZ4ZSByJ08omNZd5PGMY29W1wBUsqj3omcKCioLBU9qL%2Fuxw3UqQHrlgBr%2F9%2BB0YJWwNjfeSf65qO3N7rOohJLYUEteF6ik%2FY7WNtSfMZ%2F135UsB9prBqc6YuB%2FO%2Bk3tes2LTQ8NNGaGS9NKIpgQcCfZTlc1ogTyzfbxHpaRMAEVmKiBQVdN50c%2BK%2FioZy2%2FarXOQaXQhcyehWMDGPVoV9O9S1SEblPlCN3j8ehPOOftjooWtxrBGEn7s6l6U5ug8rcyELqXCt%2BcNP4PgEP7x2mUAuqhvJLUGKzhSt7cEXy4VHw2TBFy8ShW6%2BDC0iQhGEOhK7MVHdHPLYqf6zJCFC3okNTWDAWNgdthp6gHW8F3ARVE9KCU2dwrsIh2YYApr06QiXV4gd6czGSaFoGAAbcwmn9rYkFlOJUG5MJGMuMAGOqUBOkH32%2FjkFwaK82z0KG8quA%2FaGbzGZHeDgD3EM3705VN%2B0NzN57Kncoj9zfUvgHF4ilj7oo0oYAFwS8D54OLTBQ6Lw6IC13IDwlPm8K1WZgMqhLipxXSwofxkwpA1ELEw5Lz%2FkGxwC964uUScSTFlCVqeCBv%2FU96G5Tjm3SxY2tLw3E4HEZENYc1XiYoqKlNqPID5KMJyPmpkqQvtuYcspQMgZ043&X-Amz-Signature=8886efee64402a1ba68d56282de40d373b6bc7474366df5c04ae7de7f2f7f67c&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBWZXKC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJ3IIvRJNAvLHXdyU0bGfFJhUcmvt61H%2BBzMbzwtEJQAiEA%2FoGl7eixs91QV6vqDVqRMoNHx78Bwq%2BfHF9TS81dGsUq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDBpr2Drcv6Ndy1evPSrcA1MYZQRXy4tQFL8gbgPta509byalSHrEAmJe8ITPd9K51Voe8oLkcUnA1wqpGjkcNilWl2rQaOeXxW25s1%2Fp1gD24FaIFLpPOvWbT8JmssegbUYS0jdooYdAiGg7OFzT6IAoj1niK2f%2BPJeWJXCAsnUlsZJIaYbRlrqQXwGFiuujYz0e3w0B0r7TS6i3I83VVe63NLUrrpilbyZXB4cGbkOSEcOifDvDE5KNowcby4%2F03lh0oTFCxGts8e1vUIJ1kHsGkOICvkDuX0jew23mUkVV8OYmUMA8cfpt9UeA%2Bih7NRVSrU%2BBpzqocO%2Ba2bCtYfUJ6%2BHeg9O1Tlwh9p54J2n1ebZXLw%2FIP%2BSR9pHPxEgWdiX4t%2Bqt%2FwjMJLT7azkUhlCGdNN47tJMBgG1E4JonP5ENfkFwU5YPWP1ZArv4sTXjG7BZ1fR1ZI93fRtHwHh3oobkpd%2Br0voHb1rLoQuilh1hVYWCNTJ%2FTHKsoBL%2FD1ubqmKWKkbmEPGJC%2FRHVIPlRlRaQaSR9eTZa5bbc8SV4trrqUbJmpPJyjwhsgD%2Bw%2FciygmH4d7vqCV86IHkBNNB25O%2BOyhXEoPK08daOCE0yJWnJEm1npAe8tpaUyQUQEGsOLGAlD2RsYM9z55MIaMuMAGOqUBZEEBvmf5XZyJvsMV7r9ckJlocThMpJ3ja4DRvmj%2FPTJ9m88%2FH2%2Bxjy0VJgh4qKOviPyfgrAsrkZ3iC3bAH18KbyqXyB%2BDqUOQrK6%2F4rAQ4xtCUSTx7fnPuuDGIIjU90X%2Btm5C0W67s12jxMoX73T9MZYpng49zuhMDFXRG4bL2X0BZwDWolaPo83zPVvlbflrSZxGuDW4siwWkM%2FRkFef%2FWunjU1&X-Amz-Signature=fd24cacbe0c4f9dbb686fd3ce5f34464dd219b68029ea50d66072e491eb5bd39&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJG3RUK7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpHKi5dp00xvJGnyDiQ1zWUP5cMgl4Z8zgxZGIwEwMegIhAIcyI4VSmQY40jkCNZR%2BTXxg9Ikwkh%2BVluo13%2BeinAKZKv8DCF8QABoMNjM3NDIzMTgzODA1IgwV8Ig5AyVgUD640z8q3AMZa9SdtrfSX7JdCcQ7bmwSYUNh3j7gmhIoJ98zHuUmtNbZcERIMVOtVc4h9MoACljvq2T7NuQ%2FJFj1omDLqr9xCWpFyqJeOOwg53AhiGWftp2EFcF%2BwIsQ1KNp6mfFbBWsBumcsQuCUx8pKdQXnx2%2BAMHRwRZA4Yag7KqDVoTuEhcQ%2BJOOKKu1NXC6WDU%2B84B%2Bnbd3YwBp14pLf9cxiV9B5Q%2FJgwfzkATwXgRPAM5Xnw1WDKTpGEI8AaMQdH8Dy7vgCFSuXhbeyb5p0KtWl%2FwntjxBKT5cpU4XqBhzBuCztI6eQylwiNx4g9b2KFmRRqXEb0wPcIybZwei67Cxq9PDiEvzCDq1BIfJ%2B%2BCJehnR%2Fhu5E%2BssxournMWSuZvTvzl653MVH74ggRL3WGgh42P4gxgDyozPmhUnuCjPlP%2FyjpIabSgf8JX84znNWv8r56TOVnr8JAIX6vbBbJwdI3%2BuZMyiwxVl8akn1tn0OVbBBOGmwZ%2BctuJxv6QDHl6cFXma%2FSrX%2FPTo8%2Br1F0eDhLaw05RSYlab3oL6qEXsAwe9YL4zFqdWcHRDor1qTz3zytPWlEvgJ20BInjNNxEwuHEWy1CWy0U%2B%2BNQvEcwb%2Fc2GRCc0cs8krV%2B71vsl0jCn6rjABjqkATYVf6mcsVmQUkpVZhLh%2BGMKK8h4aut6dNaS03DWzq%2B25lMbVpgcyVO75cV8yEzKViwkZlft4AzZ01PPC8V0tPR%2BJU8556t2QUyEfGSQ0hu1MKbcKLyzU6fBJK7DwuT%2B30plWtCFi%2B5Oa9v5mhYC6%2BY9Li%2BDZQzDkmPSAURtM1stsODbCDO07IpO%2FFB2MCR%2BRVNGwb0TtDQ2rKbbaxQjFFfrPLDa&X-Amz-Signature=8e2bd103aca9ea1ae4aded318ef3a24410b63bfa73441922cf29f5d8fc484828&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RMBSIF%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFdAsp8P5raEjAj0p0Jl2gVNrK9I%2FIRZK0ExjDfZpJFgIgG7qBvMG7TD9NhBF5swc3WdBY%2BT%2F3VdgQWW4MGNRMlSsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKBx8xZps2iSEX8KzircA9321nIVvDoXmnfjPZKkRuorZqfW7tVlMvnfc%2F3O9rnyuCJbIkrQqhm%2B2sVw9%2Fa0gFoiqNZK8WJBsp8%2FI6TMe1oYrggLYuCBkFgWizN5idrhaX7%2B5MJ9xPNkjhZG7ULsFCCgRnv2VlFfLzoYAPWSBKleHpaH7ppGzyR%2BMvISLoYozeUZ0dawnqmpvHpSNAYBs6Ihl8ECjY9LVRFOjv9JmYkRMi3WkbYf6%2Fi7Qfrrge%2Fe3QvKsSYdaL7YGnkSojIeKRf%2FjDcmm4ikP0FPr9pSQENqWtBm9Dbwg1P8kkYHXswN1KxbF3zyZc7KAy05EfiY7V08CLbPMy7ZNHPVJLNXEzSDnJZ336ZOoxHE4SHiyZu%2FNEazixxPO%2Bgj7JQ7wBRQ4UtK0ImhT96hcLUpnZPineB5S8TPy%2Bev9LWXIlo%2B3aMNV7Qp%2FWIFtPtIsjYvusUt%2BOte8d5wF%2FTHwpVB7RtnAwzGd3nkIy4jhCc4vPkdCap3FJWiC6%2FVteKFxDha%2FZERYD0%2BxyTWTzjCFoIKpxmSHq56O9nKyCEemYlEMthbyATezzNSXskliDptY8PNj9EV1ww5y5MpZNyks7ko4caqNgl2o0Oy53z6YyG2a1SsjkSZUd39oPUeWyUx%2FXcFMJOMuMAGOqUBQNbrC%2Fohyq3zYDgO2I8WBNYfSDTqBio%2FSG4viCzuZw8WjghC9iEAlcxFdjIhwkVifEPordPsjLKC4gSYK7vLHi0BNucOyrZ84Cbr%2BJQ4y7AeqqNvGsTQyHOVCCTCMfswCtZEu3IDaNhZkuMK4s7j0pQLaUGgvXraMpLJuI%2B%2B%2BjYNXaodb1mWx5uK7A4YEL6oBlxMqppwl891U%2FsgfASOLv5sfJ3x&X-Amz-Signature=9b46ab6462758d74d3ac7a743f43373288a44f4bd7598f8d37f4bee57bcb44b2&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R42CKZ2%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7eljICqKukcihb0rV8eQ3trQ7yMKPHWtoOk9R6ARQyAiBVEa3xPaCSK2Oib5MBZm1oJc1L7ees8yngveN2uQ2qyyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMAZxqwVX1K4tYcfXCKtwDs69MX49QcUqg6TqQNuX8IPP13HAZmfD9zTnOhHtKLWXBY0KW566In%2FCgypgQkxrAkzHHxqBCNv8h5cHcmSzdVsA8Xu2p%2F%2BvSlrvSdeDSh7K%2BFLGBfY3wmUL0uqx7kL9MPqGRt66bfiOrn2a9as1HSeuNCKrxtsLI2CaHIrK15Afs3cV6sATa0JFI78W9k%2F9DlM43j8R5sN79gUlq6cB27VoN7n2Jd0PGjiipPsbSdWPBEbqUkSdRpIjWzNdZXsVL3cJpfczk4%2Byl9699fP6XAL0jCBo3PlV317CIqau2rUKJzxC1aUiSYaraaU%2B%2BbgMTM90lFvUKA074oAQTAGHBoqpqVQKwOehk1P2MNWFzbcei9dfvfp9VhRT0gzEZAu%2F2zGmdxHk0QMRDXE2XgwHdB2wMV2Hf80Q9luaFQpEuA6jDdYceewkcJKlqLPM%2Fye55HsID%2BDBtbZH167w7DOB2zrILw2fz3gGniOl4t8BcpVZtT%2FLT1aYxgOV0sbx5Uk%2FS%2BjgVBZm%2BgxDR261Nn4YHvy4kcFmYxdhTY7jkLKi61ALbnNRw0LkmUYnFl%2Fkb73%2B83PrGHu7X6sylhV6G4XfKK3%2FwEzTwUM9JQap2%2BoN40Scq%2Feb%2FwQhj8x5tUG4wyIy4wAY6pgE8JaIqxhGiVoeQRfWUPkvBWTsN48YQWKt3TJNtaD2auP60Edtk1DxbXEpy7Ut0ooiPL2%2Bdj2sbfg2ygyjFOmXkhN60sg%2BHaRwDICpXH9O%2BRFUsr3DtOgjxYUXCvvwq2nLafFD0%2FHGugw6VveiY8wCbuUjfRiHcaa3%2FIyJvdSAXB01QdmGJgqyuh%2F0c1CFQenr7T%2B8Bvp%2Bj%2FH4IpG%2FKBXFONXjtk1j%2B&X-Amz-Signature=b7a09dc0ac968ce9407197507d1ee8973363c47b5ae3d121e03e25c2f05be152&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V22QBQP6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxhC3nBJlj6SGvESZ12Uosuukpv8IDMkUFSxlCaio%2BmAIgGh7%2BF82%2FWoGXZzkdfcBCMo7jJKXMOosYaXdL7vTWvekq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDFDNK2WJW0ICEBctPyrcA%2BekVDYMxqFAcvGn0onjAWj%2F7KfjlHUJvwPuu5uILxPyUOwHLNgzZOp4S5afCj5KviugGGLWnCmBIuEeEJzfJ4UF4iC4QORMaAjQ9q%2BzRCKp5GmLVpzachwgfoSkaXDrxIZecMi%2FYsW5%2BLq4UBos%2BP0dBKAKDwG3NoJS7OgtSjXx2x1b8T1rT2rJ%2B4ZAa3%2FUPGbxxF1eYt01OJTr%2BIkVevRM8%2BG9o%2BijqLe%2F8oKnf92OfbRE2a0IpPtQs36S6jJ09NrkXnADKndmeP%2Bi7IpWlQhdJG1pgOZowN7KhUxrjzoXNC6wPuoP1drSdw8qOACon8lEBKus2bYFgySL2IVUUyFOGZ9QWkwd%2BHG2WlIupzqBb4oADKij7udKyiXJzrraVjvy72Ut%2FEUMGmIJfIqWZbB%2Fsj3dhoZfoRP%2BNrnLyPjqvQspSnyM1Yazq%2B%2BIul63fGDGNIiO8m8RZtmfjYzlpWxNNkG1Sq1EGjw7J9pDs%2BigKB5Eu8YK1Li4zVW49%2FSQ6%2BH67LAsZjy%2By68IQnlfgs8p4zuRUF4gyIxqYa4Ivk2i5JFTy8ym3lgn0T%2B4uDuQ1U012jsbJEnMUX09n7RBLW5KtILnbch6aN4DnTVbb3OSiiOgtQLwAEaZXe3%2BMPmLuMAGOqUBjvMXhPtXzdn7JTPv36jcSiv%2Bw0JgI8BgMp6wxlTfelKBARElGha5NW2ecp5cVbXjK99ZjBkS0tBzLn%2FON3Fl6sLIu%2FwY5y5mMvHxe8h7R7ju%2FXnWU9IZeAYZIkL%2FQFX4VPpt0emOcDg%2BtUAIQlZdaZlrZE3i%2FQESak9%2FRJn5SBaq8uhZAH%2FepikkxYkjFVr24tnQO3jiy07sGw6kJH2XWoDhIbdy&X-Amz-Signature=0e04215f81a4b54544eae7db46d2f062f628ecfa9f543e1060eb51f1440fade0&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCZ3J52D%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHurUSvuvCND886K8ukfqkyh24Aavu5kHfFDD0nbv1EbAiAVFAjptCVYpBoW%2BDwVXojLx5oMbyvIj%2BitpCemAviHKSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMn%2F8hxbPv9QK3VhhMKtwD44vYX7XxNpQVRqiWE5kdjI6vc2bJnlWExU8aVw8Hg2PAyUiEBeTsZh5Jsk%2FCpjj%2Bg%2FcvaNjFP48apOrEBcynJaGSIkxzafioWvqhruUxy0ZOc1x%2FhajgqiFNDmt%2BZ71Grs%2BIcWPTLURb9SOy2N6oJak08TBDHVm9F8cFFJliufFo2FAdGLxtTyIWLs92%2BTHQc%2B%2F3TXcOqBbkKbWmaOQs49HHbRnbUdZlxIbYfMJ5BrJh90FIhEMe0DZEME83itSi%2B86uqIVay3bm2MRlCI9XfM24Dv8k%2Bm1Iw4aFdKeRc0WqrA%2FAK6PllXNJ9ogT6enwv08FhKg3svz1qfIl7a0LWJk6bzZaS085Z%2FBB4qRdBP4O2hSEwKi%2F5L4QJQ%2FX346x%2B0UESdkTI2UsO6GENHTkWi4bliFI2xWIQPWcwa45%2FI%2F%2FNOuf9j2WR84sF4WGDk4TUEA%2FWgYkVApEcQbMJKqgdScFB5AeyOAImC7scIvxVdjlkHBnPNsz6M0vMCi119OjdO%2FnvfWQFwcAFhnuqD5iDeeQxgaHiP7cGGlh2XsXBO9LOaBeALGdBtU3Oop4YUZEu2hMzvVBtT950i2ja06XJFUliYOfVoQMkR%2F8KcJYj%2B4M0Qhn3O%2B7jC6anSowrIy4wAY6pgEjjPjKbwUCXSiPT%2FhpjaopR0LyPbVMwTjCsMMXKWyWNnmBQzRhQQFmeKqchTReFppjAm6K1%2B1%2Beaxkt3qgFwOxzJ0aq6AH%2BRzjksAjFbelY%2BGI7c%2B%2BdL3QVq%2BTDhD%2FOYjbw%2BWdst%2B2Kv5DEYy%2BZZJ8QtqnIKPd%2FM%2FctTFE9BrvLMz2anoIDNFV%2F%2FXFmri%2BtQXJgPQf38Aa6TAOr8nyc%2FrlZSHcC5vi&X-Amz-Signature=8e467ac3fd398da89c118e93b7cdce8b0cb246fdf9172e8225a5f870189ef19e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PDRLII%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaWG7NVyIqm%2BFmMfbaFGFNjprfcffDARLCDwDxXOgfuAiEA1bssssc8Av6LfiO%2F8%2FyjOoPoTpuya3LobECo1G%2BAQyoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOUTFN8TfkTKGmbEAircA%2Bywz8QUdOGPGkQSpYjfLIsrJkxgnWuJa67IIiKY69EJ%2B%2BeBZeYZ%2F9b6Sofd63%2F4w3hcXBB7V7U5Bh7YmU5P19r3YFdzkSIDMq%2BYiklktyItyRyNX%2Fi9PcahhQtGS9zil1AYAM4uQZjoobHCwtnObRAcpa6l5BzmgZHwV%2BHMWP5rCFsoSgAgQbT7ngn3Vsy1T7jDcKhLvXdljRo6QC1Mgg7EviyM0fkr4zrAam8AY7j109ynN9Jnd%2BTM0cwOkVE9Z6Z3gN8uvGb0yqkflRMnnBwucJzF8zg2YGcp5G%2Fr33PMBND4blWqUcpYu0MK59LplPQN9rP%2Ba0CajezMHnmJD4Mtp5ePtxlOl0JbPrhOPJ3ZoswhcGAZjqY%2FcxMXjefIfuIge90Qxon0qWoLWp78Bi6iGs7PIpZxCuQdiaUK8tcQhAf0Kfrr1mxvWGDY8gUi3ulb7jzZkId17umgCuq7%2FPEnrm4T9q0m7rOv68%2BGTZed0mHSlT82DM8%2BQWOjSKFOIn%2FhtypLxfbPeP29MdB8ed%2BFVSj0zxWywzKhqnmImj8HFW9EpbYFiuY1ySZO18iotknwQ%2BFtcM8ow4XotQmW%2Fvcr5tJviPpnmimrL8ekAVJcy3E78jAhYmUpHugUMP2LuMAGOqUByjOIkpWi%2BXIpelEpRK8MwNPrdR9DZBNckxH6GrqQUXknWMnobue8bZzP%2Fx6BLD0%2B31NcMb7nKXaNH2YikhX66I%2BEMJQoRy9UgVql6Vma%2BtqAb85jNgvgzbgIuVIiN8yJbzorsUkbjVF91NZikLhSLvXRC8m%2FfS5Y5v3LZFzU053Fawj20GKbfTNUGs54uA4Vs99NOko0KDh4pFgLve4P26I9xozf&X-Amz-Signature=c38e49e4057a56ff65a2be46d6eb5d3ef1ff6fd83206a9b1d56d353a8bae7b74&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QBEZODC%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTXqVpIdS8Q946kWQiwtvLWZYYa61DX6MQFKA0HMtvsAiEA2A1ckC1zTUmjqBlRbTlthBQFzHLo9JPgl23f%2BpXJ03Yq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK%2F%2BFEB0ycWfopP8ESrcA4tZpZ29EBrAkQbNiz275uXFhr9wXfEkioKvqLXM8TbMrEok6l82hWc%2FPLCltTAQU%2FLm0E7K56950hWFqPovPq5Dv5NUSsNeSr%2BeTzYrH%2FymZvZRxz0JdzYen8%2FURQLejg%2BAttwHLTYM%2B2xWtPyVclJ1bnaFCFWA8lovEQnMnN5LgnYx7mpjUdpT8Un45zNoQ1R8KgM05DrQha9GMgCJS3WtUO6QnzHIiAp7QC%2Fh3M6rFd%2Fc%2Ffz2KMA6f7u0SkNHQAX72CN06TcF936kS0Bjj7dp%2BweTsXpdO38g%2BH4mP5Pkl9URMu%2FPxunVHHTz4ytGBwxj73b35LS6DfbPnpt5cPaHcsMOYewfha2bJf5h9t%2FgXB%2F82aOvBXbjflm%2BCYvHahjfHkNynUmMhTkOa0vVs31q8AHpKxr0brFjk67s8M%2FwPlze61qIMvMCMt4MaimTaWxq3L2AMqCEkG2eVbNCn4YJVR%2Ft3hVR2IBAFly2f9ClLLdlUirQOokypbcKYiy7n61Y%2BK5X7XEMS2GyPOTRejbAFOkDmhHDDC1170Ft7n%2FOXM4LlU20GgOuGauHQt8JKK5vuFn6AhUSk9RBU1aOs3Wr7GSabCvrhaQWurWU9JEpSJsKO7dvvRRnuPqFMP%2BLuMAGOqUBEl5zZQRod3cJbFjXvYd7tNIwA1W%2FmnW%2BNXie6%2BLoE12R9eXuj%2FNQzWTKwhrf%2FeRdt%2FMh4UNXLMmUaMbv4cKK4A4hoLtBS2DF3JBSInax7L2l3yapDe4TNgAufkjeD2zRDEdanqyREhX9fC9Q7EHVdxOhDrafDcXx0VYQM24JhYI89YiE8tDAxEE5K63rIenH9WOWnwY5DFZs23FBQGEyZQuYdYvO&X-Amz-Signature=4c74e56e7ccab84d31bba349c64220679b1b6b7de971321263413dedc44942f6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

