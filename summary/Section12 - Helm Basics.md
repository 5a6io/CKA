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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBMKZHF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDjTUBJagF8F2fUBe%2BxRXmAEXmEs9bUIOlD355HZOpdMgIhANuAPp%2FDAr%2BGJk71udkRsAh%2FmhSsYWBlWRXsOaq29kNlKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEv3Q%2FUKTdrh9uvN0q3AN%2Fm6xFAu6aHU3P9PXgXzwfhOx8mpyHBiSHLyUhOrTwEjUgv7eLy9ZC%2FshIdpjp%2F%2BWLEY96%2FJjyrxWdLPPiRRuXYyWfno5hvTOcfKxqo8prl1%2FCA6mTpiGcDFExYUvLaccz56zaYwNUh3U06al8JcgVNJGXbovR6R24QtTG9pZBWBltISYPgf5OWZhlTyBrdeTiHjHe5zHKIhzC4VOoG%2F4a5S1Nze%2Bwpp59c5HH4eAlkzfs5WxgV%2FrZ%2FL2aTumDb90o6oA6miuxXJfYDP8BlAunITU90SyDj0QQE1Fxl4aiEokZ8jD%2Bm0aiZ%2FvffsQV21VJ6Ox7WuDbZAFtIUDkng1z3pI8eKXS%2B%2FekDdjuWzlpeKQNSE89CmWjqB2NPeHGAC5C8Ha7S%2BtP%2Fgba9T1qlDGohtDV5fYZFHO1woWLf0DOVm4nJ7CpPowhy4AeNefQFJVyyl2i3SdS7b5i8o8Kdm7fDYgh3OP7xQIEuQqq0%2B7TIBr6m2ijumgCt7S1QR1YdsO7N2LIkg5%2FvyPSNwiV%2FPg%2BU2%2FvR5Z0jB8JHImgIOt1w3XrnE3H%2BibWgFmuGPMVSbdvkioATIh7qyzsQ1liuuDrMBxJAxD6mb80T9vbq9sL2GN%2BF3DihvzwaDDnUTDh%2Ftm%2FBjqkAWANEgadjPk18%2B3XDASdwcpYl1IP%2BhUr%2BCVRAd8%2FoXs%2BQ4kcELOU2mp1ZeQ0oM7yIj1qdAYOfkVjHj4%2Fk4BrzVGpk30Zo2ix1OYQAK%2FkNIkHjy6OWE0Vc6uq80j1tN4tJiHRNwoWb60%2B%2FLwCDVrDlu47zAgP%2B9yJxEs0RfQdb9S%2BdXk%2Fhqgxyyy3t1NgFHOSx73U9Y20lfdwmNEOw5SS%2Fyt9yNUW&X-Amz-Signature=ecb14995a4ddc1a4da3657e27815e0a7a8b50b1c92d70414f8fc02af04a61d87&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWYGYUW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICiAau9Z%2Fw3GxWIZ0vnn%2B1x%2BcJtbMzUn4EDYiGBRtTvGAiAp3XkAmMRp8ohu0cOj0D4osEiMRLiO7qffd6tO4hUC8iqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1fr6chViCP8REBrCKtwDdviEKYq7fN8Uo0OMbfB0yNZcsquh9%2FghvNVuEp%2BwrXygd%2BWNTk6J7a%2BjcCWD%2BM0YHls%2BYXLFXgnlT872u1ss0uuLZ02WbxsMtMb59Fsdpwc3eu5zzitUf3Sz5bxjgJWMEvp4NCj6dSpJGtWPueHRJPpLUyloE1bUxBSMXVTz4cp7ug1ZDrnEmd5Aa8VkZM93limBDqpBDSbhU0mCuvVEfv3JKrU6ojszvAuFucvpkDbFMCoKHtDWhnwWdC8%2BUrjpxn%2BvS%2F5rRcZQRZJ7ImFBNhX3hgGyIun86GXJ2CpS8crSWcwvfAvoIy9M08DVF2nMfVy6%2Bx5m%2BHE0Ee9fD0K31tZ3WNlZ7gSqzuEfAnlzjdOrRg8HhiTbWVmoI0%2B0pawYQBqwONl35TxZmP2kzY8YbryfT7olqex4%2B2Iu7gCSxOBRxqJN%2FkOofxncIfA2HJy1%2FZ4WymuDV%2FPaqpMl6J0%2FGDrXnwu6Xrz774j7p6roSNCoU1mcmgKfZ%2BZVaYBSshP%2Bxs79Tm3z8KpYTY1thvH2Qv1CmXgv8l40suFymPkZ64wrH39xb6EifQHhYPhv11TkUKnXVO7XLknLkIXI8eMj7TyVShyuWSFqPcvbB4Fmjr5JZoE95OglU4MMbYkwwP3ZvwY6pgF7e2VYvyGNC%2BcdbWlkKtnNlXej8k%2B5FQo4MLOAjZx687mnDS8v2CLv6sKGpxxOozm%2B66UrPkXwnPNl0PfzuFRCltALSzqjR6MJvgDdn3O8RtTC5afYKHu%2B9QWXNHHTi3vuyygcdOTk%2BklDpBllNxLD5DqscrVS66mqVTaAcPjjsYil5XZrwy%2BDLpd978bUTLJelO%2F%2Fk%2B59U2IgBpxVYKHU4I8K03z8&X-Amz-Signature=7d1e275bb339cbc745a12b89879160d1eee0258827ffe7b5fcea24a71a8fe30a&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I7KQFOZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCzjT2WsgJ8WXdjykDs%2Bgn0OluS8YNnUB12ZMfqaVym8AIgOpMPqyzx2SBbNQJt5DhXHKATtccJsBpjSKE%2BzS%2FDlMkqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd7N6bkF0XiO1TJiSrcA0o1gX1rPjd8i8rDvbKBYnSkuSHUvKrO39kUJzYP%2B7rmMO7wQrkUGvL7jOjfj7UYtea5ltJqCZbutUUWEmgY90YefEDfsf%2BQvrDEW2VHDFsEqovB2459eOSpJ%2Ff1JIUrG2zlDYrMeYvA7V8QAhJPLDcB2AVceFXP5I8ljxCPKZnPtjMYUOrfxl3gLi0NG46iYJR718G%2B4RmdRjIdy1wGNZF4b%2BM2bRpxX7dH3w4S%2FhVrDwrjm6MlktSR95fsfLXLh78qIlccMnt4gv0E2gplKHU8WW8fUXx2qUgq%2FuMvKFCCJdDhfqjzKp5RgdtMHocopb4I1xKEUH6Fo6yw5leArL%2F4at4VUeTXgje3swOSFhrAXnZhe87emh0s1TKzCJ9Z1xKHajS4r2j8l%2FVgQ23bxXD46y0iW8ygIm567paOjVMwE72ws%2FFj4WcKNwp2BGUeTgY8HVgkdXDKKgo9P8ZfbX80dTmac0spLrgdA%2B%2FAH3FrooY7GBdfY6772jtXFeGpZeujUIbpvCGoKZf0cFvIlYkWfNB0jXW9eDJggewHkAnop1n5XpT7fIyml6GwjND2dnxUOaMi4msW1ZIPURlsuF%2BQyFYdmBCLw5KhWYUVjr0cRmRA922dqo7yeET7MM3%2B2b8GOqUB53aSAXLywtq9maOp2rjDtU1HBO6Wg7AyJQMl5qKRqMxcWbkc74Us6n1sj%2BbmKkPbZO4iQdwNCfieenAb4Ukd5Dy8AZcXcJ6W0HrrI0XM5Rvi0P%2BBn9%2Fc2KcIq5M%2F9guBNMcrVyIcUgFMTJ5lyttVcXAIlxrUslI3T41VZgu2g3zdFBN8AJ7LuyrTo6qboXR%2FW%2Bd%2FQ7TIQJrq9pBZ2wlP3gCccBhv&X-Amz-Signature=67d0a0c10c31ffac354cffb0a1ae0fa6d6afc76877c7bfc1f4f1f572cad981f7&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45SC5NY%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD7mR05i7sHNsa3286WtpyjV6ILdyI0bJVwfzwkc9aJEQIgfiE6DTXQWiqDQhMBBoxXCNHgJE99%2Fklr%2FjczuxfPQRwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjpBwAQa6x5lgB%2F7yrcA1Aby60Pb03HcPr1MEVFf2LP97t88OKBEulfw7lLj55skMIjTpeYnyELV3x0LRe%2FptOrns5eJcPH9ve0yu5et8%2F8qe%2FApNhsPdTg94VwbABTcAdTyAHvHSu%2B5ezpUo9Ab4Ga2c9aGb%2BwjvUG60HG0gbWKKLQZrP6eYrfaXPxvr73T3naQIaI4A2HA5saF6RzKYU3bZ%2FZ%2FbwrFgtKUl%2FoqNNRa9RH1tZ433PZnDmcn2dBKm7MZBVBIPEqTnz0f3CHkO4F609uOb5%2BY5qLWm5Xhm45OSA7K0IceWn2O8J3NgH4op2fgMKbN1MADxuL76cad1%2F4rn6cGTF6ClWRNgHyAHaczMv9OhnojWlykE2taMu686JFywa1l8wnS2s7h4QSFw%2F5Pa62ngK9gpg%2ByzhcgMNzRGGVKHrVHcMEmJuCfSfZpaKU2N%2BMc%2BgLe0bsL06mLfU0y9CpulBM7pEYeTc1WoHKeV1cSnoP%2BjJEWMPbPcHjgJO743Bv%2B4uWDT9oX%2FR24WZoeu7ff3Lc%2BgQt4MZvdsEnij79sOoCYqi7F%2BCafFqRjXv26ZwKcYxNjsiYAjobBdNztg3SWvMPb%2FtXXduOxzJB%2BCv894rroL7pvrSc%2B1PwLDswklWf5is4mNkoMPr92b8GOqUBAja7aRHzH5k33vDufZ3nvbuPAbO2GuRW8%2BI3Evy1dcjsMzmoxvJrq9llWt1G%2B9nKuLf2H1kQHejyxyP9l31c0NAgksxwb2z0O0ADyP9%2Fdro1weFXOkrzCHEjXOzy6lpcZ6OVnAKJDEfNB4mZbL0benym1AhPdLn4%2Bqx7Zb1bdMa2doALnyYoQOjj3sjp9pjP5z81hPELuu8npSKroUPsVbuhJJaX&X-Amz-Signature=67e8cdfc1bfaeb813d9bf0bfac8b6d003b331e7cc2f19027d6a01b152aac23fd&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKNR5LT%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCvhNxeNlod8vpFYXv1naSJFnBfLCpEM30fB%2FAHKkCejAIgTiP8o%2FSL0ThmZvkWDrtnphDC1bAKP8SSISSM%2BlOUEuoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVsSNfCZbs9O%2F1VwircA%2FxI6gdIGj2Nv9edvKSqUpNPZCm4sn9EVECMZC3rF5JGL%2F9SAXRUFrUsLgpioT%2FbRk5aMTvEMs2uSu1zCvAJaAe%2FwU8X0upcAE4utzaveYtTql%2BPI%2B5Elpm%2B%2FsQbDzeYaDDK5mbS2I2nrRukA8CHRS5rPSjafH7hDsF4Lkf0qLpsnfy4YWQxqJA6Qa07M1YIwcsGfUS10Ttbbq3Zn0HZ3mr04eRtRGI243XJtp5md%2F0K36nNP24M7y3DrwPWokCZaomM8NEj0mRDhfU2ZIVbu1rdrY1o6y3wmx8UDSDcIVi2VftQEYu1WFuvTsZXzQMcNZYHlNNWCA6WkpzrxOsjaaBpfRC8BZUJv0zTIJ4IX%2BiOjqOMOO7nRLxUPmsREM2heEuXcSdQt0y73QbWXUaZ6HfoCcTDjDc9i6XnEOLJN2PRjAJu4Zb5B34jahgs26YcxdCUIgczX9omutjI31R%2BvEtpdLO4egDEWwncecMt0gHEF%2BcMy%2BlErwwivU1NLahf0DBlL6%2FMBU4QX8WpJUl%2F1HiAKS4AkmWYJO0ArQHYuONcNvrdeyTNchQkikyzh2IU0yagKbIESJqqXn%2B21mG8puERZGwm72cQsEzMhhR0uW1KkZibCYgX2tDfwmTyMLz%2B2b8GOqUBwyp0ahh%2F17RMrdwMD%2Fof3GtEjHft5oxig0GpoLOniXmuTlsvdW%2BVTup3fzpkuXXMLB6zgzWxaBfqVlxH%2BdGif7Cad19moGgVStJIvmbNG3RPzOHzcWddAKo%2FB3XMnWB73NMN0LD7J%2BkqCtq7YwzUee5kGccoymXGffg7rrp1tlPJRD1hzQ9PD3pgXGET3yTvfmMxFJ7h38KbAXDtX1dExC7oVKg7&X-Amz-Signature=617ca4eea909835f39d4c24ca07c5f2f6ba7ab1c3266df4d14521169a5f69f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWD44E5V%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBCg%2BUVwsz%2FaW8z8pLdWr1Os485DBXIa3XJ7du8lRaYAAiB9VdRsYPmIkn54jTH76NkBxjgISHsO7A6gTGz1CS%2FB%2FSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMneko%2BI3oD75Foz9JKtwDoH2AN23cTCq0FFGsHRLXsn4L84rtfJyrZ2Wl9CfNGfI6DIb4zM35ZiJctcOqgLm1t%2BS32IGQBUpWPTxjunhmEcsRX%2BFS6gJqAEiKGE0r7muSUfKG69g4WBxY84TVOZ7xHrHuRYrRVAO6bhLYE1uY7xvcaaDkBxlsLsX8GcelcH2dnqjZodyEEFmANNpnBodvAj0Ijc0xMDPVVHWfLE9RkvW8x02n9zwaoPriway3LrXCmH%2FkF0nQSVVoP1WzY%2F9e2iOB1ZqRqRuSZg1NuSQHQrQ3xzLStiUfFGvdsG%2FaUyW%2FoPHuFBvQmSwi4FIXerP6fjJZYLRjBD%2FaD%2Bzz5YB3UAB1RI4MERGs%2FRdwyU4bc4dEhKJh4VYu0EGvMec7Qya%2BgOKgrDbjybTorFxzGUhtMvlvkNIrmtmP8dHt8GHylDzRuk0W96og9AdaKvCbYpKXWbgDXq%2Fr%2Fr0NEFO5nThgLtwXFhrRZSo31CO8e7PVR6HV%2FmiFzG%2FveMmUh7Q3eeEjRCndpkZLNe24bCdwPm6%2Bp5MgsVq9K2OMA6VDu40PUnMzxzcNAsjOh9%2F3mWrZzG85vR5Jd7glvQ0nA1vv4Cn7wJIOFcXjWIvVFSt8ULcFZBPeFu3RnsA5aQAw6Ogww%2F7ZvwY6pgFJM%2B0IEjy5VcdBIwX29%2FYctFNkEQZV3cLA62LZwdoEKtfcZHWGoOnsq37cahIoJZgYLr%2FiKGNaSRIBGh7RBDAVC%2BkgPp%2Bu3Dz2P2QjkXtOOou2SFZYZsIKRn%2BhpTXyRdnGgOnJhuiedihK2wnajuulg7b62W%2FHkmmzwKhnl15PLXoWj2kPYN9Jipq8Ajd%2BJ4jXbpQopyRtnNgQ%2FgD0gBnpbLUk8foH&X-Amz-Signature=0947243df5608eb37d9e9e5b244db33d5d7a472a14cd2427701ca3de53382112&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53DB3CU%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCETNd0nwd%2BBb9ti75xOSZvlh9yp6OKJPvs665V8j%2FTWQIhAIQLgbpu6cXBhCxBFJTC0jopLAsDyyv8H8elixZsNq%2FMKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCrbrUjbea3ydmbNwq3APoAbYv%2BMkMLQ0IGFXz9DPMKa72OiIWXeyrlQOGG%2ByxOUePVED%2F158XHlIhhRnD7T2lZ5%2BqquGvG9pZyDSL19MQzhpkMmjjQN1GX54bUBxSGlahsTn7QL0EmkHgaCIMbEq5SFmBmnlpz2dF5Ln4LNMZkTw5YDfZ8ZFr1S7To%2BybOZni2I1XZ6bMkmbtZ9Z5IPlNXqeJ2L765uk%2B2FB%2FA%2Bhq7zRizBpCy3uDJI7qK%2FUMDFiiMKbUdPLE%2B%2BlR%2B9c1c4amUMtUlPlFbNTPYL1T7Fre%2Fk0nlr2X2xBe6PFeA%2FsGVq4R2YRkr09ivtna8mAY1GcBmx79TA6nrPpOo%2FAmCeNL%2BNN6GVOMKb%2FwHQRKnL5z5kjRA0cd7kLxKO5H9Wn22GcAf1g7WPSdPY2%2FvG25SvEj4FakeAh58Nu3o3maZOVe8ZUROFEXxdLVdUEqhNeKOo64ycVYLspITG8G9bK44totHvA5IclHXb2pGbnIeQ12YSp06HpbEt%2FiWwRPj8ZFjRbdXt%2BRNSLVp2mTbYONLpdfVR0I4JA20hHwEPW1u03KZh6Dc5YfbDcpTb7P2EWh8GzyLjaWBliq%2BHEhh1WeAMdEbZ3mVU84DCFIDuq2E%2FydumrRtiqo8gi3UqaAWDCd%2Fdm%2FBjqkAVHe%2FG4r5xQPFX%2Br1VZ4PZ5kpQRobZQrAG04RZ8QSlhyq0U08Kauq%2BftCTZYxiovJtm%2BY3gB2NCMo2Eo20C6OZ3tsngVglOo6X3gNYzrKWrWq2%2BJXDPqXKl3JHTpV1Qgh%2Fj5psstQ1XOs7OZYUb0xnG04GKIyTxOLTZ01PQ2ZjH%2B28P%2B5BaStHfhKqhM8fazGTJQsNYqL6ltl3SHUYnB%2BPUGqvfo&X-Amz-Signature=a29f7e6096e372533667a5a899ce49815ee6081c6d16b9ad6c5aa12c8b3ad5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ2OLZPF%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCICZh6C%2Fh643aLUvG5hb18ATc34kAsWnbh7zT9uVRj2DgAiB%2BQrRruz48W3KPmFF6uI8butEcykqMO7RJKD4NVPdlsiqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVO5vuiv15oPK9nUfKtwDb4mN1GreEVAIyLVzFeG7dsWQX78G2m89MuNHJNH5jt4gXdkI806r37aorMnT4LgX4dbGPexu85%2FXYbvWiP6EUX3E7uoj9DuJxIzRztQlzqgHVPn1sfpdI%2FPUlyXp7NQhx8ENb5eIJ0fIwrVoXWIAJxcBcD%2Fq98PruAyce8QqNuNpTzIcLRUKjEs%2BtlVHywk7cWO5ObepESbsxcfLcRGqMsytztTjy%2F0LwmCcbUo0z2X8lSvonh8OBENQr6Sks5Cn1X%2FQb3AVV2sdkP8URtVh2JxHl4jxKUYlfzxqKKtJdptlRTt5kpBoyNNW6YcH%2BdBtAw9nWQfllpbpHI%2BMi2ZYijkzMlIDjs2oDwYOKTIezWEknHnR6GTpRFIe4Oa%2BbSqdntQDjTzHFP4DyO2jXM5kwUYFiEMvAkICh0YBzqWUqLhHeymXXXLPAiuSgCcg5lZHjoE21ESrGcdNU5m46JWqTsU3ooZ36oB2ozAGtBsADqyiz49xtiyM38DfKBdKqgXLmHWxOj%2BdCvi7%2BQ1lRsYc7cjAkxRU0dHpGBkMFyz3uFChumcJU%2Fv4YuFd8am1VggT%2BXWpdJG3FbrqyQMu0THv7EgzXv%2BODQoWijcJ2uycME9kDrxVoCzzY91qTeQwsP3ZvwY6pgFV01Kma0MMMBtitBJ496jakmN4C0aCHMr7Je8b4ZABlLvcs%2BOOFEGrarADiJW0oVKxp7aLNo6CRC2lXWus1%2FyTdx%2BOuUuc9LJqcjsTFZdKdqLmeaymAAPgx89VZy2phEEu%2FBVhGSW4LISMbG724k9bL0RH9xAHbVRFWZUZdaAcXZSOZRsqVZdy6rx2ilFRngA0xB9h6MOLmElRqj8g3uQsvU7Pgtlw&X-Amz-Signature=95e614edaa31e1e8d176c96dcba69c5b77c28e81fdd769ed4208e60419ff37ba&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56PQ4GG%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T141302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICh4IM4mEMWgtOg6s%2BdmmDkP%2F2%2ByvVu3yLxHpCCDwOBgAiEAiZkOPAi7ZaiTRlTflP1oc%2FWQUgd8rAf4Fdz6WP8St8EqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwIsfOvu2vT0rTuHSrcA64gKoO6CYJqin6WSaB%2BCXODjQ2%2B3FBWniaKgDwsX2nLb1Q6w5Fhysxyo5CYRJTzT0GR%2BQZFLbx8kExKf9XmhxsDYXXwuia6HpK4mZY%2FGhWACXnzrTUtJJ46NW0IKYmsQ5ve%2FgEUFkza3fqB57GhCv1aVIwYkc7idd9MuCWk5P%2F7aTua9LMXjorF0NNLTleF%2B2zZ3vFOYlltnbwt1NAqIkjh7JlMw4FXNjGib9ZL9cDd%2BeqbbBy3L2rXnHvMSUrYRMdoE06dPyVWYBA5Zgo%2B0e0HuOzzDohyDGTZ%2FfMrSGFBN9fPhTsaEMex4gQ2b5fm0gbkL9uyDpPX1sKFE%2FO01CE4NKCFBppmik8VLsKU%2F4uJ3yZihbPL2uOJCi5vod6UawW9D5K9rltlDKDl6%2F8azi2U0ltj7gEySQOIxMMSV%2FkNRc6vvxciAOtAiQvlXpqxXJ7ackXJtIRnwYFYptAbdAsk3JEmU1KgtBqueGa9deBY0KlblR7fuaxlJ226IwwuR3LG8n2JO24lGRNI60FuvIMtNuLy8ezNFHWMI%2F27XTYzsvhaXC%2FRhQfnR60lsqb0jBfd8qqD7O%2B%2FyNFZ5I1H38LFJ5PL09tG2mGXZHMRBkoJTuKQdxxLRVtf%2FLHVMJ392b8GOqUBQOKoqbbL5ewESXhau%2BjQQ229eGm8CEz61N1BBvWfLPvzp9bkEKRq%2FehwmUeDK%2F9IzdxylkLB%2B5CPhgb%2FXEksfsTk2i5En%2BJ1wK8SmM6uiC8dMrUWm3ERsBNbPnaE0G6Fy9WfR4TnFZOVydP%2BHJ5nnDTgE3ZnfepNvWaBj0%2BRdmwM4Hck3slkzY6toC%2FcYquVoka5xj2i2Ti%2Bc1ZGrISjJ8jfwHao&X-Amz-Signature=3d7e3fa7264d7067e545e1461e31036af5ef03585ef20bd7e614d590dfd00dad&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

