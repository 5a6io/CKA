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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTU56JPK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW9c0gYly3zod3aRv%2F8ba3%2F0udhgib0goxt8GG2Nq%2FIgIhAK%2BQe5IT6Bf4Zl%2FRggLbVW74HfpH7IdFw2c%2FgArtc21pKv8DCF8QABoMNjM3NDIzMTgzODA1IgzjwA7S6NrmZo8O9ssq3AO6KZGwAMuOHEd2WPCGyDc9ROhw27EmLRBg3%2BE21TZUd2aPwMS2tAEb3nwqmWSsLI2dHO57SIJd6dm7MKFhzLt1SaHZ2zzj8IyewQe46bUL7IG4gLjNzVANOwxGMBX3Gpa285IfZjwZUvRpCZUqw%2BgsYj%2BPlqmCxtUx8W%2B3XM3jSD%2BxHjR1D1FKFvLtCUkJyW5Fy%2B5o0KDjsGHG5mXIM8GwuGBlWYwyammfgr%2B6O06WP23EbuxvT4hwsDMHjpOGJ%2BVHC77ajDO0wkoT4tQkh9NIjJHlFpZLbx0yeEcZvrzvbU2WOc1sFdu50wkoej74lwDOCpHXLYMm9mGi%2B2jzZy%2BajIF28uZQaqUD1NqSdC8KoDQB3mYgu2QdQx3NBDgmRMKWAyPYz20D4wca6D7iW%2F1rGfDdFBn2McNVTPd6p%2B%2FauV4zIIuJytmjROGt07LN8m%2BpuoYEivROGJ8wmMBus98DfzNidcbAfoZ2L45ki7FonfDYcFWRCeRra77Q7%2BYv2bukgsj2mTcRIjQwDz1s5JRbUx1QqvUhVsrC262Nl7vwBdjyZeGn3LA8eIC05XEbMooXmQEB3byzIJYVwa5P4H%2FNeGE2RsnA3SeohCmbaZCvHqjikfcOmdwR2aJ1PjDX0O3ABjqkASHAgaTQ4Kl8%2F3Rvld%2BIqAmBcHZGndoKeYZMsBv4gZGnbR2xYVUtQwOIAvZiBZY8sb1pYZTI4SZzhehpPlZnjeRYnPfUodW4F9PB0ROJ1DCW4dR1iyw0zbhkvTY%2FS6VXHCSJlDNLZj4dS9FXfbw6uGjWR5lM3h9gWc8L2U1Oo%2FEsec3slz91jrgL1zGNDb53KDiPSi%2FxlyJlMuQsf6xs88imYp4f&X-Amz-Signature=c2f3f2e437e1ddfbb0a4b885db8cf7e1740ffacb7c0606854373f098a57f6efb&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BUTEJYM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM5rDqpnealCu5LzUiLNhZ9viA1UEc385OGK9tgOgUlwIhAKvIIM7mHzQ2iZAr1gzPNP0VN9eW0%2FGR0SjJoFqtFDd7Kv8DCF8QABoMNjM3NDIzMTgzODA1IgwtE%2FcMaDViMQmdiiYq3APm%2FxeW%2FA%2BO5Mzy3E%2B%2FjFZQGbabLc6crH36lp1cjpIzlzohbxEWbUJtKDl2q6ogyxqz6xmE6TC1tBDoBNcJ%2FGKsnt20D777gYaZxiJafC3RhgLQYyZ4vZ1IFPiNHk4WheLVD%2Fh%2B3tfWyEtzi%2B99NPwKUTmk8JbfDJAIrHNlL1k1u7nrPCiZ68F62rsS7r5jg1thLe%2BsiVvoSTNly%2FqM1%2FVNEquuYqwckEH4DJPHh%2Bq8%2FVQdV0o8Rblol9X3FhzKzczKkFJQLFwuajjWTRq8sblDozfB3QG6hA5mFnwEoueoaPeJsWlkkVc8MBSvxF%2Fi2lpEbfwzFATGNOfuHW3SJ2AAsvqD9bm9P%2BCr7ktGesjRH6MmpCB6V32bbUSxVJCHFXjca8TTox9OrSh74CuMejkhbC9Gzr%2BCKq8e3CYVvf5%2FmzusUqi0XxD31IBxV%2BgqsQjUrH2ZG9kmIZBIL0rlOVMPmh4y1GwLbhBdeD1iRlvOJBdsyFQAEhp6PAUoYpy1TYQw7j0r4Jp576rWJ6pvyUYAUO58RnG4gb5pXN%2FIh6g8AGgEzGQ1JITVkZfOQSr2ivkmZo13NtIxbOEIy4BKOaQ7H6ZuvFOdFK%2Bk3zrl%2BMomnfqOjcXeO5MbOHFjDDCy0O3ABjqkAZDTlZz94GYiwSitDInxMU%2FC4Kb%2F%2Bw1V7iUXVupq4B4sokqS7L3EoGhqPK%2Fndv6Jp8vY17QHYJIKGzSUVk5H%2BGhoc5X%2FWMycflU8PQBY53P3bnQgtoBt2EmD380bKPLOrzfxYfeF1qtDGHTl4mku%2BvjM8lhVIkjqKBwzkPEZdDqSrZYofuwY856AGFFZvBL59TkEWHVQfn%2Fboq7%2BzkZawjxfr2i2&X-Amz-Signature=5c1f2ea8915dddfef2e732484e24a895d7acec9b6b0463bb9ec85b9d5114443d&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632LHGMF4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhWe91s%2BpGWmOSvdPBuk%2Fdf8209YLH5Ok517AQkvCvfAiAG9DEtRRUzKNJBrnqnw6A1vwESIfm7qpjF3iTh1STsDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM90N4sW8qm%2BBesHvxKtwDyg4EbQnwCtmOX0DSsrm8hYFJHihXHy%2BCpTFzoSXkD8fmD%2Fxddiq8twNeR4UKrrkyCbebh2Vp0e73AZjJHBfC6BVXmMDy3wT2wSpou2PUG79zGCZCknggHYxZYwIFDWUVI3y0tivn761SqhV2sSRcItNSFoVTiUIU9B84SHvUYaWXB0%2BN8JwjkEYwM%2BG7UUy401st6uRKnRbzaiStZ8Ij2X5IQfeaYut8NWdMjUwl1Ccmnn8BOWfccY6qrxOxcKeo4ZWMCfk69rolkOmICXgWyT2XPIM3HMhonoW9jZu74pt04vE5LNbTohjAiId2Jou%2FJlI6emHEVj95htt03S%2BMc12QvkhHDhse6RFHBLpgabuJO6Y7mbx%2BchliWq%2FAzyp1ieUltS%2FQj5eELSh31ZMCUHnYapCTSvc%2FhgAWqpoXEhiFdV%2Ba648SUnwUB02noRYdzPgaAKlNMjsrNGhhfDXNvthnfhSINSjJj3I6OGUrQGiCYWuhCmje3P46iGz2ZVGm%2BgFIJLpONTR8Y5nb9Y9509c7RDfoxVCPOI8wZjquDPZAHOsmqFUfJFdodAk2ItFQ8Ptdz5O37GgkH91AGxDDmmuvAbt6eLQUL6%2F0uDrhGbUZfn%2BHdg2ajOzwKucw5s%2FtwAY6pgFLps91TwPruUDgA1u7SpD8imrwY8CZldkxGeeu%2BSQOjKZPfDAXZGiQnbFmhSMCx0lLV9e1N3BwaanaGdKcC0L1MIDp0QHWQtNgKxu%2B41cXH2RSTujaIF6KXqIP17sOONTAJYHbSoeuKepAE05oXLp79N1oRLz7uu9EAa26K%2BeoPDMBAAUPAhjWZBox7OSM3IhOMGttIPV8KdYRM%2BAApcyiWgaDBYRA&X-Amz-Signature=63a956dad50e633b5cf9134198b7e597b4317176e6e86bd0887d2a6d44aaf94b&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHHU2H4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRI2jzLiCvDQaUkTJ7%2BG4TZOmyslLQerVLhVv7Cid9vgIhAP3tyjxWSd%2FuEYATwlZpAHOjqx1NGtptrRnUjGhVpJwiKv8DCF8QABoMNjM3NDIzMTgzODA1IgxRutUU43Q2eQVnh9Iq3APYb1ZRboJOuAdttpHb5RDwXFdG3ABs3aNDUpN9Vzm1qaq61MWkSLjw6MjyuQBugjPcNIqaI2Y0P0rLFFpo6PIqkpOEMNmi%2BIbmBsrqQfq5a8LrBtyFUXfC3sgvHvhUc1irWy%2FXP%2BbRBV8mo2ybV5WQsKAB4ifSiIT3XjjNZjMCiSfdSsZE4Nc25SbjA1TlZAkb9MFmF894l6Bz6oxLzu2aPpn55sH%2BR2FlBfF4kcfFF0u1N5XxR2p0qGKMK7KJLvFNZfVUFJQXaMEBGalyrFvab5Dmjs3KcZ2Jl5rIVu9e9b7z3Ez%2FHaWnvv0ZIPcXYPEm3J5T9CeAeaLs405HP6b2rjEcWt%2BF3FdSCkAE9lxxqN4roC8Iyi7X4Yc73AjpcpmJGwGCWDCMXuarmiHzh6GgJicdvk9yQLMLhqRf7TfNHdOEfsipA4B7jN0rl%2BBzKvQwrWY8RvMsOjIz69Ah7LJ37vt6eawQPNbWbofQpT8fRhbyPfRI7%2FX%2BDVS1fUkNTnjbqC%2F2sun89LHJfhjiMwmTAHqAxBmJEEl1rdL4lg9%2Bt3SDyhoTZBhnPD7TmulopB%2FPZNcfMcARjGXni0xGL0Zfb0k%2Fl4yeNoj5H9t0WQqQl2QE4141vLdbxg8HezDC0O3ABjqkAdGQUg9TC%2FIsVRG5c%2Bmf9F9L7KzfZCAk%2BuKkwiSZWxbxTI2pe6ZVEhn9kkvk6F73c5ii31Tm75TmmAKuBXkQpqfj%2BZfq8vTvaWq7iKtSyXVxUv2NwuBU1z9%2BGV9AEK5QEwIP5PwH0hbuXhkfqKpeei2TX%2B9Y44hKIlYGgeJ%2BvuPWNrchy4Sttc14h7dWj1r94gcG5ahhPvIDVxNp10zW4%2FQ8JMvV&X-Amz-Signature=52264cbad8d93492bdb9f4cbcaa6127382fd64a60dd47051bb1f232ae1c1f603&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NMA2L5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBRv7SN1p7XtTuH9Vj2aj%2BRjWNwerEPG%2BQJCIXKMOXD4AiA%2F4WKG8LG2fJwwxRFhgc%2BavlQLj90Ofq2NzlWUdEEQ1ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMxsdp65Wuxkk9GEzMKtwDEL31lc0Q3nPwh8F%2BIxxaYsymXCyBjsMjGOGyyCT4obveHvrFxkFRwhO2heDNiwxGRBbSNlaZbje4eUHCtMnjIgfK3yqflixrRkk%2BNsBczd7%2FTZaTIzVYE8UDGl8RUxBnyJYnWD7voyrVcWBG3KEx%2BNkh6EYaQf23rayf59VuXTnVEbqqYC5hReqXGyK96ZNBgk7MzMyd45esgxte52yrUWnmiOuCf9QFPurERNghbvBlFb8vRVipfzI5yPmCYRT3B%2FKG3bmSEtuAfwHXA%2BnBHzqmgwyxEVhB5Gfew6oTW0Wi13Qm%2BSL%2FnE7%2BwxkDSrJllqBtMUkCLRsjLBtVJToTwfnnNbz9T4y%2Bx8qSbQ2gTqNVOwREPXU248vqmnzsID6wVRaSb8SpKVIuLsfhnYv0rsAb6cxJOjVuUPBXiPnpAdqg%2B9BBoIw4bOlvCkBTGQ5PSDNu855tbGBgrt5JKAHxoZ1PLKtVC8QSsdF8qNtBKXPBfr0ongKCF7xjlcNuDzThI2meXIZ27ACZjvAspi4UU5BmWDOJdcJu5QccbDhl8Y5PtDlAYFeGUPaookD%2Fw7bbyvk7g5ibafUbm6RqjuTmNbzuxSsi3TkBb9u33bvXTEzTY%2BXsvDP71%2FEVea4wstDtwAY6pgGI%2BVcSxZv%2FQa6xTdPQZ0%2F8ZfQLjyl2QpKmKswhpsVzHq1edoZVWvcFmPBbf2wD9fXrU1YYvJxawqWilGpNLOzF06FJAYfS5WqtSF8J44oVWytvboyO3AckWZdBnXTfNVLnE38zHxqhwsmrJkw%2FFBikqN2Ahn%2B%2BC5gvX22OOXHzaeZeocewIcGvpOamTpc8sWy%2BsvZgN%2FZzptiHVFOuCmU2SSRKf6ak&X-Amz-Signature=bba36b7c4287a967ae9e7c2e5d938920cd658bebceb2a2ce050edff155f37081&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDUJZ3X%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuZGmMxr3XoT7X6c9sSzQ6Q7revN0dxbqakH6BiBwnrgIgRfbJMlFe8GqFhf002%2F4nTPlIwfy31EGCONvhRUGHEGAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDLmUV8ppEDfcgq%2FDEyrcA6A5JI82rc5U77OaZx1T9zB027aNxJJNqRhcaDug%2BPfA1MVGvGxxgijklJFbdYqXvrHJo2Kw4Zp%2FeD%2B%2B4lEn0v5j9SN6z1p1xpSQwesEFNELGZ%2FlCtARwTveUI9w8j7OEq540V2DJNZaMhH7CtRDmkf%2BZTrlPwjhKnno1hVzEX845TrQ46iLxCIyywrpddd02s%2FcyPBetdUzj9jkULEFp%2F5JflXUStZu711ph8nOOj%2FSq4DFR6JoTbLg8AIUsD7Y9pd0xUi%2B81PQZRv9MRoYRcnKJFDDLcn3V1xpKnRteAD9ahok4T3wIrS%2BnwsgSmKBo%2BLU2bXtWhEdy5xNOoO0ILmPAWrLST3wBk5TzbI%2BvXogXgM6br628UBNDuEXlcVaCDaciy%2BuZh6thbKQ%2FuacUJ%2BnQL4r6iCmpq2RWHqzdai08hhj9dbTDWuy1Wvh4E3m%2FnTZc413qlPfqv1VSXB%2F06IiA4Az1x9OX9UEMrv9592Ne3yCvF7MIB4IkgGWRvpaqs8EVWb%2F2cNSCb1ugp8sDYtTLm05SWDndz8xu8X%2BBOg5oLlVQ%2BSiSeEozQPqo8A9Cy7VRDnpbaqamsnQCtgsvvDDyIbhML5XyxbVekxXyjc5LltNp69iKG%2Bht8aNMLPQ7cAGOqUBZ9CZ%2BQqIywJ8fB8zMGCdiIixWtBtsSARlo10kaSrwVgbSa72KBc3j8LjSrzE7TwQFdGcK0KL4Y5VIMqwJ4%2Bp1jCNyDTSKhp9FHu3AwIBiZjsPnQF3FAL%2BJMxuyBkSGJU4I3t1eRYwAzjRTrOdhlOmRPs2i6HcYNlancQF4Pch1XkkQ126N8TOA3lDZ2BzRhECCqO6wJX9s4pfPh%2BHX%2FjeGJ2fLYW&X-Amz-Signature=e2614c45bbc253ccc4ce2c391e1f05db52b3228c8a30d3491a7963e7d72ccf90&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z33BPTI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz%2F2Q%2BXugctbRpTYB4xgnwuwtHUgxIpOoqGK4PAjseWAiEArwEUnxYY5owo2J%2FH849xJCY6o2Ph0AJ1cK6yn92nE10q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE3A17I2BbpHrhuG2yrcA4f2ThspE4oJbKi1Rt4NIFCYjLSm3XmhQmH%2F%2FfEN2FLd989ELmPnFKn%2Bn0hRoSMTzt89S5i9FDkNKGJkLIjvmWw7KqOS7WsxbUm0NU%2FCIbY3usaqlZxzWq0%2Berfsc8M%2BGkjCfxJ76Q6dGrBoS%2FIiyBsQhxvYRpzzfEC2Kh%2Fa8aGICALiwBCeZ34WyUQKWXhYE1Shg%2BP1fEcV7dJYVRzIK%2BgpEnkTjmvyNzAbhMDx86A6wLd3mnzhjAROswhC7BjG5RTMNVRG1ya9VUwCMwb0y9ZHp908GdDk2Zmwesv0msbiiDu4e2ckWRYSc0eJldyhUoNTvhTceGP6SnY0Hc2lGcbWO2UwvMZ%2BAZgSKrDTr7W7UKIeC1rxf1Y1%2Fw%2B8yTZm47IABfgJ8kah2dtLXJ2zk6d2o82vDhFpnHm%2BLq7ZkoDRlrNfc9xpv6iPt%2BmSB9uALzT1bL7d2AZgEwF5NkIEFRTFYbGij1aAtD6sBe5Mc4jG55M9thzclHP1%2BSliGzmEZBB9H58b0w%2FXHGP%2BG76nRHsUnylRuczgoG%2FN1x5yZpF2i6G%2BzbOu4xIUuCOK8K3dD7GZSvHY4aA%2Bsoa9Y3vw%2Bl%2Bkr4sIASGhd0wHCwS1dBVjaRLEROx11UVQXvSbMOTP7cAGOqUBMPdvpdWIG%2FtdtuIMJjzfCLNWPsEm8ClgPY29fyGE2VVtCWICC6blmr7tsnmjrlX7rSdBDwt0SNiCK1TW7P4G1nxcBtaS2RTQAFdnXr6fdl%2F19cakKPZzCYFzLAYp0NjJgYTSaj6v6cZymTj%2B1xfnBLxthNcUyEFQ4OVTJ4Sw2sgGA%2BisKiMTTSk5oViMOXpkTGdcEJkvv6DGdjiMj8EZeGW7l9BK&X-Amz-Signature=b91d8efdfe9ff590366ff6aff3903c17313f460c8216ae001891c97344cb084b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636DL4VGG%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjqwZFyv%2FPaoWcDXDzMuoxlbK7l0XUs%2BZ2zYEcdYNvsAiBRXz7elliB2Wrj58bKDcrzic%2BvyW7EurscnpbZCJyXEyr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfeKVEkvwm1MHeEbtKtwDSmdTc2c2hKoFEuaJWPptQ795eCwebt4bCDwM8mRiwCLQfiXYO42ZsbkK7sE1mpd0WmJ1tTsUG2f9AYrmhbJ7NxbJkYye%2FkwE3yWW8jL9XRV30nbCoT8cG7yHW3z817njbL9FLz3OcFOvZiHhqCSuNNgd7ukWFhxbOhDFhk%2FqZO%2B2WW63qWRlObbzXI%2BxmbaB5%2BV%2BS5c8loJiYbglS1v5ROHEtfg4tZv7XNGjovEzB9VroW5tNBAxHrPZFzis%2BS2Dyxgz6L4Y2EbVqeL7RvObcmkgPN7rnTxbBrd87aRVt8UXIIXygqWYM%2BjtllAr4oe2OOOhF0Sx5HJltZqM2PKRxE6doIJ79Ylx1w5f7eCZqNidcC7pr8kOqK8UTkZGxMZ%2FhcmReETsAB2b9WSwI9NrAypsNv%2FqQDdoydxwR9BxnVKulsOP2ctoRGQHhebLlmwVmqcGQxW6pcaKck%2FeIrppC1QGWtuS66YGUCjvIlI1Kktn17Fa4Swxu4kFg1NzveuW9OBZwoEbeowABgxieITAhJjKXs6jiNWqEnepipcP026NvX63cb%2Blv1%2Blf0ZloDbfwAhapK7FU%2BrABfxtSSfhH65mmEt6BWDrhlqEubZKnBHRq%2Bj4QCuw43dUU7Iwp9DtwAY6pgECOYcw2j4IDGVfOSxYnpmQBIFFZJWxaFcQ%2Fr3jeSIGAj0bIJc5dq8784D3mFWdmBtinmzOuKBa7LOs5oKk2NI%2BD3DlWk99tiWoKAi236fyskJYG095P%2Fad3hscI6VIFHPJUj7glddw3iwDJmOVxKsidoZECrcYqe2xYMDoWJjwV8h3ZwUdFsuNSqIVvXhOUA9LWxx95s7UAzChO3mjbnRCcYeFzLE3&X-Amz-Signature=133a1a0d9898f7f854fbc28a0203d120cc1daf14c4e0ab451ec89d05c58e1445&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YF6JYM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T141305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvVnGP0CSq7WNrBSRgDfwVJMjUCjNR2INKDCgmTriQXgIgMMjtuAftcVJ1CJYxhroNn4csryNt%2ByEGl%2F7WoCquYbcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJB9395erANkJ%2Bkq6CrcA8bjRBR1Q3upqwO%2FM0g9THBcFOU9LPQs4N7xMiQFDMRWRWQVqloNH68VkV2FEqnn5Eyw4irhaTIU4oLAlt29bbMubyFV6ISlsO59iWvqhfnSKdGfzh0xsz1rUq%2BC6TeAQRHWDozhhOHdlq5I7WWEBl4vbRzhJKKwdWjTMzyuYshfWx3BygboT5hyuehmes4WvQf%2F0diFKx%2FgfDj3MKidssvQ5zAfUhSqfrhYvW9q9l83AhE%2BKZVEv%2BgVfYPi%2FtB%2BrayiKl2CuK2GKI%2FHIh%2Bjv58L2uvva9gfnAJfdrWbg668mMyng9qt4pBXblcbHjlRSN%2Fba%2B3zHZ5K0XTxZSIpa5FilLe9nf6s%2Boz37z9jsNsBfpHGKgFHZ%2B7TZLTNwfPGfuIQ9LcZ7ijv%2Bd7xvq%2BaQJdLjBPIiVitu3PxrTISTmI%2FUuGauQOZkUPZ2czJ4DcnHKFmqqvMYh29tr2X6lToCAOptsGhm6EKvCBXJ7oS1npyjnT6h49LBGBw1%2B2yFEUsy4t7IS01LnJsKgSHam%2F52dWGvACOP34wX0t3ZSonaCR4aG6yDTgyqPvdNYZJEgt4Q0IA8LXrgffguuGgx5kJt%2FPKaQHtB1Is7ToY7rhr77MruYz4sdKrPAkq%2FC%2BkMOXP7cAGOqUBWcmJFuQ7PIWSvwrsNSFfSz4mWNLyTg2C%2ByucCQVr%2BrpSrZkY%2B8WJU%2BsXyeI5YzAKCQfc2oux8vE%2Bo7d%2FIGQd6M5y6BbsNlJ3tmWlB%2F1vevwPMPE70wQghRXBXNPqgWRY2HRfnBqJ1lPjEGgN7kWs%2FCnOzdOmLwd4h3vlLmDDd16mIFiKQKrxchfb0bIXpjUV5GbmFVxevsUDGpvqxYHXGuxvTvHu&X-Amz-Signature=7e961b9b0e4f719510c6fa45ac209425e7f664ef86cd7f5a60c7657c5834e1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

