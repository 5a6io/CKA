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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKW2IP4S%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGERgntrP9VjTMcw6kioTl4ZMrhG9Y8JSYc3aKX1wD7sAiEAuUiLW1PBolb%2FGXWQPHddNIvoa40zlLVxm9frIWqVe7cqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQDiBrnu1%2BnbSkqdircA6V6PQrfD2MTmI46czmPnsOfE5C0nOHmVYoN8D5Fo539E8pRu2kopUCzXCwmH%2B7lEsVCg%2BQ5Udib3jE3AQGAojvm6Xjl0Is%2B9nwyFOnr3%2FBFalZvYD8fCP3IPW7ogkGwV1zB1IhVznZEzi%2FizARutCHhEyhtfVBL257qhM%2Fx%2FBHLd5TPFlQy%2FCcvSK5Xwcq19NBgx0AD6pAuKGU7tQX2jtzpLtWswwyKWW%2Bd0dp5is9sqbfFmM9PFqZyFr1KLHYnHRRhN9V0a8hz7kVsOZCGmA6nQ8%2FV2IraaCclOGcCcumqoNOc5BkzDmJw0waxxK9Uw%2BLugd8U5L6gYle4XUGkis9ZUuUldL%2Bl0G7PFegs6biqD2k0%2B77MLSmzAw1dS5JR6PlWEoFz578U0Wg3jbvaNz1dRxlSkEb0mpztgYViX%2F7jKxsZKnDzugz6scgNDWmS2OKVGY%2FhQrfyJUpUq8QdDlRkAY6nr56JxU%2FxaJp9DDL9bT%2Btk19tcxklg39BYL2ppTbWswmjNE%2BprNQq%2BLcAaziuNxc4bY2B1E9QwqGOUM07bsGqM7%2ByOGYE5Y8ZSxjmcSGcHeugsMdZCuRsOKYHCmTFsWkhiROXqvFbBPt4%2FSyHqP8YvCbUuqgtHxrHML%2B7o8AGOqUBi1XJqsEX8fIkZ%2F7pYyX6tGkj%2BPs72esT2OZ%2B93RgGvM3Z2EZ1ZLivewKOS58zGCwBUmmjKBhyB4VzVOZLp8%2Fs6rpAKNO2O5OkpuVkqYdSlldqSKwUGpErfJz5vDibuEisCz2IujQoEeJi9GmRBATvsCXi6oUABjuSkQ%2Fhtue7GLnDNQtAqYDncY3AUjDop%2FKN3x4BqrCz16JFmU%2FPgkisQKL0RWE&X-Amz-Signature=343a10e6a044e5e94c37c193470107500d24d37e169f9931ef18573c326794e5&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC344QLZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCRkmvYo6JvWKMxRrwQts%2B4eO%2BTgQY0VrHKu0PkT4OyHQIgb%2BEf%2BbkxWUFFeCuQ7IEhkOmGAYdynOJt40luDhmxYAEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABoamg3GXDTbf%2F6oSrcA0yVfyhrbiTyTOAD3g8YPN%2Bdt7e73sNy8hNfRWHzWHsWa8SPM0zK7wj1DyD9U2MUynHj85sMHvbvWqFoxAdOSA3Vv0pjk5lULQK%2BYO3tPJr4HGmJRxoGA%2Fd%2FUGoJJlNpFaS1E0sO3E7Ky96JiNBnRkwMJZQER7J3W9dwPqwXvuBrOl4RIAITtXdzILyfnznssjjHuexbOtZ6QLB7rQfDX5QX5UZi1jd6pZ6k1Ea237fDkCM7SYk7kXdDiauERf4vxXXik9dK2%2FfQZARgnZj%2Bvfb6Hs1o4GjsLd9ZLboRqJUAMhtiP7%2FX%2BJMJn0j%2FUtllU1FTAtbdt0Oyn3VrD%2BOcLIKbt7qTpcLsLZWz7MxLpevQqF059rY7K9s4tdIarOAc%2FCmT%2F9IkyIQ11VdixHkJb05r4yMrwT42YoBW%2FSGwmBfTeSfilXyOUG5STlfwkE33qTYTn%2BZdbVHt2iMqGhS8o%2F8ARmO7jnrgv44AkFMx5RYcXB1%2FlXaKRV%2BDk1KpIilJYTutHACWnDL4irzUbnN5mSy9y5BJiEvSPJHe4InyMoMvEXITxGj7M7VaF9%2BkFojpqfR7cTj7RFI%2BLj5Bp7mzAcSY2k%2FJMUBKApzWTU90lDgUI00eahCGDjguu50WMMm7o8AGOqUBz7ZC%2BklGo2kCYpzQHAsRZ77Etk1d5emlOfhhemEt901YS4x1rHxUJu3z%2Fs0alG4AsAF5W%2Bx9xDk4%2BhnOWYRNOD6Dwfv3oeTZd3NzVMpInUpd4zhSTJxFwgiGBiu1d7%2BQWtI4Cw1FsaZBn2KULNKG0OcfisjqxPiYxRKGoS6Q%2FNWMwaOiYn%2FZIH58OUOAk6Dqq1QhmNmaTuvxyaNSWjaMmQBm0Ne9&X-Amz-Signature=402229d122ab5201fa0f2721ade1f05bc688df9ff031cb81c651c42421c93c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NXGWG7D%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCp4GOJGl9C%2Fynm4e5vDKhWUOg6AtBAjhagvOELi%2BFiSAIhAPARFpMYNEKqDVmQz%2BxCd3Ad7idFTcpAHmfzm5FDA120KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvNIohpv%2B666%2BHBDEq3AOmWkT%2BE6XYr9NVVyV%2FZ5zWMNZTMWhPKLVWYCgo7fRVljwW3YqC%2BKggfwLWGjIVelhh51kogL9PWzE9AHbkRAAJG62QPbcCq%2F37yxZghm0F%2FL40lPSWw%2BsnNC9SV%2F%2F%2FuqX6Y9a6fh9vxIU8WLY1794UGGMM7y2y%2Fio3INof3V3wBpH5jsbz7Au9ZzT0nOEowHY83rwT%2BzLfhzAqYUMerCx4SBzEprVHB%2BtjlEpe0ZtF%2BwhLkbfRbo7tAGf%2FSxhLO0gdhOrXSkBDMMPlkhwiN%2FfrjS6BfdSE5o32qvpGOTIXCpM%2Fmg%2BGQvzl40kd83L9b%2BM5qJyxAMHVtWLuKmbVmEFrFxPjNFHtJGjjxfTJUBJnPxFLsQJAbII253Jjq7ePwRCetBO2cwx9zSTKae%2F110L%2F06kLH5pgudMB6V5jIoq%2BNEjrRIUhZvjwMiTJdub4XhwgDjiJWEEDS920Z7xcNe1E5zVB2FXsDcFu3HFNgbGN3upMyozq86Sl4DmBzsdi7cL9CQumJwHzkxaLMq58XTRqH%2FGEocYqPAh0b3jjWaTh0NsJDMxUVatWcfrXLqNb%2Fbd9Ize3o92YfrWE9uVBcPr2hov9s3QpLsNSxLtinLqN2j%2FRCwAlIqqJMSqqODCCvKPABjqkAd1BEwgBbgd7LaWBnu033ZNKnwBj%2FZwAEp9adycF1rvliYFiarj6LvjP7nGmf0Ja5e1JOElcva5eSAN123JH8PPtltONhVTbjA2lzpPeyt584dRm25YvUHWdTNaihWiO3L6JVCo7XfE0GWxqQrGqwwOGHZ5kun6cbCGTbwm%2BNVQCM%2B2K6qeQg3YveTs3%2FY3p%2BsdbLp5M5b4VIw3F%2FWo8yy1DLlmB&X-Amz-Signature=454136830a202ab9ad97757069eca9754983b227b73c4e2e5157c0c84ee3591b&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKG2OVKD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC8LTz1NDfNul54UnVJnSbXFeMSQsgPkBdcyRoChhiwXgIgHPtsYkU0vFRlTicTG3j%2FN5eucS1tLIHTzacc%2BdfXIAEqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJscKWvJGZVn5EnPxCrcA1ryThjc%2BQliCn%2BieQsGS7Ii2QlOC5o5sWp%2BfwU0yVf0rcVU7iWG8p9564CT%2FmhzhzoFxzOfzT9bCZm8zzTg37PPPEvYfBxwGLuHbWONfVKJoia3EkUppcEzo5VQ%2By4ky%2B3zufHfzIO%2BgONFmZ6dVjbBQHKMqu%2BRrELxwcBfEYbQ4e4AhSzYonSFk42%2BooOrj4YrbCYyLmgEfNOgWtvdSTkElza2YCAO6ZwJ7gDnOR7L3GtTkvpHKlCt4HMyBzAiPTBVGXKpi%2B4bnm4v2e%2B8l95EvjIo1H9VzxosVgIWRnWUDvngi89q8W1FG%2BsRg7IflTBTa3ntq7nr7K%2FIHTdPibP1DhqYTL4nT8RSM%2B0UAVg9ksmN9KwDZjDengD6t3V9mr3OT%2F5N2VDvQOBH1GqPmnp6EIOHgpo1w7or7f2TiaMP%2BJ47bFd33DHBKGY2teqoOCWrukcoZMAnq1Ol1w5WArwRxd0VI1jVxV%2FujLi%2FhpflpR5NSBGUVA5LJW%2FEXOQuq1IgtaUbtNuf8HzOqa9L7%2Fsiek%2BX0rM0VRUL5WGBz3a90WdrJg4mI%2F8uiH%2BiE%2B4bgiCzKLf6%2BUULDaMNwiVfSZhQWn4FYJxcg4tlnvxArfds3G2%2BZIXVOFSwuR78MLa7o8AGOqUBZ%2Bk5RK9h1YCdjoPLE7f541BQ41KUyw7wBb21Olyw5nVsWjaLUOg9KBhZvpG79VexMgH1zF99YxE4%2BjMm8H8jNr744a4y5zlJSFCXB91iHRs%2BhzCZhV3icDIrhECJnhoTnsuq6lKZXhFvEGsJKilYEWWGD3bD9F8gbnV2wocDgc52LJsPBtoZVGmGIfhLbQuGyQiUmLP6k%2FBN8JO%2FwvkZLUSy%2FyT%2F&X-Amz-Signature=7e7c3f405e92e8f0bb0fe70fc593451ac7974debfd4d80957efcb01afe5ec180&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PTNY5FE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGS4nr29ZXzNCOX9OwvHs8%2FYYjEwX5pmcZeBjDn6iH%2BQAiEAxnhvxNE0K4Mz61YBikQqGykGJYSfwmxFLG3ogjpRhnAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtDC4PraZE1kZeXvSrcA9Y9x4HWFQsuwqVf%2Bjc1oDr6NqjUBJ0rRHjUGwXUtEgIdL8DqiDUq3S8WdL4MDpmgDHRHRwxQMZ2EnIA1m10yKDOfY%2FnLOHu%2B53VVAsd2FHBhuhaywFAKKPiGSrP45tOTxZu6IAqtgB0jgXmtZ19JEnZDavoUqb%2FpP0sQZAlfehOKm09Arvnb2S5Vuh%2F8%2Fxk6carkz1YhIJtkBHQCF2JDmtj9PH7cKgtg0IUjQuCuFy51uCbJ%2FS2nzUD6m3Piwt5VNq45Wt7cB05ZDNYZm9giDYFGzIDWePw3ysa35qvClfVcYzAW2T8hU7qdfC7MOmTsnVMKJ49yKj11W1vWkvg9XwQQY0Envh2WrxgQ4zbyhX%2F%2BNM%2B8VjaMR8il9MjhVFcuyd82euVQ3fSWyZ4QDVHZzX%2FOpdGYs3wOD0NeiLKGrdQSRxi5w4t0UnpFnryv7xlvTdAXu5dl6%2Brpig%2Bf3Gc6mpJ1T9s2trgRJ8xFz3dBOzsZnRyrvLrmm6bKE1XYLgoaMjDK%2Bq94RqihSaRUVrqiIY0IOW9Nkacl%2FK1%2F4FgLER8tPHkyyMeSO3XQghW9yxLPqe0IA9LH%2BZl19gw8R%2BvAf8u2ZCmCaBINLXnMBIXXjQCcZCrYkUHJrK3XooSMNK7o8AGOqUByo%2Flmj3l48S3c2u5bXBG9In%2BFQaY8zbC1mmtPyxMm6sA12cDLsF7ZJMPWV2GeIGbg%2FwGYsPzjxGhLegFNYH4O%2FuItLQG0u4JLBRS6MbZ6zF%2FkwchQB3uVTx1d%2FSD3b3D2Gaux8%2Bh8cITyEvIMsevTluGa7%2Btypu1QMDuWXF8uTq%2FcOuTW3xOS4S9pwSDIoJQMDe5KPYb%2BOeVVR%2FbYyNqQ49gnKwu&X-Amz-Signature=6192b3e1539bfe9f3e0128052dda7bf3c6b20d6fa34be0caa3b0c0e14881ff2d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NX5OMCK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDSckCqFtM7k1r8ppIblGaII%2Bv0UPaTx%2BSc5PZQjdmasQIgbF%2FxEk%2FDYyhRMuk0NHLgBXxO%2B5q%2BbyqS1aNyE9pnXAQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkROvZqa83ZbVLtUyrcA2C3bymr4Vp%2FulpTiCec8gvjLW%2FGBtgcHMVPTxH6ePwu4xiDPFWZ4zvhDHzEkDX5uwlxmutjlUtCLSkO47Xps8zSO7gRwHRsCgXP4dTzkx%2FKiVt892p%2BEqtfNmPHgWZ7HcMlM7h31caL%2Fr0EK6nFZrE%2F5h%2F6UO%2Bj6UDPCnawV4PqEFSFyt5aAeB376lL%2Bk1rGAsLZFH5IrKV3y6VxtJokTiS1wE%2FLZ%2FMbwT9TSVVE%2FCktoFGjEaqr2PhW%2BNqVPqqTgPV6s11ulQ%2BkH55h6DwVo1smwtmBt5A1W09TZ6gLeS7IMMN%2BIFsy%2F6BNfHXa5uENOYjAvETja3rVfpmMp3327d635c28FA%2F99eGki4j1adCKBUlUfSQ%2Fq8M0Nd2ve%2FFacqLxWUnymyujEsMXQS6LLKTs%2BnTerJz3FXysmtooepGm9sJunvmn%2F8%2FvprxASP0s4cZ7kHFfqh33zMR9snfK25w35WIos7%2BXoStT5%2BV0DlcGQAGubJdMAIpqaQclQK7XTU3hf4UcK8QU8gmLEFG24poA94a3ttEVjzyXPisu1nNoVycZV5jDIrj1npZxGWLWx0HYJA7zQecmvNKnOoKDFDdtzseSM6gqX9WSwLFopYfSTqEf5kWQE7Sf%2B7qMKO7o8AGOqUBEEnBc8EWKbWR2KQNA8spCGMzjzIq71n86kASoS635gfVaerERC5pg01veV8wPKXj%2Bbu3I7UbSsBZsSI8JZlxt5P%2Ba%2BRwObaar0%2FgLBjEZYkBrSLbIbLQBXO1aod%2FVUtZkFCDv%2FTPOswGNziYtjRtPDu2AdrJvAP50ecx8AzD%2F7Q%2FsnuYdkdkycJkKmwu6MI7UumzaGPW3W2%2BDsLQjAFG4VyoogO3&X-Amz-Signature=7727ff99cf860342847613e453ffccb4ce8f1e36b92e84cafff46a11f97a11aa&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KVWGOUO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCJw3%2BA4PxUcA9oJm8xo3ODtQJIMF2fE%2F%2FNOWbUy4%2FXpAIgU3IjHiL1CYY54txo2tkdAlGcKB5e7gD%2BXkDwG5SbZ3gqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6rIqHwIXSImUSc%2FyrcA%2BU%2FilgDNWYWukaZjklqUgOIZCA%2BgWG4BRZgEHf9%2FzEKeGOqJFjtgVE3UoDgiHUUdF1TxgmWqpLLaIw0jAjVyjHaxD8FtYg2E2IPGWQSh%2F%2BaSsKdn4%2FSOxdsG5IKjniCpkJ1FhJ%2FOr%2FmhJ%2FsQbjwG%2BZ6L3%2Fyo1c0CQPNXv1Q6X4tUM1TsR72u51xpgU9PhR2pf3WPTv70P1EQRgdCYdfBNGMcBU4FLJM%2BCA97r58ewHN6deKsvdyMnWbBHgldVCGCqLeWPdHhXR4aLWw7Q45jgH5ZqpxGohk86e%2B9xM04EbZZXCv%2BG6dGamaFzNo%2B70n8OsXe%2BeFz0MVgXGIhPeCUK1ZkxaSAoZ8%2BsS3tdPBWPnp8tpk8G7EUTkbjF3HwQyqeS%2FysWfVTyYZ3JhsEMAhtjJhH%2BbqQ9BZVKYgeOiEb639VHNNiZghjqA2hmjGfvYpxh4opCOAaLQ%2BjfbT8VBo00bbjUS%2F2yzt%2BmKunFdqgXdagcN1D4z5Fo%2FyHQ1STHrhhaBRAhkgj35rCamvH0quxEcHxBRtnGLFaFcPJ4rMEfc%2Flfm8bC6bZqi09zwY44eykCXzZGviwTmDv9Z870GSd81xPBq5yVIGnfogDSluvJ5BY%2BUcgQqIwQF0sH7jMIy8o8AGOqUBfx8H8jHEe004hBH5TUGgOzpPTnnCPnGcoqv%2FAg%2Fu5PbZXYgeCxaeO59Q3vJFvBiydr%2FcfokldyHfyJS7Wc0mkjpJg51sf4H%2BfXYncnnLtZDAOTlHaJZ%2BvS65%2Bde7hx5kcJL50RV5IQVoRa9mWfOnbn0fCG4UDE2rkupY5fnhVrI3XsdU5wao1eqXmadjvK42Ogs5SB6wP%2Brlm7zpRZGRmxQO0xSV&X-Amz-Signature=cf22d4a233cb4ea6f25107e002694216913768d83602a168520f6a735fc3dff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVKQMAU%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDSdfOrKvpARhlKoeF3M13LvgdVn0jqj7VcQHs3wgmR3AiAoa5XnCbW%2BpsdYz01%2F%2FpOjhwNbgRHdB%2Bhniekq0YMshSqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmsOhmnDziC8VxGa8KtwDjKxg3iJ1SA6ltCDx6Iw8x77wgvfESXYqm7GR4Q%2FrjdxjMxtnv68RgZnliKrttnwo97s5HLyeFP%2BJ%2FKvH5Sm1Lzi54ky5ocAhK1uj3%2BXCdrV9oQMtVXdQZYQfIAXN5041yme6VRP8B%2B5EhwSapAajWrXkVxt0rb0iwgPkPJDxcplgEfjii1W%2ByVEZ3UHsSUOvmI%2BcXVU7x0xJNypnQZM3zO7Zpm77iLTsXaRGA1XISy67IBpLOasrTYTnzUgCTrJS9L8urpQLIAktyISbT8LVBA3A7IVMg1HTiKR%2FDTqctr0CEKwK8%2BixU4Ja1baWge%2FpxXuwtrzPJq83TKLcNnBjDEd0p9YD6yQ%2B29FbIUkZijYlA087cylH%2BZg9EHQgN8W34OAV3AxUxqh8CKBa0t0yfigAvZJtcTknAhYI9MSMUtrVNjFZkDTicGTB2XAd9BI9VoFoRGfrLDXiAjDWe86FRRjpkL1P%2FMnZz9c8pbkCG%2BEQezj5Hb6xZ4FJcFrkwsRnVqN3NCVaE4qXg06nefgG%2FxkOp%2FUmfUfCXnQNByASxCzimkNXVDrY0%2Bt4wiiEppFB%2Fhm8Ginks7GcrYp9ERnE7eI7uhebeqY5njdd9ptIL%2BPGSGd6bGWg8MjJmR4w8LujwAY6pgHF2txU0icENTHDkmrhdnko40kP6EW33rZCWOmfkUn3gv%2FWbzz2myQNwTzZZcyMt%2Fk3%2Fm2UUn%2FVxZvh7uivhkHzOnw0AwZA6sELJFsCk8I9wkHT09zhqUR%2F27LyxLvCCMXm3bBmgJ4R7YP24nXKRVoAVbXjGB%2BRnneaccz4N%2FLOpxKSNk2ABqnSGMtrL7G7diMKANjSj7xfIF%2Bn0ukhAwAZ9E%2FunYpK&X-Amz-Signature=832b8dd27ca6a625cb4fdbcc98ba0559d27fe53af0850c9c39117195b55b7dba&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLFLNO4%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDYOJSXBxsVVeIxScZjX543Ijzs%2FGFSGDm0WxSXfZBV5AIhAKRjCb%2BGtJv%2ByewH7vU6c0jPYwAJ4IP1VoP%2FOOVyRnx%2FKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhgWvEwHXMkWNclTwq3ANwSOsGnp7ucyXXuvrac%2F3iDZw600Tb0Q%2BB3nEUi%2F0XnMJlNAhvDAEFejPsKKrIbpdvN813HHcczGhtQ%2BSJyfFmYVAd6QxfWD20qXkmrRFzCJMRcRgoCc5UuHwqmgJbBVAvvMEP0WeCH29VTRDBivkNRVYPzQQQ3eNu%2FuqQNNQxNb%2BqE4%2FEPBC9VMxKDuHXdwu2VYOM%2F%2BgedKG6cGns8JeiJ%2BwMMg1SZFSkRzmU%2FyUk%2BU2RbnWfGT2GjfVLz535Thx%2Fip8%2Fm2WKIwx%2B5uFdjxKe%2F0qGPgtudDkc8BPwmlDt2piePTZ9NR%2BdpljtZeghhlT3INYWbExDUSeoDv2GZ%2BkeX9ifbRO%2B8rYKlEdh1uJX5dkNHyQEoBvvU42SM3D5ggVE2VAxf8SrYYj9vg5shoXlxJd0ZkMWAl9YQZp01xkXOfnQMEWpn8BCXyjcWByKzvT2QeI%2Bs8wVIlkXNo%2BIjc0BVEuZha92pUO%2F%2F6Utz%2FHcvJ4VZg7zaYXW2iEYDYGCW3zMm9DNMiE2vw5f20eP1GFbtPCidDqLA80v38driKniqkTYaiyg7iZcle81d6K3ZkOvMDndP%2FWY0%2BUsvV0mR7Q2H9m4bAtytRiIPAYvIl%2FbsmRl3%2BGaIBM2TiZ4bjDOu6PABjqkARLzfZg2j0zilMiUbQbCDrbh5Raw2bIaLzFFyje9dh9LCfJfJzO791U2nSXMCmTTv8gWeRdZ%2FGNzp4KxdH14wu2ja3MfxA36Pi9rVJucWvLrUD9qAew024ngAQEDgdM30xQIbsdPnoAt30AvBdRtKbtCJy2IkQz9M68mIUfuiBRyXBr7N8NC2ysMs6LbkhpeMeYpyteTeCUBToxQuhVtUI5xbGqf&X-Amz-Signature=c145893c2f2f5ce9c9f87b7948fe7716ab57a774daa81f2d7b479a54455ac11d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

