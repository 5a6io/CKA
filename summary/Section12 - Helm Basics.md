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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEPPH2O%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICrQyCHCzqQd9TxoPhcGS3VHjUT5GTs9H%2BdAjqOmffRlAiEAgUTXzZ6vTtPixFRTDzaWv63mK7xrjxftTuR5GhrKty4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiE30fV6jh1N0dXBCrcA0YXL973StA8GcG5JEuJ67poYnG2ICoUY%2BIrydARPIlgwPwxUpsuRyDJ4ujyCEBraHJ7oH%2FQKN96bIXJ5NcbB%2BWnz44jtG7BgvV9Ma4t0c6ZCZeVrLNAccSeUSALeZl8GhFCdPkYHG879B%2FkYSAFKtX9Nz1aahERD34J8zKVO2A3wgdx45IXAPLN0VzZ5t79C28oItwDdcnKLX%2FM6xaU%2BAqdILTgsZbQ65UqBprdx4Lt0M%2BJdcAYxqeff1H9FNF1ghbf%2B10Jvg90eOUH1tHrasFF3BP4OTk7iv%2BTXtt5nroUsXmUbGx6vGsXFidPfMwBrFMiYfGFZl%2FoII9%2BAQwWER%2Bme%2BNXcknXjzvpFWmVeeELQq4IDlqwP5buHNEJQsETCRY0Qwt%2BdNfSIxWr%2FwMi4L%2BQc0sFS85ZDgkpS2S6dZRKnQBY95T13UZtxEtdb9qZv0lYccYiKd4p%2FPxhQTH8M4bqBZ8F%2B%2FFrqhxOwfpQ%2Bi9cnUy1Z8L2Arp4PcomyvpFcrNQNL2tUsfd1iPuli6U3v%2BBbzVETK%2FNKFRB3MGQrSLiVAqyv9aqYylYoqNgosgLO%2FxyyWqQwm8co652oqUBHLavbmg0Gb105ykURYMtUvNWwaMzbJsbrCfPzFloMJ%2Bg378GOqUB9sDC1%2FFvb3PxdTKrO0yYYkP6%2BXXaL10vjB33blZIJs9Ff5IfKr7lRlJ8YmPvaswbpiodwLMAGMdChq73XdIP25qx07O7XmDlDielq1wZY%2FhVL88AI%2FCt5S9pxmmCWogsQaGAGh584Yf6%2FHxKvnj26Iamgv2nxM40GhY5F7KB2P9UlG3RAiVfSC30Bqc6sxqZLJPmRRMY7iPB5MUVN1yMEU4n8feu&X-Amz-Signature=631efe13b367bc36c382d08ca116bf88b596dcf75ba24426f4d59d72d93b571f&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PM2OSS4%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD1xthrtsjACPSoH6no3MclL7DKlsh92dLWSuFu4jrNGgIgUMYGuw5XJQCeuR1Btx1UhjdsgrXyjIZJ5FFzJlUHkSEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLS8IowrEzHKg%2BFWlircA4B2gmu9kvmlkYF1wEWNnRgE2jsUtsg2btIm%2BcvTRSoet117lDd95rUEem%2BMwejOZutN0taG4pMpcZ3dbXbS6wIDgCbM%2B1fhNDr8FWvey3bKPUgWf5S9vUch4CcEEWODW3oYPhdtarbOYnK0MSI1Lj1p3rzcBT3qTQhIA7373I6gpr7sIzJCImupBmis0kU1el%2FvQ5uy2dNoLaebpyOQTHHpj%2FPIC4LQbydrfNGVtrd55pM2RjGFIGqUnR0xGeoEQ3QonbKRiylJEMfRdsHHPedas%2F7org14QhepKlqRtKb0b3nmwX2Mtv0BpztGnFINOMti6o8EkFc7wwCEfzyNX7vufaxEEi5CoFvXZhdD7f0jjfYth6WV2pxGIjZsgwC%2BB0wR5G5faXBgo2oVoOhqwPBVQzjZIUwoA8JFhLYJXUofLJKEcVBGlYdJHthQH2g%2FucHz6UV4v8OqjSQmlO37WRdhwF0DcXgH8M8pQ5j2Vde5pHqF%2B6JfoiO8lLCHTg1QxwO7obWbA2HvT0jV5%2B1haO9t1gecfhwyXatK2XdhXFFR%2B%2BrV0jM%2FK7a3ATfvNRbqGTXn%2B1FNTOmw24rZ8XprMDsaGjKb0tn63X1RL3BytfCOZwypPywXTUliSr8%2BMNif378GOqUBEYzAF88FnThos9sBNZbCJ8yMMTll3ESXCUgBC4kjbcd1dI7AJq3ii0aecRRRiRja0wcpM8ZLO34AgEom3qLPdbr5JnYJYcQ9sdXEXJ8G3LUW9Y9BBgcd8WwGdbt7EtlE6saJQWd8UOb6N2DdNL246JYF51lEZh2FzNuNEsD1sdh0pfuZTkXBE2NdLaLnv1F%2BTMiia0ruHAVZulb8LPwQDL1dwvlK&X-Amz-Signature=6e7a29c6cea8842de16d0f670c918e1052c905883f08e84c687ec3a84ff18860&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TENWHNI%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCgcoKZobtoYqoW9PGWo5UNxyGGbJ6Ltc7HTH0YRp2qGAIhAMz6yRr9v%2FVY4da6NRld9azxNfK5zX3T%2BPGlLk%2FA03m9KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyimjINQvhjgnV4EZYq3AOrGwsUkOZdwXbQjDBcZAlyEMIgxo2fzcWQNI0YT3ImtQ1Kywiofxw%2BhQ%2BEudeLfVEwsgfXjuwa53R961mhpEU4WelTV2wRTMmIJyhjomaZDneTiXc6CTgsg5pkBhaGJ3sPZhXi%2Fqm71UhtkIt7rnBpRxJ0XPxmjciO5Qp5oZLh5rwwL0oNlCUJEsUF3I596FPTp5etpEJW8RunmL5yEHQgafDRBfoHwSYMsQvHYIYVVAbsU7%2F4AsZSyNF3f5ikJXmlVA2yZXxpMgqt9ZZ5ut%2FWA%2FZIYd8C1aLyPcZfyVjXNEGvs8XcFl6vEJz9C2P1syIsl6bRwd1UoGrIaQ%2FBJKY%2FHXD7TuLxsjaZuuzIfjIsEzHjhNEQ%2FF9K3cdLkw%2Bccwt5qmp7JuBWX%2BbGwz9fMn%2FyqEDnvWKBm9OjneL8z70NHwtCSfSuVGd2xv6cj2grM8qNouUZjdcy2MkO%2B8yLjRrhYNOBbn%2Bk9AL%2Fw%2Bm4MJcChSeCVJ4kH9a9kNowcOhkyIPNU%2FUkhB%2FCzmCy08g3khOkuyQ%2F9w9ZR7sKTnr5WnZVpmLLwci2O1vg7MLCxHnV0U%2FS8wm2EnE22FWHYlJUlikA7eVptp4GHq7EznqF%2FBeY68wZ5ky1lpnDrnde%2BDDvoN%2B%2FBjqkAV%2Fx6w2b3B4OL6Bi1XM5sHg7AWSW%2B5mGMBCCzTRk%2BJ4TB2kDQpbcXxpbrnsn4VWb4dZqxcpsSaRPxcrd7j2MdzSlEKL7rIE0EMHnbHVG1fFJ7lAHmUqFQPQji1qvXuWi8g6Ue5%2FPH5Hwjn3ydlg7AmMlbtzk9b24m04A8C66g3MvSoe3QWw%2Bs69TBWUWY6bnJEV2PPKKZv4kdncaFhVgPwavS2dF&X-Amz-Signature=b533509661a01b6a13673bced352c6dff849bfb98bf7171dfd4a7db6b8e74f65&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPBI3ELS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEf02cf08hKOLRXS6c8BFBvAX3xRbapeOdhlCTmabRsMAiEAs0YBspyJaLfhBus%2BdlaHCQAOjoS97u98YZH0pTxoZzIqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1df8mdRXgFfIp%2FIircA0PbP0lKeJg8XZMaz%2BZw%2BrzafnzksnsuQw33bGhy0ILYO4gcS9fAIjJzZ0Ked84K%2BMN7BqxOXJYcN83nUvaqbEPC0yW5TVK8M9GAbRxpeIIiw%2BdFBTBONM1KaT2ibf8AzWtYNkWi8dclQE9BnKdWuAeZ00RB6U9NZSPSjfWSv5AfDwdhJBATCUKvbUtQQAX5VGdi43MVmd2K4rN43k3zGNM16R6I%2BhR3qXvCisKDFMBTp%2FMRY5SCy%2BTJHkCVfx2IRqH3w8CWz%2BLCs978gldbeloVAeoMlL9owU4L4dBmni8WRFeKp8cL5VthMGqx%2FRm5a844Ju9ZUkf6J2SUV1vgs5xiV%2FFqwOOMD3bDydLuWerrN98HvWy52AGRnfIM7XcOZWaJhzLKQDbM7YOnD5SvgNl%2FtrwTxPIz8HZKDLPf4VNqruuhOAw%2Fvsf3axl4sMIFQKqsyVn1p5A4yPp%2BDSU2nj42gMDTkzztxZU8oN0F4GYFB5vLnbh%2FQpm0Gc7i6vvXYKmMfQMZLXJ%2FGMlSOODk8Kd%2BFWOGM6B405n27fpen%2Fsd6nS63DW2UdMSF4wATQkqK8n2Yrzg10oQ%2Fj5lQdh0v2qMOwseE3E2LSeRDTd1D5RNXsKhcggoKSlT3Q65MImg378GOqUBUEfoSC7h280VlnjYepFeyKMXB4Pdf6tuVQsM0EcZsV30ht2vltVpGZT1U1Bxk1QVfJWdtb5%2BUCU%2BOGC6EdLv%2FN7dPPOFGaZzdfCSfDxE%2Fn2Ph5OaZYCz%2F29PX0sgxk5goOJ%2FRqmTuXKTByoTukwChxmJ4TldTnU%2FfQileaj8KKTZiGKGUyq3DIFdX%2B0D1bey2itWDIfQzKCYcEcqfXGokh%2BR53CP&X-Amz-Signature=1d5a0b05e8785935e7dd1764402f3915c31eaa426f614b11d8a15f869dc87625&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RODRGXMA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDYAt1jVfZmKTRGZWHskEqRE%2FleqDtZDv5o6rOqS7TtBwIhAOpiSzHfvs2y6Pk1Dcex6UoA4hPql4fd9JtAellzFLgvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdQyG6us3z676bvxIq3AOZcCvZ%2F0KmZXZYjAZzjHnJ50uObtW8JbEZ%2F8NYD5pGeZ%2FtJ%2BqLZAoSHYKf7yAudsAYMstcEqJ3AodaFG5WY%2BVeqhMZj8bJJsYE5KnnmWjZP%2BX0xrH0YGw6gRJu%2Bw6Ob9g%2BlRARkXBrCVP84rDRqSN%2BvscFkVnqNE0F5V8AqzC4A4YN0uaGUHJj%2FVCIEERbPTr%2FE1mLc%2Fa2K3KFNQ%2BiJpXjpBQnIBld8ULudVQjCKEU84F2hZHkFZYDYzVhhBNKeciXK%2FpWL%2FJIirc8WB9l5K9sVhYEx%2FT2eaV3EdAfpZMXCLxl3ujVOT%2B4pLwFPS8KifpyMNusjU9l6IhRkwmXfZQZ%2Fa8mNce3knxlQGNHzFXA8UIVOTiHnHM0DT%2BvmIyUSzswKpzXuQEIr06rBjv49btM3Yw1jSmG95z4DIvk%2Fi1P3HJ4cCSNamHvymA3uvQ4HAI2Ev%2B%2BNEs0%2B3gldmYivGPIa3WUphvdG0HSJfrcmNj0Y6hCImfL5tRAm4u%2Br3x6dNVho%2BZJPbLjqLfLiaL%2FxrlrE39EalSOc9d2WbadYjpiOExoSSbtq5N%2Big1B1IdekTtSZaHpvnrXzA320BOCf%2BzMJIUREC8cC5SJ6AW4y56Vx0l3nEus6nzEuxCZgTCaoN%2B%2FBjqkASo2gnIIwFoKos4rI7P1XVYRz0szQE0zt%2BD1vaPG%2B9wkj7PHdB%2FD%2F0WmNCByz6wU5OPh8cpC7YHu3zQS3Yj7k8spI6ELHvT5dUiicoxIDOm8omcgnyoMsv3k%2FbmSWPbQKifcPeVUZvQ1nL%2FMEpVy6NaxVCZ3g6JhQK%2Fqh1crVLfVOu39EvQaxWKwjNsFi%2BdWHACc%2FLgV3XJn%2FtgfsZ0hooHD8h7g&X-Amz-Signature=e7725f019b67055bb3537b2419c43b4d555b6d19d25521b4923382b4536f36c1&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6ZNSNS%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDfkTXNLsOyCXjJQ1mkaoKEOvB1uhc0sQMbgsxN3iztiAiAKwljynY%2FPjxeC8rxcVENsxBfNKXxrGntyiKtEzkf0ECqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdDrHtSU7bzeFd3SrKtwDr2QbEdfVp0bPijl2%2FAvF6q%2F1yb4lnWdsPNrcVyirjr1EDmcS6WsSHdheIltLaNNhExzB6qH8L89NDbnm3LhQPcCgInuzmTj8rFPhsUSTOTp3EN6Vle%2Fn75UV3WTlFgxZMTTuPtClpk4YApwr4COsIKUieevpcXLl0sdcxkT7fCWSkTIgeTtj9%2BC2pMrKC5CCW%2FmURN6L8m%2FLCFYgaVZgaxcNmFl7vSHVqSS8rBp6ofwA6ZGuGX9jqIUJGDsbb77uscjw1ivLQbGVCA7QX3UFCY%2BFvOsGw9VUwYCy1OmBjB5j1y90IbkaAOiMB8jQ8H2vkP%2FlqsRPzQdetmm3I7wtM1fr%2BxrmA2oF4fhMckOPCtv3pwGXE44cRz2IgkENJS8Xt9fkfbPUwTJ7yei5RIQidLFdY6w%2BLdnlAal9a6N12f8OXwgNhaOIMdQqc9mZfv64OtonkXB1aDA09u8QV%2B1MG8nEZdH18LZNdCPuaWh2Oph%2BN7eWx46ZNlOmeymBM1x%2BSCh0OJA8ewDWx1VDv%2BmYtWkJZpKg3bvSEt7GDYmxTK23BbNael%2F%2BDna3ELSmbaighqk1%2BM3EpWh6L7DRfIOKVFMG41kToFkszG69Oq%2B%2ByahXm1ba5JMJPzUG8xMw6J%2FfvwY6pgFDfwXyXvkqDuB1zrnOxneWGt4lLXvIXoyFBv2Ik1bv29EXHNk7FU5qfZVDUyvCW18UnP2EZAq8PfFu4jv0e2leoi0J1%2F5ugRFEr9ST5o9mcV%2Fh6nnTbZt1et0Q35c7Zgl8fHVDiR945XceRGHVnm51Cm2ax5adaQVNpd9Dl%2FbJYSdlRGnajhE%2B22PEmvFm3MvIwnJNfEM%2BD52NDUTD%2BtmduYc870Ml&X-Amz-Signature=a4c0b43d36dc7158b55bf98dcc1eefcd82d51a5b2908b81ac2092b32880966f5&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3X4X25H%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHOjIFqZpRPxxbpFgADsGIPc7bZw27OK02tt4VnPwvo8AiAgNwmtBx%2B7TojtSb1bg3rhURMDn4iihlpzjd6yyiTzLiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtVlgoU41CwB7IkQnKtwDbFdawc5CjtpEgK6YzkWZ6XhtnKXAQoQh9vAQk7hU199Mi5M2%2FVd2WXSKaAgoqXHQVHPilrImqlzt4LBSvto4ksYQXi6aezVtW%2F5HIKcXmSpDml%2B0waMsYzgaX7vYLrf84IbaTpOwfpLVcG%2F%2BbTGbztbBxFvL6hAg6W8Ea87bUGsvWm8R%2B3Y29g%2BxEtg482pbs3dmfE3NLY%2FDpgG6VdsAy960kVRIvW2LRFDmARroo7CtIMg6TGcy3xjHcCYx9e5He%2FT036GNryXkWNZM%2FB5NWGWNnoLNTqOZNoSM4t5oVAzEQRA0b%2FUn3mCADclfLq%2FnwewKxOB4IjDBxXPni2TsaNyNL7%2Fx7Y%2FCAs2SPT8xoYvE9I%2BOjCkdnazK%2FR3KwKKMdypN3IW4JkhiKgn9wrvGBT6LfPTwUq8qxetsM%2BTGCiH9sFo5vHm36QRjV7XDdUyyVeU37fIP%2BRRBEa0LUwJuZ6vvcHSC6JmV5tZGX3%2FcpSaWRPPc%2BSS1cQp0Vv0TLydnVyT2kx%2FkrR7A8UAmCjFP7uXkPs4oqE9nslIp6xlNusWi7nsiDoqz0wFvgHY65LTR4wRVDZtv0FRIJtLlXzkIhlZCpuQtlfhWyKjmUQC7U4piqXHG%2Bb8SloANp7Iw2J%2FfvwY6pgGYamsy3CrYY5j1zexCR5UICOWIyR5UlVCJ36GS7pO3g6D2N9GW6a6KxmpImPL%2Fo4SFx96B39rvQLxeBbx64RtocO99FB7kiaksxsG%2BVlhCeWmOhVkkiLn6zPrqaAIRI8P9JCRWMHSFVp56ETFHXqw4%2BtxJQ41mzLPjjyUt5DuYRvusclfbEvv9MhyykoxeX8F8wvX3LlzpUrX7UXxhHC%2BgMPNsIxXC&X-Amz-Signature=883324eb63b8092ba4fdf0ba8facf95116e1a8743841f426a26778b87a985dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TYOFKN%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCvEmA8FufPf4erhw1J%2Fwk0jk8GgOhbuLHXo%2FYLLFWGDQIhAPBJAVUJU7g9UEKJI5lFpeb4qya56dL8h4I7ElwZ%2BXXJKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVZxHjwq%2FjseTba%2Fkq3APBAzoKEDVf5mWXpqiEPFLbB0qwWo6m%2FnBznzTP9vjGUSaqpSRce%2FfgsWs5F9W55gAkjhnU87uVFPpf4%2BiiOYE6koUqU0IA3Nwrd4dDg05CZ%2F5%2Fq1xQTIGk7GOG9KwtMpeZI2c%2FAK4z2fSWuFaF%2BqSNvwvNvb4G3wH04RIwyI%2BbfGmGs395b%2FMMmSzfGNMrJ63rCfXo3cBn4HD9D8oNzwsYOc7e9ltIXz2TtSz89hxVEoGF56pQdG8bnkaQd06CvM86%2FSzoAg%2BarzhCW%2F6feA0h3AF4xd9lhP1Ed2g10idtKlt4kfvV0DC5XEkYdw4g7B2jAKPH5lApEuh5M6SXpedZok1RDGJ9r7Xi%2FyLDOmfwYirc%2Bfb5ToUjcdVjWUUGYCf%2BfpUhkAGJai3s5Bfdly29yM6moYx44qRlz4wo%2B9GYZ15UaVS7qeqee%2BmkNfNH%2FG2aU%2Fpz9kJdgNGgZ%2F8bqgKo7ajvuGlbssvPM%2BFWFNwrTjvmWLXnjzhtUpMERX6qwsBLM0JjJAmj6JunAEu8bwiXCyNwYoHPsBgzdG5IAKnIZ3PqMQnqIbbadZ0MdzRKwxN388D9hSMLrxd2MdloFuUlWUVcMS1dlW1xJOqVVP4Bz5usj%2Bs87Zb%2FfIKiNzDtn9%2B%2FBjqkAQ3O5wloQl0kvIluUnmO2xwb7%2Bzg0wDIf4DW05tuINkqa6o%2F1vTkos6XV7Jl2eXBtAr6QzL%2FzuR5lNRPFV3hECUyCqOpZ7Eru4T1gjMc%2FNqTBxk%2B9PPkkyVYCVh76r%2BnmY%2BgxnMIyeMM7Dqs7tqO1rPuQkijej4cPMHrxR7KXnvIyZOAEYm8V%2F4oYOMu0BAm2uTieXC8ZMpnbAfYcyBoPA%2B23WX4&X-Amz-Signature=78e56d3ff4e57017401948707d06e6987ed5578aee4b754edd5e2233485bd448&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAXQQAP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T141225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDfrVyN6EYM59xKgFDhJlzR2aviGfNFfGkvDB1%2F5LZyNAiAkF6cdr7t7qYj7HVCYDkD2QQ5ebCcl9vkzZsoKriC1QiqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32StdgnxKFhSyqLeKtwDEJe50ZzzzSh%2FQ%2FgvFs1Rprbrzv7PMZKL1f0ysdiQHR4LBTH42nnz5wYjVHrCfVC6dIhOFYqMQOTJD6sTmKjhgK%2B7oJiJ4Eqmsc0BUWiUbcFg%2BJQPdEiDzvLpyF3sQSzJOwM%2B1PwCenFlOdHBZlFMhP0fk2Lk6k4cSYrqI6KS0%2BvQFFEfqYhWunGqar%2Fcui3X3fAimSMdEt6oNTMVV5czPMOBL9eaPgTg6AL2UNtZD93A1V7fOU8p32k9iTxKYOB1PaScOApzXzatEYoJD4bWRBvV780pW2jzJ3RmovYxq1M3zLeyVTYKBd07rKemBJTxAHZuhWq30vD4bpZI%2FFhM9ibiwY0py30TBxa%2FT1H5mZzVYaFUP%2Fhqma6LEBi2ef7a0mZdElIs2qLB6mnh1fOSH5sV7HpGtDS11p%2BSRehpPf5VN67LvoN%2Fodo%2FRfZZeXFrtOHB%2F7R1hwtYJ1SGe%2BKLU5b9YAHWAly%2BKoA0xln97yI0Ghw8WHAajhDWdVXpLfQMrNVQfgKcErOp4p%2FvZ513ogvNnJFcVu4ABIUdgdsK2NcEaelS0N3YNTecqPEYubQNgn2ZIobS48kfz43fTZgwgnY737chm3Ia6cUiGvSZ%2B7oD%2BSM3p6KtflNz0Hsw7aDfvwY6pgEWyvAuqF4eXLlHR4f8p8ika%2B9pzqFTjNo2h2yWokWuOOggk8HCf5mPPiy9OSVKuMfuMwlQEKQx5QL7oS0UDp2%2BlXxPRz7Zx0KTw2C5WF2dvsc9nJItleauG4Jp6wP4MgzyO6PGzryHtv9UgxCqmlbb%2B5o0L4OYZ8qqTanx4fQcpwbhaJd5n92fq7ixRXZ1ej7%2FvMBvRjV%2FIeyVWRWM2kP%2FxnnwFqNp&X-Amz-Signature=ef801b8e2952b24da31ee89dc1c8a458dc89972a84ba73d1c735f8752cf6dfaa&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

