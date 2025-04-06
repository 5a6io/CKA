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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAIGFTAI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVFwgD02FIwaMN36oFa9LNFTh38lsgx0i62ayCWcftKgIgMqpc4wzgX1Ikwb4BwCPWsuvwpB4BHoUEN0QTasK2i3gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGYBsAQP0DgIGiUrUircA96ZxJeli6Yc2%2ByS6NzBpgkcSLK%2FMSuU2%2BA0sSiFht5rNcF6tqhq5963YqSn%2FOS0oRpbWR4OJ0qucLevVVU3n1W45lzQI7kvgI8yt9isvE3wLiiMF51tyn30SwIGoM0JWLW%2F0EQn9hf9QaiQAct45S5J4RGs02n09179TdZnPzgOpk3ZgY7tUtNzMCdTvTIDk2ordJshyGocUNOSngm15eZzuMASoITPvXsoNGrrGWlqvONpXYkDdpvb%2B9jXb2AISkKLnYWNu3hDiB1GFXvGSDUaXOFHQQP16TZlzyM4IiQV6qQqGY0cvCaUnGAYLzOoZbRgr0BKR6pNr%2B2re%2BNoyrcqfXbFKh6tIetIVbDrKLDnoX7sv1GtoT2jKLFtIWOTeG9Wu57F%2Bqhe9RR6L1PFCYAmNkKM1jRGwP9m32WJmSzMJVVQvTPLaMTYzgxoJAWpe3EYs8VSUUoBK%2BYuGkCcQ%2FBMMGUjLSeR%2B5YSfVzAzZUKicVUKI4vjpG8ZF3d%2BVSC9RTMgEbFM3rZveRh01qgheqz8p0Lr3eAGu3b5DI2tJaqZPjVdJutkUthancqkTY0duWuBTrLRIbqfxw0w0zU0eJBr0eVuEXVVq0EUH2zY7JKk9F3joPNJSl4Z%2FUzMIrOyb8GOqUB9WKETUef8ikKFL49Gf%2BoYxO8rdCuoMrn7uauBJVQK%2FxihRqfcFsPQH33IDGOMk3n057pHSig707hZLzVZ9syWEhYhscDGS%2BQVqP5jlTkDQptMx0iy5bCi%2F%2BLkPxIYlOn5KWju%2FVXFvBWvagJ405TNl%2FL0CgYuhK1fO%2FMaRxoBCb5ImHN2UvBHPzXh%2F%2B%2F8JWjEXxf8VfmjUEAkWbF2BusHGI7TGSD&X-Amz-Signature=88390bc2a1e6d701e7adde56d1aa0dd7379e4578d3eb9e86541d9397b24aa619&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XGGFSO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxWZitdafh4zdq3kn8fRQNM2nQuWIhlZeiyyZEfLP%2FvAiBew6t3zA4KBRgWA4Z98V0jXz3Vx2QkewTMpoctDbpQ%2Bir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMHffbio8rVXMkDEIBKtwDYeXgpoBvi4ivE5qcQ%2FvDr0aoo4x7rBabEkmdznSdD4Iya%2FJQb56SM6eLt0w6oca2n54n1iBwqAMTf20q3JXNO3LFlJlwC0iSgfuuO88petvhhqBYVNUQTMnKt9xR7R6H%2FvZysdgrvy%2BUbWh%2B%2FjvSyGbE%2FeBh35uxjIeD8kFN3aOu0FgZChITDSzzqyB4s0HyM6FRqgZV07P7GtrpbEXVbCbuUdJk40I2yMwRlI4iZvkpYn2tG%2B9SYtJPvPGVffIC54WvDletIu1HDuRNxAhDxOnb1l%2B8BR%2BpUqXYFVDmUwt9kBHdGnoYLJuY6fLuM7jYZpacQKj0ZfjROEwr8zjzZk%2BocJtz8iSiVbnl%2BmKz5AXLeR7QNslYeX1cO3%2FzDQrjwQI1DwwVh50lC9aWXR3TDz%2B2e3R9RvoSeAz%2F7J965jgryGrHK4fnGv9PQq0CTsLY1ETEDlgwPjIP6dOnUkhUbT4zbXY7dPMuN03Y%2BTqlgGcVbk6bQQWNRYksdPCm3gw4pa8rSvntkM2yLD0klDw%2FVcFunwSrVmmA69gPy1cPl3%2F7fUbFAxOC6PoDpHW7bBSJ8wzNx5n8ZhuX8z5TiI2CpgDMIMz4pgyVnHohns6D0GjzDI0SsAln0dxfK28wt%2F7IvwY6pgGBBZD3%2FWdrMC2V72OshJsUtN3fGnnK%2Fxy7KEkqxQtX0uyKHoR%2FL%2FU49soSGejah%2BDOvNUX7%2Bi7zt3bfbXY9uDpZD2le%2BADqJqeqe6E2x74CSYjmoGfpmtXfRL13sre2RpECIsilCCdDTALPM5WYyNieoP3DU3S2X4VZNJjFpLUQPLQ5BjOQ29X%2B55og%2BPOUguNKarwmUJ7pVHq%2FGDBqsbLE8HHwy38&X-Amz-Signature=7c7737bf0c05cf9e1b32a73eb09a4e13377807da4c9f1627535cb0a82720fafc&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMXVRVOC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BIpNST%2FY%2BtZbtOrRe7WKpMLXquaX8n18ujuaOHV7I0AiEAm3YUwuFifFp7NyjLs%2F0N%2BaZdNRwzAkiNLBXXAEVteKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHVGgEH3Wlc%2F4iLUySrcA6KqNvIxlyxi0sFPVO0A%2ByHGbTNJdjGH3BTpyS2uYAJFHTPwMu%2BqSguW3P3ZOrJxaDHBphGTO97fY5EFFRAfdGSyAihGrYCY3wu0dvVePyQSo1dOvtueL1brHTtcEfl40OMlRThYVqLm8B2j1hvqM9Y%2FCufxpsymAqXw7fT1tZ4777VO3C1FE8JNnW%2BcjWAnqCKxSCh9WWA%2BPlv7S20KGJoSePLIQ8QBXLFhMXFBfLlZZxopD6t9DzxO3h67uai291NxzsG1hQtNgTOjOQQJrfEDcccbvc63zna7i4BDFnfBPpVIAjo%2BCdGVcIkjXvgv3FCRchDxPQaRObZMET4753s5aX1w%2BZJDuKt19UdRNjqhrFWH241xU7eqO%2BMdqKl1T8P0kX1cexosQzdtk6u3%2Fg6H2QVjo%2F4xUi35KtglDtKHCXUXDJo5CiykA%2BhbHaa24%2FaHVhntFsoL%2BuzcLEFGWWt5dACJQZYnzG3QmPfuKvGgZzRhRXq0F8Eis8V4yKjCZ9q06uuGuVPuUjGYlY6%2BYku0t6GwwdAUZ0N5XdFNYxw9kXEwmZfLNQ0hQceVVLfVGhFgPUbY2micyk9QsGBu5j5OnlyKjj44N72Vek%2FJcYggQ%2F8UniDm9ad03dBoMMD%2ByL8GOqUBBL%2BOyHeFjsFY0%2FPNi5h1Tv%2F3HoN5VVc9a3n%2FaGuZfMIXAMM0wN8m3Znw2l2aXxy71eZaHxyqtVPrbbmQ4pe1qi%2FiFCkpMxlgIPTKOtfb33fS2Pw0hx%2FG4MjCDB4yHOeyP18cKEcYE4tOuaObxOxySpMoODsUyUqTiS1a3vKdp6yTjrb2T0S%2B9fQ3qLAdAM15PPOskYWQCg8XXkWIHAqaDMNwzm%2F6&X-Amz-Signature=29aa365e31a0d6ed72c77d996ab8720216dc5a1596c3edfb0a8a174538de5bf0&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QL72NJK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPLiItffKG2Rpn7ftYWydwpekRL%2Bs4Ys4V427olLKloAiEAubVCyuHc%2Bnrz8VJWOiuHXhmP6sI1Fpv6c1eKslzQ4rgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDAzvNXxAslL0bTRwBCrcAxdNAlVIerr2DxFtHiiJ5Wf567IYMn%2BI5FEhD77lYPFS5ec%2FCz1L1ZOA788DiRhuPMHIfBESWrYb7CMeeLJ23NSrEQCGm%2FWWnzDK7HtPziaYcdUCIFuyEM1BQdDlq1qc5CEqdwbxxuyILw7Gu%2FFjvmYRJDryqBQa5RFt3g6CAS8W1NSpDKJlshzIYDdv3dD8uRfkn%2FhmkNhhXtQAt%2BRtfbXt9XFNVG3A6v28WLWske51alHrsbD20i2k7RTKym09GQE5lYdNGxZWGE2jfpniA9LCnF7b%2BiD7sOedCENZjhYM%2FLwLE79xPQG6bPHjErwmYY3JH%2BhWi%2FPqrM%2FDYYsF2p8fk0ZPR%2BsFl3EaKDAtOUkJDg%2BwFoxbH0O7VtpRvrAdCwEZXZYj%2BUUKcX21ns0eSxEROJOur1gyZxAB7QzHy8IeVA7sdCl8N6ClMybce9Lr3tEcEyDI4Q03d8%2FYcCuaQUM1QrXbTV7PEAnp6tIJT5QZLT1GHmaT9i4bVGueEZGmje0%2Bc3CqMBNVYOO4V%2FVIz6LUFLXGA0a%2FlAWqqSrbkcK12%2Bcp7zQ5IH0OZF3%2F63Z6VzkH%2FPhDeFuE1fsJLrDM9hkQQvVzLWcfnEHfKPf04PjnhOr4QUp6axn39AlQMOKzyb8GOqUBcZl52WvOIhkfpU7%2FopyItl7Ir2kbj8EcY71vgdzUDrWH4yd5vOTw2CVxAZoWmc4WWMDMtdZZbbWzCaIsFRfMl21Rthog9lp8qP0FMQmr5deDI9s%2B57bUIcjcyIl5XEpDIrXyI7dNNk3JZoPBgTNtv%2BWCnatPPK3Zz1MYlohBf5ORkG9Kb%2BTzVCmG70tf8QwLyVa%2BdmxnUMLjJB9coKeXDk2FzrAf&X-Amz-Signature=8c6de8b39829a13ca65dfb227853f0f1292c9eb41b08eee25cd4110534650cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3I2T7R2%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlxSiZTqLHkePB3FzPUAueUa3naRK7C6D4KSLw8FId2AiAzaA6UU17bu6vt4evsR5J2MN%2BWviMlW1B0M1LLxPMKoCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMf2SZ4WJSX55aHTogKtwDgjwCz2LPhQwVlJc7N9CyR8V3XgO4xSLvNYVZRq35y9gHo%2BJtDYgo2e3Mydh2Ih929bzQrkJ7JUvx%2FAWzLh7GZG2tsN2mSOAx7QEp0Tmc4jCMn8Ty%2Ff6DHihYUPxkveQ%2F%2BKfC7WZwgxDf8M57TMWp6UMVaqTItZfBqyFrGcsWMoUUqNfNoS6KBj85NPL%2BYuIKGT1ftSe7FR2J53KJX7zyJIK7DE8naqYF4ivnsuiYhnNdZ2zQDc21F9NgOx4ZresrAIx9mpjABG%2F8t%2Bby0tGr%2FFPtgBHwdezhS%2Fo9gbrZJQQr%2FHH7eccFZN5pobHvgO8iDn4uQYY1JCBPs3mjeUo7HQkFCnNSz6UFSnXEhB%2BpjzSN4%2BcErq7VNxzaRSkJZCEXIvfykiVZBKlHYPifVv1L%2B7CB5OizZ%2FDSox0F03NkRVy5FKWVKESTIygEwxENOSp%2FQ9A1kjlM9%2BsDTrg3bdOSPYLAwN7nMZOubMAv%2BlENdWzp9vc02cfe2799GAvTu5kxTfyJwCtoEo7rAVhlH93p%2BFfEIPlWO25B1M7ZFiNUEaO%2FOz6buKU%2BUQk95krhX8jwM55X%2BfxT7siR%2Fg6EZOAKE6vl%2F89gTPqwLS%2FzYQIbO%2BSRC7qpQ6vbAM%2FBegAwt%2F7IvwY6pgFPqkeaHbW6bs%2BwdJ6nCCqBGGhmsLlUOXcP0zdSk6ax0XyqNoTxuNwL5pWI3bQXgv3YgAoMQ3YzzlA%2Fs432ruIwp83lov%2F%2FAjMu9Pg1dFu2H%2Bi37Or0TA%2FzQXr5YSslvv3trnJ0HYqhUHCQhepCuJONDv0t1s%2FmeSSklf%2BPWBKtkUZ7YGsyKyaNT8rdOLsXYyRNsZb1c9JNt8BJ4vYNNL%2BlFLf%2FEpZh&X-Amz-Signature=eddb4da8808b821b5def9edbfc57b7bc3e40bc52f9a46e4846c0d26ded5bda33&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6XLSKBK%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FiMlCmSw10SEX53%2F7zeuu%2BxL0a5lG4N%2BbUBpmfEcdzgIgFXrUcA82wOqmkFP2IkzyEM8js9y%2BhAe2AxcSwiQNv80q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMnJ8Yw7QBnm9ZpVySrcA2I5xGFZYZc2s3oDvGH4oYM%2Fs6a6O8zoTxWbj%2B1bhy9UjwsBAudWeNoG8XHZfMzI8igXRTMqnvXnvqZ8A0AitGLTaMYtGOcuHo%2B607YHFpDdNVBDkkTilfQ1otmbYW7q3SkLNdKPZwzVQVtfimLZp9avApNjebpj9VA4h9LjLESHVsxpaUT5uj0rIJuEffhXL1YLFb3SlOpQiR11MIDaZUgsNnL2MLaklkiFcAHZcFIihZPAFxizPZLvJgJJy%2FSfHOnj8On25uuNLXqRZgshZKIYGfuQEfe9mwN%2BLDuVx7%2BLHvdMWNn1l8KdYcoEqh%2Fqn8x1ZxVkC%2BHpV4rwaX%2BK4HdRKfneYcuyUYNOcb%2Fc6xnpu9fRuD1c4k6rGNM3sLb3uqRox%2Fo6Cw1dglmWDmq1TILU9XUmWNVS3Ho8B%2FhqXLncz8Gp3cm6UbQg96cdH1dByuGQX5mFrvT4LzKuoJF4NTmzc%2Fybkz%2BZExDZVq%2BtCzgZNZhppSobjyYCeXfXvvLbhKnK7z%2BYvo2bc0IOkTvN%2FqD8KIC47%2FFrv23eCUGser%2Bwfpk%2FYTs9nc1H4VRzDCWLukaTOXpxIbTY%2Flu4U3pV22NpAZEAhJjhkEypJVAC%2FPuXh9f8RkPNn%2Bwf9oeaMOb%2FyL8GOqUBRaBEcDHbUfngFqOdmu4TPk0tpCJdqEAHfvnIVAMFzxdhEbFgTIZtiBlvgXrMwEJQ%2Fvoet3XXMbe52oAOr4guuU3yx0GOa0PwwKvTUMCVqxdcXqmE3KkXh%2BhzeFUj7lB8q%2FLUR277X8V3AWjlEPlU6tOZA09%2Fs1GkVlUbHbMTFvTIjthGH2so7SOo7g3Kj4nOeHbdLF%2B2P38SeduTGylwPxOOtOW5&X-Amz-Signature=49cb24ba4999b029887815d31c6abc3a88b973db53c5903fb1de388709e39fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQ6UTGZ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQQJEptmdEp6SAznG%2Fea4fBPbqu6zSik1k%2FGm%2BqbsZsAiBGCAKmNYfCoodKsIHDXGKRx%2FxfdeyxZSBxsiasw%2FCqTyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMYt%2FSbp6vrH3IofbyKtwDs8EDLF%2FIDgkRUySxg95G%2FWoMA9tmFdIuIV5yxZfF4e%2F7pVwQPnm1ntiMkcIRLv5OXbtN6OVMtVjg%2BQ5gsXpHyjBKxfBB%2Fj7%2BT%2BAHu8J0%2FTwRD46bdcTxkenvHQcvSCm1SrYNbPXNZQCi8i42jxcJuMg8m4Yy9ls%2F2byjNM1GmxV7%2BBf0j3XREGcDJzaDF08bt9pe%2Ftbv8Dso%2FTKzBEbJ9DpapGJRcdQHE6O7eR%2FThXFBCJTiGiPxeBV%2FqhrdUjIi05%2Bbw8Be9yrzaaf1536QrDQRwvnKdEOQSwkKW9BouB1ITT4iM7kIMK0qQ0pBVDOhnYXRmh%2Bu%2F4aOSq8jkNnagYkByeG0MKgJcEOaBDH%2Fkr%2B36WaliCRO4mWlIvZuiOD9czlD36B047Ve1ky2ZrAF5vkP1HcXpHzXXx3Km2x3aNspwln1piTAkjvSf9e%2FLMz1MKqVWznbTX87NAxg%2F53vTefXJAmyIVECyYPZqjeBqeIfgh%2FutzVZiXqngxvfGDCP%2FRSJlKfx%2BxsIbO2%2BCx%2FbYW%2B36B3%2F%2BmF%2BmtUpNGDEvvssQwMm5gdWO2JimEpAOxMIA2BpmBo97Vw28buFVcEDuM%2Bw8VAh5%2BRclsVxnZq4E7ojXtAm4w5HumxYS9gw%2Bv7IvwY6pgGYGlddo1ZXZS8Agty0Abz6zDtJ59Pjl60Xf56s3Cn5foKQ48R2sMQJaIU1toJ8neAgxNFSSezzneAh5XV2bFpl22KUy7YIfel4RTV6PlS2DRKmZf6eHHvaypSUN4MTgsUeCYLLDHcdlvKaDNUxPfNbsfBIwJIYf%2BUXlY9sroQyj3s2NnLqW1zSbq45bcTlp9FQUpvY4K5UyE%2FpnxYm3B6uBJuN%2F0vb&X-Amz-Signature=6bec49aa3c2bc30b1b7b5649963e4ea777ba91b56735fb6f6347045bfda5d77a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZFQ46R%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHbuQhpMQbqjJzgzrR%2F9RvrBCxXa0awnZNql8f%2B7xpsAiEApc9ApV47GZLRwW7cCbNt6l8IwrItwHO43l%2BM9iroaAcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJHfWkDZZr4hd%2BEPRCrcA3TkDZHuwAjZ4ZAgUV2MbvmL3T%2F3MrT5oUc%2BvmjnQYsjIlBFRw1Kc4fT2wEQRnJgOBHMEsemLaLAoZawWGDB49nmy95LFsAG2rY%2FmCuZyONc13vmUzZ521SXMlBzmwID%2BBPyaij4eHvGMzrBRPtdwMbMprBlt4BcJRnbd9SgUWJpFFiI1m%2BRLHvQqc0%2BrUJV78QYcQb08zwpwZYO9c3uMnBM1M7Q3JG4eDL7gw2Cum%2BmtC3hh5aMg80J3zkqbMUTclcX44KFrWJd5LTGcuN6HEj%2Byz7U0A7Rq3j1RalrxdwAvxSSZRSKVft%2B1oLIrhDeUy1GS6%2FMvA3lp9WUHwJsI4hA%2BgyDAHLVwQ6yEXId1zX0E8NydcNpuix4aia9VqxhUnynRj3scz8DnaiIcQaghhnQJlLRk6VwArqXSMRptKMvWZ6olOch0ujBT4GW8fVcdMxV1Z2BG8YH%2FUV9loxuyFfIFxRG69kc6Nyzcnoedrh4ZUlL32%2BRSTFfhmXe5NE7vECFceddm%2Bz2hfJ6IxT2JyicAy4vhXuDYJqub5tHzXjQ6dbspAgKU0deFPvb77EaV8r6o7qAMKfU5GxE7SxLM%2BWTRE%2FjgcO7nxTNzqS9ySjGHgB4fxOfaAKlR%2FjBMLj%2ByL8GOqUBmixqSdS1DcpRycSKvGSi9hxKDXVMQ2erMBMxd1IxaVhuSe%2BVYIoxi3%2BJNd3I2tl%2BHA7XKn%2FhZOWyxnAzCCEpWqQac4H%2BTvoxve6jxYx%2BuXVI%2B0cP%2BaJcDC5oZRzDWH6V4tdI0lt5LDV%2FiOPeQtBFT%2BCNgKvVrlUMtUYwzxbW1U7D1QHQL654ugqPZcqJm2DF%2F1BLUpXYDTVwWvDLOAAVfDi5TZAe&X-Amz-Signature=8677d7a66a777a97232c48cdafacc73f7b50a5badc4c275a101b3c5082949b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTEPXY4N%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgigVSzYvxNYd1PhxKynwznvIt3jaE7pmrQ2zDi1cvOAiEArNCmF%2Fqq4BYv%2F7XuPOH1%2FUAcytYeiiaBq2UKv%2Fnc7Hkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCWhDgeq%2BxEV71lwsSrcAzU3SG2OaSFj82h8kusN9C8MZ3XHxF1aTIu2OFy%2BO32KSCHaLntbjKRHxlARGW%2B8QwI6ABXUQnCOQ6nWyYO%2BG%2BTNgDOzX1H%2FuJ136fqfqMoymF9%2BbxP3GvzA8qxuiGyZBH4sg5R62qR9TbDJQpHsVTkVFCCenfc8w%2FX0jhg0HBAGgrsTshhpidMhKsBOFMPpxFnmLyFzMXESUYU%2FlTUrnIABmbAmFSJkSEqNEFWcJThc1idSDpzmjIyLW%2BO%2BTL7aDalLS0598Rtwa3S8GanCs%2FHpIOtkNDZixS9r%2BuYmuUDyyGaQO07Gg8Vh5BjlNnx4BCWKEYb7t0CHINSA3tYPsEJdVJSCTGV3r9WH336P3GKUL50YGUDk1pXuZktY3AqmtEewugH4tlEKW3Xvwo%2FYG0NeuAPIqRmmiRUKkR3CcwcLI6RYGrKiCowRHQyoUdgUjZk5Md8pZjra9vc3l464nUh6%2FzEYDclyMQXXGpct1GVR0CKkJGPcWBRlyN2vRwBLUyVfED1dD3aO8xy7LHaCZ5Y0z17FNvsJyb5IbU%2Fy84Qbj%2FgBiFmBd5Mf2rDiev2fVf9wbaLekw8qpHSx9FEl%2FRwBkDW%2FnL4PMBgBy4PCjEOGw6tOG2WN3R%2BN21nzMJamyb8GOqUBPMu0PL1XuWyZavW4GZj0zCzURrTGF%2Fl63BeeDIL4jPV1%2BsvyvIQrtgb0yQp6AOJeG3xYQKQiMFJipftwFme2wyqYzZaT3Wmi2B7gwkOU2Qzxn29rhPYwNGahHkjtLvwO%2BtTrK1WSPNJkoZB1cLNsqtPV02pBPjU0VyPRmOjHHD%2BQ%2FyosbNirXuql5yz5Gs%2F3wHU6cFwzoz0UF4sMRGegzkmIJlnR&X-Amz-Signature=b671d7985630498a04138913fae5bdb67457e45aaf0372c95548c64726ff61ef&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

