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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7OIFXZB%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCexok7pNlsj%2BT1I%2Bo4L3e0Zh%2BEiv7ptpCuuHTZ9Y1TAiAnFGm8ebSXFOGlhb%2BqV3g8Q0Up16ex6fmMS2X8cmtTBSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMM9HU%2B6qfNCNYK3joKtwD82OLhtInI1qE422CpQuFEsQxLxXBToAQYnyMcfc95r69XPhkjvmSX0S8e9DZc0%2BpoUOPxzIebe7ucM5Wdm%2BeSQNWDUry2q%2B5EBf1VGH6R8sedrmp6liKll6kd0rU2KanxWWszTC4Zxq0Oj1Dl7D3Jev7UyzEy3WhB74QaQhYqmrNywz1m3rwu4RjnWO8HJrDnEFhoDCwm3GtLQ4k6vK%2FntqX1yeSaSUfSovnn%2BmPF5XEwd6%2Fn8ZBbFInV4M181CfyfeN8lj3N9OyqonBb04uVGBvU%2FQGHjxBoZM5KyCJhN%2B56%2BcjEdDi5D9YFWgLPiO5RejMjBPiM8%2FcifCpYnts7K1uy13UZaI%2BWye9vLXbTvHJiK8Gtvh8psQrwpFFNNt17XtWDg39Pkq9tgctbwXUefazdfj16iCHOgflow3k40B6Th7rqk5xv5nwHio5M%2B70bA7k7EBO8Iekuo0yLO88wt%2F8TLHKwi5mbQ8oempaWvnGmvlT6%2BgtqMHq5w00ZCCF5g1jjBj6oG7jOZxh1DG%2FlrgZ8Cdb7tRlu2rBahPJoqhBXnJQl8fVdoTb9xcOAP4PIKTmJGcc6TX7nd%2B4tgPYKs0uisnz2eafnmvRzcFGTYspvKRtwEkBpDRv7xMwitjUvwY6pgGUAsxYfnTwy2mnFXHLFNuFjCNvG8%2FffvZNZtqF3dH4n5b5s5%2FgDDWDALES5Ob%2BVvjTI9ciw3fQRU0Vfj2TYxwHsgJXIgQhnXm6yHQR0mlNma2vRNYyXu9VrRk4VEnrqccPtrOfv4fU4JKXhGzxJDB2j7Eedo0WvQUBv7bIGMAC7j0fPI%2Bsg4t4YObU79Njn10HnxngLeLRrGMqVsGzF26rqA%2F5iP0N&X-Amz-Signature=08b5e31903d81e208a3f00bda1f2aa438f8ceccb734018f96c101785c11e9089&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWFX577%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNxOb7XaglgjbERm0d7t88MdecLjd3N%2BoksVxeFYbnKAiEAmJjQV58AXyfj98ixYuW6IzlY%2Bpg2NPBk5n5OS4IoYUoq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGw9Tx66synFBnHJGCrcAxZ0kZzO4DEcTywM%2BJW%2B2HwgzbTmsXab%2FFuZqS82FC5sdXDeKTYr7XP1bSLhROC2tClXR%2BQim7vvftxm7xVCq6uZHvmC0KxIWpk9SivJzteFQZO9ir4ATHOhzXOp0AW%2F1YMoKIAktqmhKZuMY9N4EOmiDWLaL7j6aJ0SLYaOf6cs31Ry29AUASj6oKDDDcu16i%2BrFVDHbH%2BfsDwLgWTG4CDTQJctuGGhjyEMgAJ6MF70VjNcWtjb1Ey8XLQf4JL5%2BEB2MawBWkr%2BwrOegTxwuysQhfiHkrgy73ep2BCr%2BF75xVgmAoSyPVoGKfeQzb21ssVWSE448hAigg8ukXyaZpW%2B2noKzdtUaPmyxqUaPqcMLTPjuik7BW4ttX0NOHOQGu0mYpdTMa8NwuLYUC%2B%2BPx24ARykBPojNtytHoZx4ULC6NgEA%2FYfIwWXzgU2EkcF%2BbccEjqE%2BrZF0vOfAoUyqUBEWbb3Nus1XxRzOCnXsIxu6BdeSrl2a7y3JYM9QEYqJVZmsU8goqeaEBp93mJfXaAlezS4V0qjl80UPUSx3WIOaXDC9EI0PdnFoGIAbgeskHM1VbikXhqkhPZgI8%2BiiaLVqGU%2BhBDlKEjjs4fGCGMdRhvL7Aeay%2FtyM36tMOrX1L8GOqUBjiK%2Fs%2F1WMefzo5FaRgqPWy13Ldr6Bt26U42yv%2FkjbmC%2BOD%2FGBRAFiZTQep0OveBSa4Nck3uEpp58TpFPVCMGZaraS1dW3MlMrJ0kJh2XPCKJaHKSN9SuLyoMtzmFcDxZRINyNO2RfrcMlZ8PpOddL%2BzcigNQdreClgybii5gx5pE7wZc0IrvpQen8AxIkzMz7AJALXDeObGrybXW1EaeAtptgP%2F1&X-Amz-Signature=49ad40c9230dd67a2e49508b749eec4fc5c7debbae6ff303bd4e1d162bc743c7&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QNMBX36%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRVd7Kd14jBYKDL6nyWopqMHSUuZUCypNUqUebG7nCyAiBWGdWS9DQyQrzVSH%2BetHJ%2BzVA%2BYO1U%2FMr9H%2Fklcl9j2Cr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhR9oC9%2FzmYheCaOyKtwD147qjszdL5%2BSz5b5Jr5250S7eS9BCjkigrjqArqqnmdyZ3o87uVYIaZ3XWcTWJWMHLqhjbCy5oN%2FirttYXsyUa8z21OFLZ0cQyLhUpQ10ZBn2FNsj4PuGjNLzwqgMEy8OyFEJGFmT%2F9fp7%2FiKQ5yRhiqWs4EJP6ITog%2FI77lDO0CrOZ%2BRYj4NI%2BAXvnQKWdSulluVjBBo8bXlDSKDw4rc2j9DJ1BN27g9TEhk%2BUlWDn7Y%2FrMTUtHWmo6rEHqQ5pqmZC37hf6%2Bzj8dwPhkBFOCZDWj86HXdcBcEp5dgfNBLsJUADo8AeFLaA%2Fe4wzjS4ra4WODlDpljpAodvg6T%2F%2FjcsSYBZXzBo5tc1MMK6YrigLfdljPe4vVeyMOC0M6YfsXf%2FUAAmzIKVbugFQnVEn7kLFYYS2ipuUHhUD8e0NajhJwnCv9FPY9mwom3DDLPcRBYsE0AAJuaOxmA%2FBqUeEAgV49lvEK0CrHxH6VXRm90i%2BCdzV5Pmq25Z662NXbi1At2y%2B53S%2FrMtTw%2FI3QxzKUqmb0PAG1hQfl7r2DJDgywUqGLCHJjiePZwaxZtqXj76TGJfwWt2Vuv7AIWqRyY8%2FotyanrMa46qpMqFC2qpypFngJBWt%2F%2F1YnmveGYw0tfUvwY6pgGg5D3L%2B8C2j0aleHO2BXpo2sIMLbezKNrbsznNfm2Z6u94pwfphKOdWylrwUhdGIhiXSK8XprIfAqOmcn8pFoW%2BJL2r9%2BHvz8geEl%2B2YvX56piaFth5qwuMgpG%2BMyFljCPdEgwOKlOf4oJ3nUaMmRXW%2BmPQCty4KEnxPKcO6fGWvPc9wHZd7el5aLiA3tJHQ%2BQpZIxYGx6DAheYLc5uOwNlXNeU4Mr&X-Amz-Signature=67e6f098c82b6e263502cdde7ca6524cab2d362a9ede1010e6951ba6bfd8aa37&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C2ZBLPU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUMO9O3i%2BHnhm4bQyvBz0Q75sQb%2F7xWqptD5J3EBRrEwIgIOwUhi7Qrb5Va43IKwzMbC5%2Fv2iqy8InYZY%2FN8xlr%2FUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFchp34SO8GFwTlrySrcA%2BQ8G7wllP8QlGeovnXxTnLSG%2BjdThhQOATRdPoDER%2Bd2G1eCtvQSwJGXLob6qFg4kgZX6KM5X0W4KgFbLzR%2BlN%2B20qL00Z56ihJlefDNEfgCIK7zggEDQVI92QsqhjtIUjIkgAmWA3JU3Ht4gfVpX0Dg%2FoNYr0gAxrtbdWPAp2p%2BRgHWNYvTE3N1jEjdGZ%2BhPgOVeimEbQhcECiDlSgqI5cZAkXqXcI0u6oWA9DXvCA7MSaAICkG%2FJb2l7z%2FnJf7stoQZeqYt8Eqkzhu2G31nW1BaY4vi4NXajt%2FAju1f0%2Fs3T3zdzKOs27argDXBl%2FRxJKSHkPrWCqyh4j4uWh31Ss%2B7c%2Fi%2BO4DFR1nKsPla0ldu%2BHonJe9VpX8efqZCTstXHqfGZxAavqRSRoAmBiKFtsLnb9DveX8R6dcLuqsFusu6TXyAC6iBwBdzMm2%2BAm1e46V10TRHi2V2CrfAM2YoWKFm8vxGKG5S6ZJWcMRXGI0UfpbMw5bgMpVbNQ81gJ%2FKP3%2F1trjeQNEnTrOHK2xzwbuXJxDcucKk8cGSC%2B50ULiVBeYUCBBjlrdzjdoz93zimVxgaMVzbYVY8O1W3rFDoq3bNTfmbgbFrPX1sS8KY3U0Xlmjs3nnYgl2WLMPTX1L8GOqUBFKVCOfaeWne%2FZqKWgnbj8vqLgGepl2bA1p4jsYBmYQryXItZUSrFZ6CNNELZm%2B7ICDhbdV0LBELi%2BnJXiM2W%2B84u2gyGqifmOEnqavWRw7kSJ8o4rTTrP1p2NvIeg6cz%2F%2F7LVK4NMnJe%2FqzObtj4JfAY8UrgPI3VLXhBli3iJl8T1Ht%2BUVhx0qtiKpylzVhl6fdm5KXh1fw3seaVM87WuCANQfi5&X-Amz-Signature=387db1a3efb2de36e84831b6888c0d4f6c27685a771dcdf7a413f1c73265e466&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWRBLJQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP335LSLeU0pg89LBBVkrBgCdFsy%2FPl5Xa1%2F0XNCvjpAiAMkWECF2qVv9RHR%2B0gUppXGhzjGuxnZhxT8mpGxPzkzir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7K4pei2pgrnug0SsKtwDXvyNT56hqBmdTzjP%2FZyrrLEu3Kqvx08%2FdI51KvnqKjkT6xcbpeLhWdMQMDwnvPr9EWeCEp1PKHEf2DARdn1CaL9UhkiHiIoA6Wx1c6HFDrA3M6qR%2BFyNQ%2BBbVFcA4KWSkerlREmdtYvlHWJzAmHYh3oJWx6nuvQBXP%2Buo5vz9U3ROtXx4SXGOHvQUMkxHzBl7ugmAbURHfhPw3%2BVTs%2FuFhERfh3Kj95hePM76TGS20myzaGkDqu4UEboJziRMUNpG%2B6JJ1nxCVfndi0FQ816MFkz1TZ5o0o%2BN2QN%2Bl9ZaBzwKooWNSAKUGy896hjoEtpIEw6EZV5%2FZdOwqecOOIirnOpn8OYgTbC25gio6g%2F8mfbSo06%2FlOP68meXD1tv7rH%2Fc7mePhbXMnZ%2BsnCU3Y%2BxGlJSKC%2FrIxK1YkoDpvbmiAeDABNVC1t%2BPQAQ5oSVv4a1vybcx7OWLqyg%2F%2FkYcGoNjCD1DifBPbnsq2cHH0BzGvWnpWrz9BUXUF9edXQcl7IYPDKMRWe%2BYDO%2FdCvTwl9Nd%2Bcix7RB%2F9FUCyx6RtqnsXKKzmpnnAbuXz1MxSa2YYbOrEk%2FZjnEBRXqxvWYbJq645d1MGsoUHC5pXWaBBpn2CBv5LszNAme2nK5Iow0NjUvwY6pgEACMsG62o2LgMv%2FetktGkZQ8a77an0YJkhvTFAKw%2FcfHgT3yUCHjl2SaKtyRyJEGpWUbMLwM0IyjLMgqsnYtxkYeyDg72ybrdnZIGv4xF3xpohOY3bD28zDfyIh0jNBG1PcuzJqGPsQ4xiEekTXJj1rW2xWru0K4uJahOp%2FtH7OE72arHV094XZ7DBkZm3Jz8l1%2BbpvBRF4MVlxeuerPRahrxzxX%2Fr&X-Amz-Signature=40ac3e5b6b8271531117fbd8be1b66255b506385f1fb2e50812c81bf8b5bf9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZ35A56%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEoFZ8CsyezZvnKWjggIxGTlf5IUGEXZ9mLtcd9c1r8AiAwW6Stkeh8PfBxim%2B6K1vYkd2JmwjG49q4vO9xm9i%2BkSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMk%2FHgjDUe6nkSM44hKtwD2UKOz3uBGy3mNGjtbPliEM7kvCV0NurU0vdHkVUeumUUPTeXm2l%2FSzhTtyLY%2FaWuUSfxeP9iI9EHjXHCym3AV9WhxaaCbLCYLz%2B3DXY1hxCR7bRGmZLooAXvq3dt0aBkB9VOyzQxi6tGYe2E31JkOg%2Bveg7VPU9ZQDBJuWNVhMZ7djhOfiAAKpaC%2Fox7JLSMJ4RjdcQu1mfBzPw%2BptwdRlaqIJrfmrLzXKO5q1z9ZRDtcXgXEy7u5DkBpIyNtJSeinQuzVAuNGaC%2BgqD6euEA1jzhUWBcvw%2FiByfsoDHC%2BzBSvMlfv%2BWIm1HhikhKGrYSRKaV4e6e%2BWxD1glxMgUju%2B62DDBzA1zGo5W9Kl3wyMKZh0QXZ0zNXBn26mqugyWhXXh3LD9ZWDAtwmlzpCNCTdQKaYriMFH3ZvtplDLtAo39%2FLdabY8Tg76U6LBUBmOetuFOa6drlYnODxttHCTkluifE9jarkN1HwseIBYTiRloyetKdWMPQKiJXP%2FqjuAmYAA5lkZxKnw5MeWblgHHl5mqlJS9VLZz1VBjrxkqTRH8IdZ5ObhwF7dtbTv00apdjUNf8UywWS6I52DOGCkJ8SGxw%2BdflhABNmOqdJgObPwhnwlHn64PxkHrQYw1NfUvwY6pgEt0pEbXrorqwi3fJ50GSKCaUtkhjVE9%2FkONp1vaxp6ISKN%2B5gYdDxtZQnclzl68GQ00y6Bt96rNKiFIlMzlNp5CjgRXxWRyG2qnO%2B6mE4rOF8%2FGd2pPv4GZbB86tJLQCoAZOJZeDOM3Qh56LNZiDz9TkSycITrMppIuAwathA%2BbfTpQnLrk%2FXeUayjRRRWvqUU%2FiHfuUvyLPPd0uIO6yh%2FFIqs02zm&X-Amz-Signature=188642b1bd721676e377564b6b6bab34ee1e45afd9b069a0f15698b1eda8019d&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5PR4JG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSvYAHBW6QogDEFSLFCj1ekXUa%2BrPWXW7Nk5ApUjV4OAiEAgBZu3YmrhIq%2ByJeY5E%2ByAZYbBrWMz%2BZ1kmH8HK8UReUq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP%2B0gLu7v%2BiBkQaj1SrcA%2BilyVt%2BKu%2Bak%2BncMiFhDVUjAjhqsDUe4DFJuZXvYtJFpCXARTzpxxKIuuFTjMjGQSgehAvqnBsvoD0Jgjx1RNxB3GiovUNCUAQg9ZINIVTJYD%2FAoJWn5HixaO6rX2gyADUnfZdUGE6OV%2BlcwY0WYjP%2FIbhq0zaaKN8G7UmfbOInbQrwYHN67OBp5vgxSoYCL2zNFaQlwroPQP6hXiNHl7Q2bQPfFREsBTrsukk%2BqWmA0WsnzqyVHgbl0p8ldEyWA5ocQD6UUrnTuyKDDHD%2Bg1g%2FryYieNuoLCDH3hHGquqsrisFCnO1jxLLioaXSOGMLMsZNXoXKNSwkhKuZ%2FnPC2NsK%2Fi8Kqbu7tYw5Lr%2BYhSAJqSBqe%2FJuliRpYW60P2AE55qsDx%2BiYzIMuCEz6YvOzZkYu79P1ArBHhDCcTvxrAXDv8ZUzY00u%2FbqPbX%2BujLH%2FL9dxWJ%2BwgjnD0FBm%2FsByqyji6zRHCF5H7KhjOzjX9aEpqeB%2FdRkut5Tqh0u3NOI2ffPa0xtNn%2BZKvpZfHlXicm1ovs4ctpFgXoRxw0E0t8GpULPrnSbP52jFY05%2FBd%2BPlQajyu2oZmhYf%2FogeRyXOy8qI4EWbnQlABy1Foyb6N%2BZmrCoLcz7mfG00fMMrX1L8GOqUBTsS%2Fen5CmiScZnIACYRTqpBkm9U9uCBrwNAVaWaVISxsF8A92hmX%2F0L%2FS%2FAHNZXt0TwloaU%2FzcoiAYqFUVThIazY7KUvmY%2F5IJvAn6V2ggfYM%2BUvSq%2F2ym860EaVuvMlVfW48skhEqQI1ygpN0L6LFrFdSffhfk5GPFfjILSeYvXZHm5WV%2FuyKy04XR1SdMMGQZ%2B5ZFDkZGqovh%2BNWovz1MvoQ2S&X-Amz-Signature=7d974af7d7525d0cb9674e766cb936a1fc23c37376f01103d125c843a558f81e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645LDQVTI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQRRKD3cIXcBAXEYc4QbFyJD7vfZs1Np2Y9p8hSUQZtgIhAK06t5gp1Gl5yHHhv1BQfMjNDkk40iV0V%2BsQFb8KV5xAKv8DCHcQABoMNjM3NDIzMTgzODA1IgzTCR2JWln70SEeKMIq3APO%2F7o0StoACJVhAgDb0CueKXUzpU9tSXcGauhhQF24yDE%2Fo1mltlYb9vYiIGuqqPsXbl5BfHAYSLDImZvUexcIPs7sV0DrA04Wq3Gls6J7mxDJX685kXiX2lI5coTJTqj85eRNM26dr1zZznX1LvPS1s2M6CjmfsNK2BZkP%2Ba7jAighGe%2BhDS8cTFbQ%2FA9CEZbsFFaLWgTZalr5IEu4KUxn9Eon81D4Q75w4BbHncfLYKEWoX%2F2%2BA0faBKt2jTFSEPgcQQwJDmHg%2BjeD1HkL7jTger0fIWtbbv2S1lQvUZQe6eDj7%2FftCtnzGHbsOhXPqKZj0jIfwF48xoyuHroQMvT1ArIS2uIUVy%2FI58jQAj0T0e66mVqLB%2Bg2nuR0LFwrU7rZnCuF5rWeA%2BqMshVuYhZB%2B8UPSnmua%2Fer%2Fq7mYF3W%2Bv%2FJPIvW98uAMgOZOhqetgZTXWBgC6GImd%2F%2F5eAEKsP2Fp6W1ZnJepESKNm6vHXK4G4fLC%2BBP2ZxD9klXkfgMa2mtVjHa03NzJUtq76eRuHHO2U5fKZBSRUz1zn8mlVl2tcd3OcfKkv%2FFISWMh46PSyo88tzRD5UtBAsFfkOC3dZK5MWcN5u5p7O5tAHnqigZ%2Br9EpAwjb8G7EMzDq19S%2FBjqkAe6Rq25XGVcDktM5njth7kBdqGDoGt6XyK85KgaiNq8Aj6eS1mInmL2DwM4tApaGs3RmrVcdXgjxIJIqx4wtawGbpX9DjjW9aqsCgqkVuhUexhpDPQUZEYX3d4AqeqY5pMZ4hXBkFsp3MQ2II1XoWju1%2FcidMr2Zo14CornmVk03YdeqAopcvd86kibKNaTKyYKAmSXL9C6McpNYmr2gcCWxl2vY&X-Amz-Signature=6973252b296b6b2c7061de7f06f573ef0c6c3f329c06f4725d8d747081686e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OWJWG3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsSbRR3UsXsiGd8Y0YGJ2C6ntWLEzlLXPYPAxjQw1pnAiEAvOYnWimsI5%2BHAK3MeACVJ79QvflXIm33h%2FwuFELlWOEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDG2fXERx8KE%2F7lPb%2FSrcA%2BxS3Sfs%2BrSOFqYhm5MIqPqIo3at%2B9ThaQrTNn5CU2FMX5KRTjXPQPBFTLlInX7O2NF8885ndmVzk%2FB%2Bc547Dc6btMseC4K0OhqYKZZsVzen%2FbC%2Fjlz8%2BPuuAGSwqQBFR8GQHczpHPMgpl2%2B52wiOdTYsdGGlhMScTgxOXNIwcygJ0ycTFdQetFBwhonSDYCL81L%2FWu3SRcke9yBiXJchQkK6gQd1CBpZqHRFQEQ%2BK7deAPzkL2G00f7f4s47xgYlLpQiE6TeLWNGb%2B7CuJMUXB6rds3VTP09Cyca0RBKEQ%2BlRjX8r6AtBImaRasixRR1HsDhra%2F%2FrAl7wPElgABQaMR%2FugUWB29Pnh%2FLUR6plm9Vv9PHHA8r2L2etxnjHePDLKijQWrReVMRn7LNevwJAmQQwQh4XeaiUkSSL%2Fz46uIXsq7GmvD%2B1BoL9tWfhM0oAXVSLgQcWMnnyN%2FygJEyNii4oRopqroFUHdv17vyozJaC69Bh3t1oyUEpbbW8B2YgJs7uk0J19T%2Bd8oIfZUcvikqgH4Hr1Gne3Z8a%2B5DoJPbQEOl2P7HtBijC3O5AVkwDszKd9DcJZ6oDO9zsukr9rCzT89znfDshY2MLDljfIO3jtksfu0jL0DAz9HMMrX1L8GOqUBUL1I%2FFSw4yyGkIj9KhwEm9JutAjz39AoPhW2baPZmNoiz8SAahi8jSzmjcc9YBCMrCrMnGnDKPiIbu1Oh1JE2qCqfa4v6frYK3GxKYexaO6h4vDQ%2FIn39ZiwH9aChHdYnllFmkZ3aHQUvnGPGAp5dZPCH4GwvmpdgeDH5bw55lN%2Bc7WCofSSeRyetum9VuZ7vjbKPhdTCKfo6ocDxGtUhC%2BrZyU7&X-Amz-Signature=21d0a5f90a9f5fbea7b0f77a8a1c63aa9f0fa6a906f29147497e7262e20f5269&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

