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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDXMXL4%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu%2BOcSEVMCNNYV23QYkOREyYTWoMWYFbsXiJzSpc57GgIhAOVIl3ncwl9fZ49fP7d5NqhingpZM1FapkxPf7HcBvshKv8DCEcQABoMNjM3NDIzMTgzODA1Igy9L50R%2FIPlhSgvyT8q3APWzTRg6pbn%2BgIEcdUg2dKA2mknY%2Fdb31kdHIM1WdmqbytEU32ZAZbTT3nFV5YmLDW5yF4oLiuMRQRqiJNSnOgOXsMdNOQZJTsOmhcmVvdEK4FmQyrs5BYY1X8nf1190cfAgKonXPHhZuipz0EKb%2BKRLOup63D443vwqs8MjkDDzu106mEtdzerCKJxKUpBq3LCPMYIzzv7Gw7uWjW%2BGkRJMS7hRPqSFFsVOd3wtbidECE8q0LKhIeuKu%2BAro9ol8KWrAi3Pi1Zi7u%2FUD9z%2BfvOAHpVE7xBDF%2BT%2Fj9oQlaQHaiugmOFubYotZ3Y%2BAeMwJsApSyD%2B432rJ5I7L49ji1S8l5KXHRZTl6mUUnWJVzn%2BBvoFkXiCzlbOl1inFqA6xQOhoV9apBoI9tsMc2%2FGv9DdQTNtfM1B6yVqUOH5ab2f8t%2FJoUAgWaK2yayGVRO%2Br8VNKY9GHRRm5WxXq%2B5Xf6UPnsLUNFhnesrCPjFE1OyO5F5X7JjcKxEJhxgFPnOVW3yrZGR37SZtwaSM0fqge4rFhEzRpcGiE7PfN7x1SC1dh2rBirXD%2FhWEzLTQnmwGo3C7qyfiYIpTz5YBcxSU5ELvcHaWMlW37j4zQTc684SEu%2FWdOegyQpMvba%2FATCigZ3BBjqkAQy85LgWFq3V%2BiIptCKzAaj14Y81ccyKNDFPReMKX5NJGvFk8gG%2Bb7irJPwjYZr1blJDcboGyWRyrNgy4jMWZmKC5OyxsYMYDbOTc0ExyIqb%2Fce4b0wnQHXk%2FlsihuHSDev%2BfdmMEmp54%2BBYX3W5I2ies6WYUwrABGRnkoMdXq9PdHOmsCz3mCnq9Sfxnypa3b58RHLeGgskQ7vi7VpwOs%2BbHxLR&X-Amz-Signature=3085cefd59425cf89b6c21c036abeb45343e428bd478ce7a22a640c2f2f76fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KNX2KHX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFYVs9RC6M91AGSJoVyzmpvl9UQcuOIKODQUqX%2Bf%2Bc6AiEAvafoArwWykMLiHF4ahNGX%2F6EBUI2vVOe6TVuF9hhAtgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDJbYxVWU06nl7xYG3yrcAx7wQmV50%2FHgqGu7oESYesbgvjjRtk88rBewpTxpVgrthanYvpCNSzBPORwWz1%2BMNa93%2B1az54nQSWbDOjhJvyJZy9ExHYXtGzpTgccJbN7RMV8%2FnW1Kdsl7e7p5da4%2BilRpT4%2BTFzOCq7LskbCWpCnBO1RWksiYPQ51%2FYpgQTeHMBGOABUfV7m4OQZOT%2BvlxS6VkkOZuGA7UTRuXgREc9Bwh7TQ9CGjWjR06Akbz7EOmA9P30ql9lfenHSikWNJpFzRBv66y%2F8aCnO3XKZHklVsr038nPFSwMQgQW6yqpI0%2B7UMac8qHFinfmK7jGgiPhnCUqStJS3WQh1SIAR0gH5pEiZaBK7Fo100nkiW71ADOefeY8K2yFfSq9kT06gx%2F%2BOQnrUq4RG4XXSDtAymdaA%2BdWhJdQxoL4CvevEk43qA7BlMi0Cp4lULGoharl30uC7c2aDaXglqJ%2FpRenBbd28bRCIBWhb2zGOuI4Vw8olKvw3AGBPblLnC8Raq8vz%2F5FzXqNJ9tVgxiaZRSLrsJOStZ3GkL9Ib0f3YryeTbSx3aBSBHmYU%2BtJF1M5cd35MZU1lYMwL8e2EwER2pkdOig0grwu9v1KYytxpP26SgzexyIkBydzw66m4ZE%2FiMISBncEGOqUBGnbV3O%2Fs%2FuTGHzbWB1DGmV3K1lvby%2FFI7Y%2B5Hq4SIOzOFwum6Oxnmy6p06EO2eu5%2FmDECEWcgu8%2Fnlz0oMC11ISJXejEL6dB3UXiG2Gm6VCe4BVcnM1ZczF27cxy1XWykZkpOrLpxJlZH2ALtyYE%2Bx6UJwXf%2B31lrhCvTLGTaZDN6S%2BbwtIXSnzj3aKX7BtJrbUSo9DoaWHgeDpMSpKCtxNar2qe&X-Amz-Signature=aa018ad549e0defb7040415ecd72571ab5d6ef17ea418c09aeaf60c50d6c330b&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNYNPAS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2B7LCktq1zIKDybi%2BlbRZ6bfubmUWt6SanGXdvbc3WgIhAI26OKvLiCf76Bh%2FrBJY7aga%2BJh0nogQL4IhCQZUFk%2FfKv8DCEcQABoMNjM3NDIzMTgzODA1IgwBGPhNkbJQFHCZbAsq3ANBfmyx5sFGvxSAGRch945CslcZSQxGNJH7my6vBIAXC0e%2BkPMKjm2%2Fppgj6AJPl%2BZO6Ucj7Ksx40HU5CVibna8%2ByihNR7yJCdnb6C3PLW172Kxq4PjxZ6h3KzRczePmVLszvx4Nj1UxboDPVRDR3QifUm7Ir1DULumZ1PY4AteGOlSmrXky6woW%2BDuObdWEj8EKx11jBKPeEgynyHWrx4SRzK9c1gk1GMnnDiqNqBrENeklSO%2BZF5dd8dwBlE2In26flF%2FjddARxQcK%2BCePgVhz5BfYtQL97e9XzOpG%2FGeNNPOAImZQxfgIWpR0B5yvB%2FZ4LWU6oooSW1IO437%2F89Myrj1%2Fj9H7QwDhbWKO2AAhw54%2B3%2FaIoCSkSvkB3IgNHXzChJSyHkj8Q1f4%2BYv19xWwKglMlWtAGg8RTo1YN2cIeHfSZ08U4U9tMlmZvJyxixRAb0l%2FWkXT1dVqVsPSmonOcHOjsHckL4pzcru902wb866WYiJ%2FRpf3v2hGp6PJ3t8IqxkCgvQyhpqui%2BncS5j0zWLoydj%2B3FdvA6CpT8RvshE7MPP8%2FUwefPY8aM6HEzrIz6M8QHt2QWiFaiPJzgTq5vkYoInWcvd5sqyq4ivhpLwsCCXA5t%2FFNTjNjDdgJ3BBjqkATavIg3BwKnWTGajMnmtrixjEWTetpwxrrL3v10xrL59UuPGe5ZWBgeo0b4eA%2Fp6jjx%2Bzk398t1nZuJaE72hpJJmfXWdGae1ev6UTAqpMN1gLKkvjs9MODfSLfvCjiuu7vNs72rmsgSwa25d1JJ4TvH1wtclp0WjU1G3pM%2FOlpKvhpbVjsbjWWgws0VMP0O7ZelWRBRn%2FZ7zHWlt7WcYn5T90Ol%2F&X-Amz-Signature=15dcdf78cb0d049acdae257f6f4c4bdb799ea2cbdf8dbede5adfc7a9e74e1134&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5RCE5O%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7zP4dBYq8v0uPVPs45J%2BATeZMEDDxh9fG1Fyx%2FkRHwAiEApwK9ZykIipOh%2BggPea%2FQQHRTpDXhMaFt1jMi9xlHbikq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEWR4zlDCUeqh3buHyrcA1IYTVRjf9Zz%2BgBvMhVQGdbGT9b09ySNmJsMk4FhMRyhb63tUaxjs0XYwcu7GWzXY0sD3CTezNcMnJw1HX%2BlNrYOM7CJ%2Bt1Mk82g3hV3FeLRM1ksQAbk3A3%2Fpc%2Bu1Y0oz6msqMLYjY3G5%2BAx0cxuSD3K6hYjjTUE6DlWuBC3deKO6%2BS1yilnUjjEIrK7aKCz7NWkIUzuUJ6v6W5YIym3sRt0K7m1CbsOXjrMYU0a3saP9Cc1q%2BaGkPN%2B9BQfEFM1wQFpTFIRbsOBuoHOehfVeLPxXNK%2Fqfleo19Sg25m4Re7XzMIXuUj3J0Nx5Fy3atrE55Axnze69eFYa7YKDB1QsTKP6Hd7V5R5NfVufEdDtElfeL%2FsIF%2F9HkgsfQDfQP7OXOm1UxDOh%2FFKgf9uookZQZbXf%2F2kQRxeP03joDHMbvHVsQ%2FCjWIqcBrr7qwbPjA0Dw4FIA9%2FCmdMorl5OzvUOmE9Rpg2HxITvXsWKWp5%2F5dVwPiWYfbKObXCu5n4e3p3u5OX1mPEPK%2Bj4KUkPgTapoyysS499uxsMr6NwgurfsPsv0Sl2gQ%2FI0b6IfV8uZIM8owhhByqgOwuF%2FzVmMucE1GvrJEqnH%2FyuvDGAEVzjs7uPxwPvvDXGk%2FXL17MPWBncEGOqUBzdafj9IWDDRDzIs4MNQm%2FyAMRpYy%2B5o7hZmh%2F3E8JTugHxRcicy1t97iRTUUAjDYG8xbuhGDyku1gYtVtj8OqDCKjOakQd5jN%2FTkgG3oWP%2FpG36lvSZd1WUrtIknXaaLR%2F70dnFIyRbPOdLMm2G7lCeMEsdGZI1dv6I72Q14hlt3Rmx2L3JPxLF5cVK9u6N7yTINMXVAzH8gBp7%2BETcsXOMjcuUN&X-Amz-Signature=0aca9168eee3be4e38ca8da7a3cd70d55f7abb50db19d52874f75a5241ae3363&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MRJLTV%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzJa1HKFm8vo8ceEGzcT%2F5P%2F%2BGwAUUIRvFGvhGshCjwAiEA%2B5kYCz7eJ1jCa6r2lPwNu8vVSFeWghmzG9z8GNPLF24q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDFZI9IMAvWuMJcUDPircA6cz8XB2nJ1Je4hBv8keOMU6uMrlriChh7YBjr4bS0LsWNDqfFF6YzRnvO%2BW0Du27pxDgrt62JPxgBeU684SEjYmDMXtqwsbqrqteAAj363P1U9hlMQZYYDJah8ik7nJtTRmlTGGT4n6yRf4JfaUbv2sYs0PdaA5IF1hOBww0HnjvY9OTvtOkxrDL6paua8TL2PlZqlN2HoDZ%2B%2BFpC93yyt2J1olgeufv9tbojFPfblRWe8ta5Js0aaukxCr7HBhoKaRmKaqR7qlP5TB6LIaPhkD3sPtsE7DdQ5SVxtFqteMT6HidnJP7cAvvcL7YX7Gxg8N445U%2BSmvt9GOrfKh7QRlNFht3hFo%2BPDYjWuce67r7P4bvdNDvQNL3cmDbBWaZGf%2ByUFScgOE1Ia8GpkoOYW5fY0bBvSTjOCk2ItqpJ5Ws%2Bg6wIGJMmMYbm6j3FP0n33O6%2Flr0t297bfYTxXxZrmORTN9C5GJ9AUyikMDrA2vGLj1t3jq4oorQ3FsXj2ex%2FaTjirKtnV3wfpTZTJHjJ0RFkrqseg%2FrM514ASch2dUN9h8e5322A%2Bdm7K%2FA8i2j%2FOk3rEDtMt2CgFjmA8fJ1sQbbVQPb235mna1dqBlLN7GsABHhawAgCbk48CMPqBncEGOqUBmmadlUCTlztBgT8a7q8gCXzHgOqsvBDOgieYlFBjhSm34qhYXTyLyun2IXZw%2FBzczjj%2BC3LvFC%2BxvDwlmyQTtXfc7N90y1suYDocDawIzWCEBSqPv3WZuCmSiX3YMCWIKMLgUN1zKy2jL4qav4Wl4tRtMoqifgF5HvLLmfowwvq0JmgaQsy137rUnoZPwwgDXtTz%2F3csqvx3UcINmmdNCBIp481u&X-Amz-Signature=77200fe2550c5b46c3dc31aefa9032083d9d3f6a86f870146382fdbb39293e16&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V47T62U%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgmh9moasDIZoODUTQkdHDMKtbmd9JGaeHFdLOt5YtWAiEAwrP3N0hzKn%2BEwZ4VhFeKUSeLlDS%2BsS9o1E6GC0UuSIgq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDGcv08BL45rSDWK0pyrcA%2Bi%2BovmhktTDqqAs1R9ulVJTs7vLQeNJirIOIYjveXZuyliLq1vhmOX1X2opg2w742rL30W7NCDSJ4uzTVXrrfg%2FY3YGTZ8iYxiY%2F4vWeU0E6MtedzeIFR58uElvlFL3KGtCjqnkr9VuzTvp9ckOt7i5JZAwkzuXe5vHSkWU%2BDAARi%2FQD2t%2FoP5K5zv6xDKMbe9y000IjnF%2BBMZyKOXjuRxY5ZQB6s8%2FJPisEst62ZBg8Y786jDnJz3LR70pV8m3ml0xWarcYOcv757HvbH%2FNwHYrkX59jPn%2BNTXNt6iDJQtbH0jOjLRy8MJVeDspgpmu66JWbM9Va9HVilyjWgZNe1u5Ayqy1GD4TqPhj06O8B6Mt72CWf1fcjK3n%2FdQ9u46MPfccwEiyTP4zm%2Fmll2KCaPSKS1joOi3X4Ntp0cWzaw1Ezag74psLfhM3hJKHAVjO5YwzHrbVccDUwqrgC4j%2F%2FSFI5tDV91Bo0wzGK0zgTGY0v6Oe7PH8ghEsFxuMqmoa4qWV0nDzFZ9osjST4T8okYyIU5ag8JaUm22Y01U27HmzyZVJYxiAPe5Qi%2BZ4NFQrvEmG4pGTboFirpFkxgcgwPx7yCOpjuZq35fPsjaGFKHdkMjayTzM5eGCMgMMyAncEGOqUBHRm3LN5sbstXQQeOsE%2FJkvnDaho8woZdkA6DPl8dn5fHP4pkZO0pUPNT24X9nD8K1GDhfVWRYYpNfu%2BmV9hu4KvqdENbOVEdO6Bxbo1o1FKJWgNteWvUUMqdzjAMGYG43ag1t76Bs825enXR7m2mt519YEZipA5%2BprzYx8L%2FqimqUCXgbreybDEjbcwrNCBPBL%2FtsTIjrLY3SuyM%2B74lwdXEPo21&X-Amz-Signature=b5d2157bbeaf3c3df9d68c0db1a810ddb4bd30202ee736482a25e79d9c637acf&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FA2JNH6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHaRM03FY0Rn3AEcxKL4dbSmzTP00o%2F%2BRj507YJz7inAiBezrI%2FXaCWQQFVFDrx%2BDfLmEkI4%2Fezw%2BmulSg7wHXbdyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMtEnDvmhsn9wE%2Fh6kKtwDsX%2BzrMX5cLOX1kCfT%2Fmm%2BAUQ5kTUAj%2B%2F1n44rjPJhAm3lGQaCdcNuGVL1uf3ud7zuOWGRwIXopATzpvgvOweoZqzNT%2B6AqnIkHlJvrcHcjNGMc21VqKLz0GPfzAmYJb6h8UjlKTDtCOVUi%2BhMAW3L%2Fwym8os57c1ZGh0PXN1OAkUUsuhZMTx1kqKa7IkOGQY8eAkGI723fBF%2B6BlCGymIwH3GKXnjljQcW%2FeWGrHN6qeXyTmBwjEH9TV40ytEsZSCGFlkh05t0kkmgg9Y8mVtLoqI1bggmTVvpEyhZ6tYwQJdMV5blMP2rciwBNsKST4x1haZdFwWJPAJYmPVZkdSMSGR%2BPcRC72og3YODqEAI%2B2tpTgQ7Q5gNhn9%2Fctc2JUrgHVQ9jytL69s2RlhPqSoE9r9NVElxk2Yey5Js9QizY%2BpbnhmYL0RPRfHbIdqkZkgc4400bryp6E2k%2FTeTo2yIiDTLZeiyND7Fgg0raHM8qsIgAm9DPh9PSkMnnQEmEwXyfb3CkH2la1ys%2FF11LPo1BIeFM5P4vJ5PIB%2BUETeLtc5a64xDdr%2Fqc3fQhjqycXESXyvyyg48ut4kcnIe78YCdka7W44D9JAHgCu%2FAq8mQlLaTEszElIR2Pckww%2BYGdwQY6pgEy%2B4H1uG%2BfSbU5fhLFZAF8pjEoePfbwPUnBXwBACsAPZXMW08OyyijqrBOSnvj%2BXm2YLU0VEiIpZsG8Uj20U84DVt4SDzix5OqtgSWQysAPiuFwUbzJIidppgsafSKhOWJrAjSIb7qd5GaaIBlFWPuBrkIX1xEDqwAMgGqjhEhXfgalI8HPPZr6Ajz6cWm0UXgj57Hrzvmxc4tUCNzWb%2BQOOPfrivx&X-Amz-Signature=ef6e63054ded38bdab30197fa7ad39709bfa9bc3ca3553bfa66303260204e961&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFHVTT6Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZz18ZbdKOGnProsvnh45gMCRWG2hZPw4hTeaZ9Jx%2BtAiBac6zgQBxDt1bu7GReajP0NF480T%2F9RSLyj3FqJL8zsSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B6E8wYHyEwqNNaMXKtwDsGGcw86poi5iozkkJ59jQnklIei%2B%2FM6h35H4NBlvQ52RhaAACbuvGAQLzcrfiaiiiwm8m6e9ep2h6fw2uunZvFaPvn9%2FIVS999K5dyLjVKBQMJZ7VUjBk2VQcFVn4u1%2BGx6AmhGj6hTKWX1%2BMU%2FTEgo5Dgux7aqEITrO0cGnD0mF2ness6EPU2VE7Ecub%2BS4BAv7Tao7SjaUY7zvg9QkR6ovqxdQ33qkN9Od1GxpeYMNqAGYvvD1uqGvy3Ayx6l2OMiiQHcYErcz1r3vFM%2BXK6hLybL4RdhcDyco0tNmp4%2BwN15a5sB9RAbBNwZ8OYbjxK5w9qWTzQBHyyy8MLWzd8mwFCGDYm1wFl9YAqfldq2xI6Gm32SOYjv%2BjWUeBjBq8FqoxO4Od%2FRgNkx1AoGDgM99180EA1nT4yTX7tQ8Aa2EAsVmaLR%2B4%2BnWzpial%2FqdI0A0sl2sUz%2FJu58qPEWoExci20BLQOlIFUsCzq0X8Hz1qaA7B2Y3WkC1NMZOpXnvKFTErGZhHpHJZm1GkgA2OzQy%2Bht7DcaPsLpLFRLEvWO6XKPPkS%2BpHQ4We6FncyW0jyN%2B2R2oJyVNcctQZquwtxcwr6BG0ENmYUUPvIY7JxikjFc0MjJ7je6YXMcw%2FoGdwQY6pgE1ySYrvViv8izvVkhSGVat0KAcyloDgyqYS7PQ5h%2FxDgNYHOl3YkSIuTMqmWxKr3GW7iNyzgMFxhI3Rs2CO7zQ1SJWSzcZCBO66KIG7MU85oNZDecFBmTQy%2FAxys3uYS6s%2BdxjpdHuOAlYraGqHMJvlsz4dUPlbi4TwBzqc%2BhGw%2BENC6CT2P2FbW6AvvM1rofQtgph7rVeVP9w4Non3GG%2F%2BxZ%2B3F0L&X-Amz-Signature=3ba43876c03e8fe892f6776bdba76f652a58ba1db535e9846c01d145dd5a8406&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB4P7AE7%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwln%2FebshaDq%2FnLH59901XxWg%2Bs2URrtCjYhd5GfHLFgIhAJcEMcXvQgGAQocmWuZKLjyAGhVDKBGEKFWflMCp%2BdYmKv8DCEcQABoMNjM3NDIzMTgzODA1IgyXcW2v6kOm%2BhJ6flIq3AO3d5a7SW3ULt0xzGj3qZnHNryVKBy6Xo%2F7y8uJX8SZwCjEpKiDbfAFPynq7rI4qbNO0UrJBkw%2FsmgaTZ0oCSGAWOMm4brjgCw3OnlzrzhzuQmHjjtbATJuhhYWiNKIhnihmV%2FAkZC%2Fscc5ZLL%2BZ6zWs0%2F%2B7CD7Pi7xneW4eFI4BTOwuz1AJ4KNfuNLIHWhuzdMTtZt8ZB2wvOehCGEaNEd0gTldZ%2F0WfAdFgS4jJqLLptGtLfKvfHfI17UMxhfpt83D7oB512mHVC%2FqScq5wHdsdy6BeokT76E8gtP5PSqsC5nqBbLj3oa27Flq%2FwP4%2FGHYqsTyuDeNed3CYfskVHgC05XvtyUwPE7%2Fdx5slDPTviDxS2BUQ4S7K4d255Dxbo8KMWRfVc009OhgXblLOmRVUJjtzqLKU71tDARAE7nfglyt43u6eS5bWP7uw2tw%2BPfplFlA2VuMGzYDj3bu8BamYrt2XYQUf9ObySql1nidp1CwFgKX2UHRn%2B%2FXIqcGPf3KfeScudosfMt%2Fwwr7zKj8TrIaMlKQS21AogbiHnbzKoHOoVTUm%2BM2PK%2BVNFglgWCQpJiA%2F2cDW7YKdbXeV48R%2B0%2FJ6iOsFtUjHlzhI9FCPXP%2FuiH30hEJlIf%2BzDegJ3BBjqkAScxqFc%2F0P6YXSs06GXgqRy4N2NVS2hQYk5DqCX0rZNsohGDYk8IZI0iUTzEZG5hrfpFw91pQyiXNhn4VUWL72ftGbJVcQBW2Vf34Vd2uoyaaefr3SK5VeyXaEBF9pqkpc24ohxDmZJPe%2FtYHxi3W7JjZD%2FIaj5%2FY3LlnN6EGkDL6W8UMTwHcbRYVQIwypGeS4xzGWJgYAceSSfzEiI3%2Blhim4EQ&X-Amz-Signature=00cca933c1c16a2f5a8174c8d4328cc21f26fe5f09248bc8532c1537a0f54f39&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

