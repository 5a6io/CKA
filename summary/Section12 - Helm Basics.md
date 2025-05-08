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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQP6LMWU%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE16x9gkX%2Bi2OVj5d3pZLkIGuEKyx%2FUjwoctSEFGvbmSAiEA7M47rVTNFzE3H3Dhbzdsat%2FsJI9Jmq7XqKyJui92W0oq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJybzYt728vrYXSYcCrcA%2BSjyghpz7pMlqksoI%2FR3MgGgRqrxDaXTo%2FL%2FBLQzt%2BDUQtuw15rA0MyTWfUjTC855Qdzx%2F5erUcGuVgNvIUI4b82dM9tKFldxL980MOf5306hvCQgXouh%2FBB54ZEY0uWriKZvMf%2FxXOXVcb2CQxEG3INMuMTCdCzHkhTtn8GmyZ3hods10r0tdTEzxfy5rhE54%2FUFxm26SmPZQzVcJ%2FGy92%2FzKEuk6We7fnBDN2zw%2FmnTAbt3tm0LSzMDK%2B6eCJP%2BjSAafZd9QU9IxmShyuZ1SjrJJLB0Hw3QHbU22U6rFJY%2BYm9TU9aX0VFFs9ViJ5c4jxsSDVh5oPjthWd2ToffuR23deXh5AjdR9g6QD8BljQUrMIsXb7q8djEh7F7ji2pJa3CUm0Wo7OTX53RpP%2BityT0nshcotpO3tB0kEeRAfAdHMIT8bZjVKoOKKV5Fudpq63h97lvzzx6Gax104wWLf6kEa2VT6lPRTbAjD9Mqr5%2Bv6pBrye3g%2FahesQUMMe58MXZUZV1jPhySWnND1ZpgzW4q8ok2V3imj5sTR2FPeSzZ6pcRufHAS1H3ia8PhzD%2BjhJPrsle81k6oG2P%2BaTUd3uzRHdJ1U%2BYNL7ujeUgrbmZLgnuRwqtorpyEMNnl8sAGOqUBS%2BFRLUZwOilw6fCvdCBM1gbOeLj92mjTNADdi8almgoCHIHcHoUWCZjH6CSEX8DHIp8FRFHV06fMHqiM4Rr3tODP6swyfepvMCWixrjhnj1%2FJo5eOVf8hlpOvEdUHXjiCDsjwvxMTAlNCjt%2BL17vxC5mna%2BsNm4Jwvcp1UxVMtLUbawiy%2FKvkb%2FEO3bQYvcE4nT5hzS%2BwNFcxfMbfVR2ysMr4YYP&X-Amz-Signature=8c5e89391aecea1fcc1aab318ee5b9e31aa6de0616892e118e0b741ca2eb6163&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BHN5CPM%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICviUJSEbJ2tIvgMJ3AXXxDE49nOZQjAybHNTAkhjxbhAiAc1%2Furfwjbh%2FQjyxXOD4FWPqkNQSI2siood1C0kB%2F0NCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM4X2lI1%2Bbo2Hl584hKtwDGDcov02UeCeChe3jRPqqztS5%2Bp%2Fnqr5VrJlFAWjjE7h2fXreONnvCGndDF4fpU6nUnSpipW1XDUsGF1jH5oLjRVBkhfZVjHK5g2%2B0fhvHg7gWZJbFtQtg3XtyYrDhblkX64KK45AmlE3m1IZ9PDGWxS%2BCl%2Bn1hUKpezfFOg3Vvz8xdr%2FFRAVA8kXrJrpKJ91ESmb%2FcRJED5pEfvsrSw8DLrio1%2FPhBy2a9xBBfouba9gCApN9IiPMJovklHQrXJSnpbFz1Zof9JYLbzZxiOiIGq2F%2FEZq5swUqpuVIElUhbomJpOiD6v6yfPugT1X6D6LGc8Xgksoav4kQSzyQ6XYxXTEHwKfz7zT6Y4ptEhu38oynC0msJe478%2B8gTsuChUbfenV53Qrpmvun66E3OF2n2SPvcF1NlgYIRB4pETEEYvj6LraZ87qNOIBR738DsRMIDDFb1hsqO4yEzAEou%2F7rtL2apm4xf7Nym0knu0MG%2BUKi2WHs%2FuLBSo%2FgFRF0LlQ0TCX6T9q8dyOnnJS2U4oUFN5tbmxKQGKuIvBxLAyGzFUDZJmF4Sj3fG2bzmP1DM9na9oaZ1FAj68024CJpsqRxy2OdbJwm70KnQePmCc7VLxCojWtiJCLRxb8Qw7%2BTywAY6pgHFtbInAsAWyiHRtOU6JWjj%2Fo4aROy8mDLhUbHLpszp67w%2BD0TjUz6R3xrA%2BvilKcJJuVO0uK36DXoRHmhtnDFxbkGR%2FKc47HaGTGadNjq03nPlUwlYW%2FbmQlZqOJDpPByB8Vlqn%2FB9KFjBy3CwHYrJjqsa4EsE5Jgyg222Yzwgrwq8ePaGK9Iflty2ABCa%2BsCXBu3ta1wJQGddkXETgZpuDK8dx8Yv&X-Amz-Signature=630cbfebebbc10fe16e1e2a6bfca415626f7f26ca67f3deb5a4f7b70d194e172&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MBNDAVC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjzPJ8nxyjEjVJaFUKtUkNKF71Wq%2FjZU84tWAyoMDNxgIhAMcOVDW6CVwGecLWli3bthoq3QI7eb2bown61fFyGjfJKv8DCHcQABoMNjM3NDIzMTgzODA1IgxFLzed7KtdGatbLgIq3APt35PyKZkfj%2BP1vYTKsOBSiOKFI3DHu1YKHmgeDyhdo0t0X9ikgz0g0eU%2FiLuxPlZt1YqQwjsT%2BOJdNBRJ1MpttmpP8MEVr%2F8PV2PeGNHX9UwcIoWTuBGzNpuAZDZtkzD5um%2Br%2FcWBsEaM14QdMA8qiPeQWOunAXpwebB0PdXtrTqvm58u6WGx3tQkJZVrg5vFrtMzTj8DOg8bW7jtbGceHgerSkAFeK02zTzjulqUjqkLsPzSLZo0FzuD1s7fOPx0%2BSPK40kiAA4V1uFfzkz2iEzVCMXHVpFZUpYFHDmXLPsIAFshoFuja1K8TELmXgIOLr%2FE8uyf8%2B3sVozy5vPb%2BK6tOh4ACa9z9e8Z%2FyZX%2Frq7QcjBEYDjf2k77evvZA7dOFGYpBA7wO4%2FCj9tS%2B1QtH8ixwxTnk6LmFzg%2B7cWGr9ZlifvX40lu3b877GtuWmWhqXUuPrPDusY%2Fs1nGqzE%2FvM4ZtYh70B3sHx%2B0SSRIFk5JP4LVmrsS%2FKvt3f3ULKDu3aRYffgPDmi%2BBHe05z5bhG2FaJIC6Uzaz%2FzVOCXGv4Q4RpSxW7Hok29FP9RqvTh1aPNj9HxUVV9ogBZEZoIYjmQvCqpyIRKPY9Rv5lHuHqoKI44ITZ3lkCF3jCP5fLABjqkAYGvIxZ%2BznK%2BHpNo4ryR0HHDMQw0hIqhgbhErpFX6coNjl%2BbQRUrVDr54d7%2FxjaaV27F8Ra%2BU2QheB00B4TeZeZjNt1w80CWkM2T8vN8OQUg%2Bh1ilqcWVAhpolqkPk79YJEjK86MOfNsWNejWiZAJsP7O%2BGyvBCYBogpvh%2B%2FF0AU6cUgiYHDLdYv2kT8%2BSL%2FnJJzYV1NbfDYj7%2BvdrE%2FHAN52zq1&X-Amz-Signature=8cab71b77ea91f3bf604cf3bcaf475c49b0c3f54f996d4d42f5a89de5e7687df&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQXSXTR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FTIT8ywizbITtYRBEhIqvMqowu1yGjNQSsKP8RgjI9QIgLPOFbLcjjTQsgDUwIT84l7Wfzb7y0prjqDJ125h2BcIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDEVf%2FPSjfoQq0muGHircAwvDoJPNN7eJGJo122aRdzvttLNxGxaZdIkyG%2Ba1GL1z4%2Fd7HJMyryL5ZtyzSASUv2exVJOPYrP8qvQms30AxcSmnFPA%2FC6Rh%2BUQKd1g4H0Z2rRsAUyZTHxfGd%2B1x407XwZaiZyc1aeQSmLmj9NLYSsEpTwwGnCvnG5PLAL53fiCoJsv5hIiKuMn7Jw4iMcDQabD2iatDapbcs7rzpkbQFCsAWZS%2BViS%2Bx8YIFt3avyBz6GIfSQyhbbe9I21PFlyISveqbYbHt3VcZqzohHv3Vq%2FS5QfRievQ6y92dkKPkMcxVesLdJj25a7YK6h4k%2Fm3Fvn1UPL5bNI%2BY81axackNUTUDozGNN9gGl%2BdlFgCg0Dwhnpkgi5lfsLsVGK2FNMmcaBxKJ58fcdAakKJVTuFLP%2FDyQ6U%2BlIfFXRezzp0%2F%2FVfZ1WUtMNtudheADsR205F%2FdWGlpPz5S9lde%2FE%2BRKcHb2%2BNYiEuDyNzFRxaMBcWiqaeayA2%2BJouTY1SennsDAWi0gARG3I7ayNr7OWip%2F70xqSa9MRMmW2HoOTwiUeqPshFLQcZFlY%2F11Nk6efXlC4iDFHShEtWslHvxkCYJJATbXGTPZX3Icn%2FORrEVEddB52FasehKERpzIYYu6MPvl8sAGOqUBSz%2BdeN39%2Be6jM1E9G2yY7qUDOcSjc7nmMBx15yyBeitEB1Dh%2BhG10gQt0O%2F6bQ4uxjNv6q%2FWZLuf4YSv5xKNgm1NmgM2MPXf31mSF2018WJsgtp1S0HppxyCSUfQSWemjCCd4kJSNNf8ukwxBE558LnXpXpxvmw7sXZAqXD5zVSxWXkBfMk%2B0KNAuH%2BKyCqC%2B7H7lFH6iTcD%2B30hPBse4rGuzmRC&X-Amz-Signature=e20b5e2e2417ed0c9bfeb5a742469975976047488d5d724a2c5ea1766a5be818&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6NX6RW%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5bQ6eW7H6ZVUtC4FWNMN%2Fpgs6gRk0kh%2BZ6tgVmqQQ0wIhAM2QIttEM69o%2BinIObR2Gr0gbqvBdwm4ryBQ2OzmahVbKv8DCHcQABoMNjM3NDIzMTgzODA1IgxNgFE1EBru7RqX9p4q3AN6fyOcHLNfzTZxtx7MFJmrmSK69HmGIjfcd1wEoFvZOuiqZ4ndPWevHvIYAYufmr1MUt2WALfvjHKorCgvdjdggGmegUgOhjvarijmYfwA9Vn2MkSG%2BtkSUxh0q8UjltyFKTxXUIFfBYL%2BU4h0TRHv9QYbsXDylQIV%2BtPz2ounaLFC6p1l9d5CnZPUHKg6OZo4J%2Bvb%2Baj3HKcX6KsMKbM%2F72snJI3kO8Ch1eUJ6yLwvGswVLg9iR%2BrXjM%2B%2Fg1mcnV%2FnzZIEoqYTxouwvi4xwI0Hn1NWGILK37nUqPcnxaI5AtgmXvfZ%2B1TFVwXlbf59X7q8VOvvOKn6ail8we8SIj3vFZO%2F6%2BjSSEn7q71cWzn%2FotYtXaCTQzj86ictePxzO02Lw4S%2F%2BgGqaUpDYxfQ6oSIBExNo5AV6b7JziI8InJS%2BQZNyuN5zD%2FpYMcX%2B%2B0q%2F2Iqdyj2Cn4IzvdHwoWyMDousOyiFzPwiWFn39g4mpduDDPxZ4jZHxIXBVGbaw1kSVrxmtH3VZ%2F02eas3AbhVGGY9YOkOOB4v37dzltOZaILXDv4%2FnM26Iwn89mB9eRpQSaW33b3KoY6vRIqsoxRFx0mLsjcyzC2DTofoicsu6owu3dtd3gDS2qEK0oMjCu9vLABjqkAai9PB9K45BF9Nt9Fa%2BVyGkWkCMPTSjbmEl73xndWzdJK1GFXlqlClIau9GfM5Msl7KwVEurHklZnDRkvfoRFH5FObQHr6rYgP7dNBOn%2FGnVTz0beNu6TjAMGayDkNZeij5U4S5MG9HdTBrvkNo4rQHysMMFSFrLB%2BC0GO0saxQqNwpvw0Q923yPowC39yqVqM6B8r2YmkAl%2BGwgtd%2F1mZCwkOuS&X-Amz-Signature=a2b672ba4f1a8e9d0c0a7fa8fae1bc40ee5bcdd7c075a8d407f66dd2b9c8671c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EETZYRT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDu0wilVA1p7jMfxXM0RPihO9MnPKppC5lH0Dj%2BnBdOoAiEApbPVE6NbNmOHP0l6Fj%2FmBDE5OPC611mbynIRNe%2BEGeAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH02HAGPf3hLHNtz5ircA5MnioGPkpTXXQahmgouJbnlub3LFLvhmmLU2vOgKmIIz0DTjwp44S9bXzSjiiVmkZLvOg7wx7Vb4wxVYHqkNQjBBUiKWhteOH6TwKsTyA%2BOan6ROFOFC%2Bt2SUiBl651Zdfsa87K6y8l%2Fpyi7Z0Q0nyg%2BLR7X%2BllI1Uo6tEWqKWT35iHN%2Bn5W5SkbEyROpzd6M%2Fc2Q4cbHExmWgLwHLIZDBOssebfcGgx7dc94c5Y2voIkBAC4YdHMqBIfD2EGQp2WF2l%2F6cxvLUNd%2FmX2ftJV6MCWkuQ9HTd5ZE2ILvZmQuGR2TQZ2lH54BU%2Fz2dCJgHMrX%2FDYUabvXdq%2FkK8jzBrWrGZkcQpL2hU8WVy6%2FuflN9%2BBGPv7BhvyTNw5h6n4iI2EKb87eXozis%2FBqB8ts%2FCW3GMCoGGh2GELWAt%2F%2BUfw%2BIJHLYvnjaOgEXGU9yVXx5CRrhH43AIOEpVLAq2%2BY4pGhyHg5B1XX0c2vlG0lF8tCexj%2FBuiZqJDxOlkgVMI78MPgvB9R2gH0%2BZfLG85Maj5FTZo%2F6iAf1AC2NoGmizxEJ%2BnkmwdjaY27XbzHMGkC5KJdnrjQm8O%2Fe0inwFFlomA%2FQNxtS8dos5WQLm1uPNwuRUnX27lY7UgDP86qMJLl8sAGOqUBFHUozM0ajNsW9JnhpR9YcEnVutLwE1tCBnKsIw4PMuhWKZFhcGlxtw%2BlFamj1BbYnvo42Jk%2Bish5m4dGojwIIZLETse4hPktjst2idshkY1672qeXweIiT8yAwxZTyP7npQasez%2FX0Nlnc%2BQU606p3C%2BDRO8tSFuljI68C7T82Dk2l9O4PgTPeOc%2BwAEGRsXqr6r1V%2FI0JhpktBXhcHExjQxoAz4&X-Amz-Signature=39d65dc42089e7615e2e4cd38db90f625014cc44c279742ec2f17b833bd0fead&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVBRLB7A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD26s9RuTrIWk6qI64qRD6tJKdDPCeJxx7zwQNWh51aRwIgAzMHFOx%2FU%2BYjW4zfZzMY%2Bf2kSC6IFKRQ2yv8CStLoRsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJsTtU6zzZ8lNMOeVSrcA8eo8dqiaNjEUc%2FdL5x2O1YWZEb24rxlvZBO9I3%2BXhOAVLzgTZZ5e87esNa%2FA3msM4tvo0bAiNt%2B%2FPlrENmkBHnVze%2FjGkqDE0y97wSFW6xo8hEhHA5v7PxRkYnaoYJnt4lh98d8wKSwc7MEHccqpq5ITRTx%2FgQ8mLrtK6cYn63%2BqazK9jPQsptnIovq7XDHke%2FZGvuf0sOWSXmmisizjT1Yl709T%2B4WSkfzSjKH%2Fn%2FbBViEoFKXAVAfg%2Bq3Mw6PG7Oz3%2By2dA%2BdE7zHkls%2FbAwVEuE7pEE%2BAgedi6fuJEWeOT6P74PQuk%2FXtr3acGBSG3hJvnS%2FmtumuyTH3U6nxDwKHX6Sfc2xRWKghHKy%2BnNm3IrPQFHORUEETRlwpHhWD6EXLSqoaCxHcKyKu4Ds4p8Y7dkAlI9yAqbfokoY29Rh7GYoNdg70KKHmMLmdLed3HOvRCI0CUMj4kwSWZClhs3EVMdrXa1Nya0y4SJzaRp79w9%2FbgLob%2FXwWKCeGimyQJnL2QWdhWEv7yy9JROQjTbSpbl5za35qUx2YssUQT5ioB3L7PRWnNt8%2Brqs1PG%2BFCiNqOmbrpuw4KxUS7rtXfuTZe57bHwBR5gzXrkNHL1uLpJAmLnHcO7tm9LeMK3l8sAGOqUBoREv7NF%2FRTYfWx2SyfcCxNRn7rW05ORn%2FvGyVrQyONdrnZnmwpTsGa3Mr2UWUW31szFx7b9J6MrgsR2Tj%2FudNvz5USGRnR1iSKkHMFGov5YjroYFfv8Kf2vsxkOTfk4N1B%2BxOg6YLTiAH06Qzpsz2mslJerlV31uhBmUnZhipk4yNj0AX4QLETT72ig1Xr0X8YcWcgy1mbqEChdclI4cRJTLNgK8&X-Amz-Signature=03ec7d1874a6c51af75ee2742fd5ec522310dbf32d42615b5104dc9ea35b0947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHTIIBI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgEySxYF0IEPUasLsdw%2Fl3zKxWcezLbRhBYbEp78SySwIgdwQaxYM%2B5NiThSihV3mZf6EQcRbvCOEryeDYxbg78HMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFsHyUyPoEteEOYhmyrcA6IJoizgpA0lmKzNNo2OSoX%2F%2BxsLx5WOEg9kReFAKlSoQGoTagCWXGAwmImf%2FYxKpg0Y0StfcQUhwfy6krY5e4mOqTG1%2B%2FHJXVzOeDfLpqxJzqRrQhtGhjBMs3oCeG9ATkYCU17UODjDxecYST7fTxWXMuBLqA05MBfQRt7GoZNfF5QCMJ7XWBY%2Flq2jMTRBNOd0VaBxkHUIWewlLM2NQfO4JW8whvPFucSllpFQQXd7iZFRZBjHKPqciwGhSqtf1Q5TlNNBUMz2zpU7LpkiwdKF0TkL1Z8e398zLYt7K7A8Y15fU2kWeP3cBpwuFUgSKZrSEN9JczE61HaEkWenBqFTjl7%2BggUPxTudIsZ2bwZIVpmqaH4YISAUd2bA0N3e%2Fj99AMMeXx2spfjPWyPKhM6sbGOmUw1mRcUmQnbMPPCVS2XY1QCjQsu7HUec7FWCIJ65fKOQRw1r0UJzv2KSV9uMtn59To78ePghX769A7jHLqrF9tkqvZLhjSjzipgF2mw3n1IfmN%2BPd2xveiX3rmY5WSgxs%2BEKBporXEfVU58UcoXxcaEp10zg%2BvLzI3RU0F4GPVzFD%2BIpeekEnMf5L0AAxLjXGt%2F8opLFQMKmDyvdsv5mrWl%2FSlevt2fXMKLl8sAGOqUBMYPB%2B1sB7aGsGbEGKa1DhWefSyzo2h%2FvNnpAkxLYc3zEfrIsPJWYLw2kCceMdsb0Tc3fIUlJr2zd1dFo0HWtl8d6y3hkMbsx8fRASIodaCeQTDDg1sdDFpugIdaeq6Bjt8YGXhPMd%2BnvzBefN5CSJ1w1%2F8QRfdZoJfozIludsJW3CpTWAH7Q%2FaDohlCjbK8AoS0KPt6qz04hrFHpZau0ffbZPj5V&X-Amz-Signature=2d4a3b60d0c96764508a6c27e2ec906146c370643e7d1428dab65e2fe8957754&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC4SMJGQ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv55Rv11AQBolP4bpe%2BHxLy3C3%2FqkgX1BTUQf9NR4zYAiAlv1uMh1Th46K0sepXSUvvFLMi0NknWUbTsSwVge6uOSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMiRrLKJAj6d1zrc3IKtwDF25RxJ4aVVYqkaQVB3Cpyaw1S8RwE2D8SEA7FmpsLiQnvg1Pamq9LbveXbP6Yp39p0NU2G89PH9%2BmCFPBTrhLsDQaeSkLW43kX3yZ590kPQEFg%2FkYgPBaiXAdnyhAxtOJKfFK4SBV1uYUw5PRxmNCbB430eHrmDO0mU%2BtEq2TH4825p7QlX6LBzX278WQrbkUZyv16XPQ%2F2%2FOWr%2FVkhxjejYGrjvPP5owzjPSb6kDYHL08I72RxTvt1jnKlH1GOLiSAU9hLFIQcgBzB19w7wmPw%2BHVWEImnLB96iiFG%2BAXp5kJE2cooHlqAaaxIYaCXMfV03pdEUGfAuLrvsqRVgAUiNSD4u096HZLPu9%2FwNVEaDiOlo0zPHw2dD01d2i91d2xt3z4i%2F%2B7neToMeWI763iLFZr%2Fwfvnj14GZaEgOrcmCv0XmMm%2F%2FUwjB7PEGKG%2FHBjfpwExH%2F%2BUM1SlK6kzSVxLw0FBvMVBm7s3PGJxv5mNyidWZweOX3nDno0uDvzjE7avhJ5dwHNHZqPwIZxyK2U4FJRTlEPPU0zRg3HkK0dr2iXdjkRK5BdGKKdDyhjqzA%2B5fdUacZMFat0P%2B4nG6g6OnMQsiQc2WQcmwVncbmFCjWPCPH0HLNtYvVeEw9uTywAY6pgGLUa9uSThsiUj%2FEcjSKh5OoIQxjHbZV4ufJkiqLiuyW8nPCom8pOA87IBQhtIoZ8qPSyvYvlX80SY5exdIEfd%2FDnQvXP2U57oL7NmwkfZ7sGilPNkKANvei8FP%2FWjRTNB83WRckMUy34FHigg%2F5RTFHXuYxXRkWzhiq2ONE5RVvegtsleMElU3UZiLcKP2bAEj%2Ff96%2BTXjj7RIBy%2FPQrPLdKqW%2B%2FYQ&X-Amz-Signature=5d80b2f16b9d469a8ab111cf50f911afd5e69a50407d1441398c322d3ba3173d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

