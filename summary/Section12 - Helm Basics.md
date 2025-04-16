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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3HOVGWT%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUGJ17ahSlkoJ71kOo5khkujBtLiI0NyhgLCRXc36xHwIgXyOEteQoUZH%2BUrxHrVisTkmjpqdRtExSUqMxJh7Brt0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOznenmVaXQjGmBQQSrcA13o2JO%2BC%2FL89BWUlGsvwnfEEX0mTtfIGxPVstkTIiaXMIQ9eELTEkDLHIWfzMw5lJBAZzFo%2B%2FuIPcnaSq8eAxZioZFz5LXTA%2BDycl8zH3%2FAIlyhxi05uIEmYTN7qvC2%2B3Kvjsng9RrQud1OW7GGxGe7vOXtJHHLhkfSmVN5NVVB%2F9iVJFguQQBEzbBtOHLTR%2F%2B20RIfVpm1DB4tY4xtKv1KtqDt4GMq13uXi0sYGa364RsOzyEEcr32EcLvXOIj4LyllUHc9aO7oK6hCgqsT2w48UBbrOgTV1SPElXgwwWZKg7GxzV%2Fm6HEV6ihOf3FtvfUTsBIAM8COLwEU0OeWP%2Bvht%2B2AFTl3QqiwszjwlLkjYEkr4kFaLvABlP2VekceMdZ3l0Gr0G97FApcAIG3ZdN3QVMxRyGwW5w1%2B1P4Vl%2BvCGBbXVpxpl6RBy8ktM7WSuC4VIGon5VoaPEU20Xq4jlCA0Tn0jPpklJfDnTEczM54qmcKAFH41aBg5Ef1LKHVIxfwQ%2BIugWf2%2BgX%2FCU9q%2BIE8exJjDjYOU%2BxjGLBfyI5FKE35jYJ5oALN%2Fi%2BRzJvvIb6b7WQG0E4EnS%2BfUocgRzj0E%2BPQ7XNLxr9MW7VPUKzRwphi2BvCX42j5zMJjf%2Fr8GOqUBxctTROSJen2JE3pVoL3EynbS6sOVvbyYjzyA6%2FtoVJnWwdVaJuOBbtclk7xARc8%2BuBo%2BI8cd5TH4ytWv0zHYYxuaKebeU5%2B07eSiXbKv%2B%2FF7fiF5tiDSiH%2FIrlGEWvmWr0SYDkcYL%2B9tB0NDdUxfAkjRU0MeQIgir9N1qG1Vb6Cmo2Sr02kJ0whmYxVYyPjZL8YWwpOB5c7a5Yvz%2F4hTqeFVU8LO&X-Amz-Signature=72da60b849c71b6f1381a4bfd419aefa18b7ede269ecb6b4b8e8609b252362e7&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE6QFD3D%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo2CLh0XdXJMRwWDsX5fVMKqF2I6AjlTA%2BqMPl9uPdWwIhAIy5R6IDOeM%2FN4R3YfGi5w4geelGBSto1HE07UKsdmH%2FKv8DCEcQABoMNjM3NDIzMTgzODA1IgwiR8djX7wPpGRs2fMq3AOab96dHqxW99dBZKX2CnpZtoPlgLCRijWULRLh5kqYf3dEdq0Ba3OkP4LKCJjafWyu8oQnHtSu4WJzDFdQVbX2a%2BbT4pIU5czVwsk%2F2wZtuoXhCj6bDnksJcHCTFeNOPeCagrhzBdUv%2FTc%2F1ePoLJFvWuJsNI5Lq9gXPaJYk%2FG8l%2BjIO8eC7jJ96iFGYAxRN1t0owwTSasiBB7dd%2BIRD0UQ7KpZEgZyYnWETyKbNCbt%2Blts4TEX0%2BwSGjNORmmW59HKATRVER18YOLfPIKQsiESI%2FcIWWx95IABBudUcxV40sWC74Q1rBvG%2BSQaEZlq8iw1ShHb714w2lasWEJnweSZYlMdIWq%2FgyZUO6LigVJGdqpen%2BmSvEFrA3YQhtBuH1lCAT5t%2BfyGJeIALAOaP5EQOYASBp%2Fd9uq9u2DXfKLQrIacutNx%2FiZpF8t0F6T7rjVpioV5hPr%2Fvji9%2Foeeq%2BdZvcMJt9Ql5HyfBbE6o3qkGJYXpX7wWTvN%2Bx0ozUZ2mSnJjYW1vZ%2BmOJUub1bZuu38KkV25x1CpN4Q7YeGXlXC8xzVnH7exHTpMMF5Sww5QlJvjlvetSilXEKyO9EXkyxBiOfp3dZkSHMmm272rjXVP%2ButFZk3BTnHtrLQDCZ3%2F6%2FBjqkAfw3Q%2F%2BeW7WxdfhGw8TH6CsiMFmPB4NvlC3U%2BNF7bhu7ZbKydu5ynMS%2FVvIBFfIpKZKqAFkMcYLI32k%2FrONbJLNBC4ikO5ZRk%2F8GNl2tVZs6PGdjjdRjkURc8Rgu5wlhbmDcIrqxoBWjLltOFDxr%2BiW6PDpV0jFx%2B813uD%2Fox%2Bq%2BTiwrBsebk7auaqgSpqWFPnuFzBCU07Yx2PIEcpz5JEE8ThtK&X-Amz-Signature=df0d3f36cee8bfc9be38d57b611e237f1841b139da192c252b712b6570038b85&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QBT6VCQ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR%2FXmLrHqV8jvWTyUHuQ6uDWDaXJ0PnqgNTno%2BWwDAgAiEA4J%2F8uvjtxAK2rDkH%2B92O0xUOIKACev628LFIgEIjDFkq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOMFAsjcSqm2kXzVJSrcAxjmLXNkUxzTFighe4YJ2809po1W2Fq%2F2ezcEeXFWDqjPsIVqPe56B2ZEB%2FBEagJPmwKOsx4bcP5NwFhubjNyinTirOQh5O6vn%2FCUO0xsaENMEUuH7GezxJybLqBUgHvjxksi2vbVD75CLgw7OSNtGdHo%2Fxv10nxE%2FWjGMOVyxpTmHybaCAIkWxU2XbgRczUuD3s18c0eY%2FQhDUkjSsb99WcmXrqUPDUx97sijy2%2BnBXTBW1ig3sHLx6n0%2FBY%2FRTgzIhG1QLiB3esssnH8faUJsRx1xgBWpNzvI83f5j1y3jhAURhqw4SSfn2w9I00xU93d9A9ynC83RVFCWI52JD2yVTxj56RWQTVB6U0SpkYzzxFNkD%2Bn%2Bfg1gc8DJkMRe9uOG004eEobPHXDKp%2FMEd6GTSTBUY%2BDdSRcHg8BkPzLG789rCh07jW52BaozZlkgSe2tJI%2B7r5JDqoGGEybcEq9FF6IdQytAK11ubho2KXDNhUsQNVQgrinkHr2o75P99Vg1mnqsGxNmZzj4xcwcSi%2Fx7nE4CcrsjqXCe3oDgBa9mMYc%2FB1SFZlEDP7SOmUTtK32gnZlPZi%2FdTTMPpVSaEveqNo2EiJ9S3gxHZcS150DQI5lwu7kiW2GCLENMKvg%2Fr8GOqUBjSOnOH3vm9Maswr2UCFqJwQf23A%2Bi1Nx%2BthmUNR%2FzOcf6hEDqdZRhN6yC1jux%2BUL6vP4P6c4u41kTfKR6D49I43E2Lc2nORYdsDQ4WQDX9zyNeoqVJ0jMw7w2QywnV%2B8B%2BMtrCOHFmbP4XGmPvGhz5b6Wfkq45ZG8uItJt%2B3rFnPAQp9kKEVVvNn%2FMs7UMZDc5XPkq%2FZ9MOVdtI0En25EbKyL%2BAJ&X-Amz-Signature=cec4d6aec13f491a47da7e46330ce44efcd0b766c7eb43e83d2f43e30834680a&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565AM6NJ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFe5YHTMdM1NNfWpIJjtCoYZsUVsBvvcER2mbWQwcTfAIhAI0Ti7JePGf%2BNZcTCwHJjjIyw%2FL6gpk1bam7gPTtpdy1Kv8DCEcQABoMNjM3NDIzMTgzODA1IgxiO0f7TX2KMxuUdBcq3AOs4Dc9DhHnyXqmY8fRC3wLbXUAwToixBQZzY%2BuXHLHHcvZUs%2FsEgIt%2F51eFtSOlXfdImUCnKxX1E6ROuFNtnshEfyc1X6URPFYNUVpEOqNBhU0tajpKvEQ7xofClRZJx5gIE2qBVqgj%2FeaFg0wfcA63X4alqAi4wPDlIDH%2FmRzjSU%2BPpbLJ3Cm4ZVhlh0f0Fm7QqxHHCt5oFrRy13igltqHo1VY4HArjvFupuxzqBqgqbz8DSczTVCWBAQjKJIHlUOGotxj%2F3nVQsVofQqXIbhuCreZe6iS9W%2F%2BBaQDFL7ouBZYhsRIJ03WD%2FPTI6mN0I%2FOoWSTwwkj%2FEHvXJeEHAqdJ276VqjicG3JaQ0oj0KuhGhYGgUT%2Bqx4fQN0wq5OvDzvzQHY76oWn5YCxPZHU7kcvGRjZ8%2FSzI4hWPZtdBwa%2F%2BNyI5Q3ZEbbKuT5RJBbXQqUxFt3o7505dGSHqOS%2FEsb27dV0z6bsSR1n5j0PnpeH0V7PDgC5SbShaKubkxmgTBbswUNcdt3ElQ7vVI1fzYKMP%2FpdE9XEO3UpB6m8dCsMNDU%2FgO1bKSm3HGIRF90c7nqW0FDsNieoaEnzNmneARq%2BiwOw70xK1xgKhlaqIpLFGk%2BsxPdXsNIWxeCzCm4P6%2FBjqkAXsDKh4TyXdhZ9KdjpYLr7N%2B02jNwh8rczMbF4aGZRWEr7tNHdHsf97HoIg4kP9iyBODaAgznSXIwSMpc3vnRfCjI3hbNJhJH%2F8rwRoagMQArS%2FBI%2F86IbjkWcwaMGdetzC7qnydpFd7ncB1L0pYN67dDzEQsqi%2FYD%2FZeN%2B7n5eU2RA0ayW7IoVvwK7qmAsqv%2FagwvsSH%2BdACxwTCG4g1AsbspiG&X-Amz-Signature=62c0b6d15371fc4d1755b07aac8fd8758dccee4280f35d756b67d40d00b8c6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DKGO3X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7BOBkYoN2HzcaOq%2FdQ19c1Hyvg3L9vhGyQk2%2Fd8gFNQIhALBVDNIW5vLEt5mUCbhKub2djlkyeLb%2BMQdw8pFT6LM%2BKv8DCEcQABoMNjM3NDIzMTgzODA1IgxvcAinVOUHN%2BcDcxgq3APS0TuRqkTCAqnhheROHu9%2BK%2BtkoUZYjm%2BPIPeIXm%2FKFoFHBkWDzrP7%2FXwbXNjTETE6ilk%2F1978TxsuLeP95P%2F31b06cMwyFSgVGlRLDqZ8oIBymthO5DDLgNFIZCN0O2Vdz9CYb5t5ZL8UxDhfJ%2BGdCgw0XE8BsFDEnqgdawH7OvrQlGTCSplkb6MwgC5dVcvdj4X5%2B2aPehCvHb6%2FPUaZMauHOMLU59w1Mmfelh4FlKkWcJeEOEwP75bAYQXKpj%2F6ma3fc9ZBKWZJmMCdXOtFyU5zjOpSQsaFsxDPk4G5oSsb%2B4oeNI5YB8bNyp0%2Fdwv5PpLrg7iIfDQckoGCoGN%2Bf4fTxPxFjNuFVURL7aU6%2FvaGrABlFmMvfgKWbEH9IO%2BqD2zmi%2BTbhR2jx305YBEvXS21fMC%2F1XuzHr6wGdbHWeRdYyoSd2dmMVTZX5CI0y38JRm0b9yhx49bjHykVJvEiWFZcgz%2B65KlCgLUZmrgLW7AKZqas76WgCn6cq62zebLj5X1iQg5w8pGtIqaGtxtcLgcBOwBHcplKuUhcKE9CM5lAmUnPf95cKfYcbujbTAlTn7rw88hZ9%2B8RKNxBNrzVFVHfyr423rAlI%2BR0w%2BeIc9W9tcbrivhlVSWjTDJ3%2F6%2FBjqkAZMYQT%2FtUp%2FmPKNIyTz5cq0kHui4pzc48OqMGwqRdCg88ooBowm3PPekACgWd7DjGqblwn593Gf9y3qOJn7VCfR9rz%2BzNxHr4bUudfPcDs7A5Cf%2FQhMU5CtHv6EhJRj3ANayAaMoFNhxytYIwCGIwoHWKV5KWNfp%2FBBA%2BEQsc2AP5Z0yh295RMC%2FM9%2FGf7dolF9%2F2TEu7pDTL1X1okXZ%2FLv1ECOc&X-Amz-Signature=d4ab8b556054befa6587c37f00f0c458ff4bffe5ce29450e29094754091bdddf&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U53QXVZ%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU0nb99Z1YjdLj%2Fcn%2Bw28Q6wSLYVUm845lNorg6h1gxAIgYycFVEz%2Bb68aFJ%2FHP3sXtmcXNJPwYgjx7bISX6FECswq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDM%2B8UiK9%2BcWM1Ft0eSrcAzf132zNlF8ITnrt%2B6j%2FDVyhbGKX0b%2Bs0gIMjKtE1VJ9M92KzTgkjG8Rf6I9fol71D6RNltFNWa1SDuc%2F1QIrIMoq5LlKdYWmuLVjCXeFoq6GwSEIB0rSTBMp%2BGwZvZe05NF9yyx671lMI20WKHd30GxAAyFEbv5QtKCheprUe5bLauiUZrs6%2Bd1Ac2Qy%2FvbEOaFTVUT8LqHNF1iy1iX%2FOWGps2agRBvuPs8yuiXLInICZ4mSfuEyn0MUF8P8j3T97Ccs2WXFIMVGqmcGecMCsa4FgOyZR97rbRUpD3F%2BICScx%2B3iD%2F7RGfv8Mer0bDT6TzeBsBYdqNyOjiA%2Ftz8jkOTbvOzkD2lIUGKQvzhoCKYB8JKcoAUKLXOqq8XytC8Fas2zCMBxrrq49QoFrconX%2FPkzeJoqmxTqLyQ5l%2FYH4kD11yOuzudE33cupM%2FsnlJo262iRl1HcBvn1FHSg2lMEqIQs8MLvB62GSaRQk7CHbeaS3llx7%2BCCdTXSqW9eLUIFZJU7gFl%2FQXbw2jnr2JH8TER5gGg3JTEyDiBMKYuq7Byivmoj%2B8eTAt21c%2BPU6MIKwUckqsWdLMselrvYZgO1G6eHbtkAo2uhrby1w%2BF7I%2F4mk43IyGtnHUKFpMIbf%2Fr8GOqUBqrvUS%2FWUTW%2FpEcBPbnVKuGAxQJNfyS7i1NYNdQHrt72xAOi7AMduopy1OgJAkpLQodZl5a2uUhZ1kv%2Fz2u3PoHpiQOuTWqcRvsAb%2B3ThztGPSNUKrd4XckNgZpmetzV%2FT1PxyXLBlZ0TcYtKL7soKc4OHKlCc6jdN6BZNGtxOQP0vhGpflTikDoGRB9dpdAjQm1taZK%2B0MywkIZ%2BipEhT%2BpyAU5P&X-Amz-Signature=d9d0601af28ad186f9f4447d19fe93c34bb994ce1ce7c7f5ea651dd85a2d66c6&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIEYZJB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7T87FecME8XMOfempgsReT0S4GbF%2FbCcDh2aOBKTI%2FwIhAJMTleBKu9M0mFewqUHrVU7%2Fje%2Fyj3KGjgN0loCZy5jdKv8DCEcQABoMNjM3NDIzMTgzODA1IgzHq9Whcssp12JgTKEq3AN%2Bf%2F4R%2B1I%2Fc1OltER59jaClzACzaAc6FePXY6s%2FJOESmK2W4rMnkdEoHuCeQ1JhcI%2FrsYk5X4uuGc%2FuNJmKGMHUzVwJfOo%2FfqYeZSWcCUhky7efmQXH8k1G%2Fh1I5U%2B16Hgeg6%2BJiJfsOog%2FQUd5YPIlMtqAOP8u%2BpV9GdO7t2d1yTclxnMEtKFISaPcEUAh46dot22JpPeEyCiPjPw6LHjR3YwJSyEdT7OxMRkuEmtB5EDhgm7JrlOKxxsgf8jqbraD5DAEsRPt%2FkhKtU8OnnxG6KrqlI%2B8aPKu%2Fy19mCaPYYr2Q2NXcodtZHpUdZOuSaM6Gt0XXxZ6ZMJ4iAgYOnYBmUsUeyLmr39gA6jHr1eCGMlEFzFeQ9VagiNFD5pRWNillMFZjoJJHoSpGqm2RbrJhRJ8c3Qvzy%2BLirjpeuy8h1%2BxTN5Kfm9gYM3NKWjFCxsRColIhUpt1xNJoodiEpqzUI0yeUbnhawSl75Xe0zBmYpFDSY8QJL2DV1c6NdaT43%2BsPQldd7LqQ9tA1DdU%2BpYnyYswtec9U39Z%2Bdfb5oLOUpYdTVSRtuKe01bjWQkW4K1Inh4I17T0i7nnw8OaOZCVGVsnXGXvvOyOJvSzo%2FvMy13jS32tWp7va4ATDH4P6%2FBjqkAX45ED9wYNN5SYzJRCnrK8IVUapHZlYM55C0SFu%2FDmPXr7SEArkgPOmonheX9DEBKRbAJP3YBL9rbkHeSEBW%2FZM2TlPyXtLlmNqo7UaAhoQqiYI7Kxyau0zY9M0QdNh5z7LeiFnsttn8Qgr7NMYjOY4YI70uLkMITTHQnq5enKKCsaG%2BVepPQLutahqLBCLVLsPRxYC6f7sfk9oU0mTyOTwBAeuO&X-Amz-Signature=f57b14358bf0734742bb30fddfc4fe9e1230fe0188137ef1b9197550e63c0288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNAZM3DA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDlS3xpGu0D39Q6kK%2B%2BeUx0NULZaSbTRkela5sv6trBAIgQA2tUZ9kycIzZLs8APhIu6ymueZMs1EQXpUoTjAXFsYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDKswDC3LZwEfTYdyHyrcA7pj0K7w1o6vLfrwNTeHMr3PPhCL%2FHyBiC7bOlHZdomJ6MKnn4cilZ2k4Lgrs2ehByjnPAxDEdFkf4tWDPCRfrjcJS3XZFerYsWGH%2BtvcEM%2Bpz%2BK8AFCuA2mS1FZNolGw9eJir%2FgSLhBSGug8vIB6xVeRsCg7V0oTU6tVaIEv2Vo8E3Ae2D6ubTdUjpm%2FiaIsgJ5%2FHXZDmJsXVOnmPZuhpAygN23uFG%2F5NdjV3MNkLbXpy8q7KRqVfI6BTn6nUnW7MXGffs8SQ6SOtXOsiV4ElMrjNZxvhaetNP7Kk6TUT2jbiSm9eSiU5umKwUGK9BT4JufSP2%2Bwx7SALJteL6X7TCPEQHclmIOkenYkPG97Fd7SyBaUKHxRQEbUDdZshMhQkXaC9V4lpqpu2X6PWY8cdkzJFKa%2BQRPAAwZ5ydWdtqt%2B1CJkfJ5NCfTp%2FNqMruRsWUK6AHPkCfUuxRaJhel0UndfBNIPMD0bd2VBRVO2VWjomQaJyCrWVCxoxpWy84D%2FuDCxdyks3s%2FKMJWUGxMpOaaRkc%2BlLztRDrOyD%2BebmhURKExHic2BHVf4TjQq0w0pY2%2BpXPsQpqElP3etMO0EHOYiB2C8Yq0BxVuD7Epj12%2FAq720HJnmjZLy85JMITf%2Fr8GOqUBoXkqMjAPrRtIQ2oCIACYb14qdU%2Fr73HJR2OCHlE%2FwozJd6uQZ4xRRv%2FmleTres0BU0DCd51SRoU5yYZyPkE8amppbJARwWr%2BWNWGPaQyzDFnWT4sUFraJLUI%2BUVqoILlpQZLHpeWw57sFfOqZVfhfPS97oiuh8ikv%2Boikt9PN9wwztA0yjFiKdOSvoQHMt68BcexuDiCNsetXXzEFZHvqAmyty6M&X-Amz-Signature=fdd135145d848ed6a954f163c4bc1861beb089a093f33b1e293708f115f51fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NJ5VV5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T141232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCepunk42oTrrgg4zFYtSG%2BvhI9%2FdjE4gOL1nrdM2fBGAIhAMuIYKwNaknQBA4BnoGutXnpYUVOlmbHZmhSy0k8zg%2FVKv8DCEYQABoMNjM3NDIzMTgzODA1IgzLqGsmE0SyaHTpDtIq3APMxF4qISQA%2ByBIu2KpzuxhokFNjveyGmBE0cAdX3SlOD4dQsdcAPDJBGLCIrEemaajCiTFNRtqNBuK%2F1GcQrZ8OIf7ZhOKhPON%2FO4y4ycaiujqrOJ%2FP%2FIMnfm4gQMnnvCNs0meQjsqaDepMFBdNpBzgVK4cYKrQmlHRNnLVe8xaZ1WSAvzAcIkcUlfJ2Dobgccny89xZMjxhsyt2Z4HdUEdc4YSi7FN5Tn4MshUkqSQPDmJ4F2Bkg6iLtrN%2B78070S2K%2BloYP5L82iZ7B5%2FvKHFsOtowdQUaNnnV3AKvj%2BiM8d5VjEKXD0nhrOZ%2FWEf%2FJr7ynbUi%2B%2Fw7ZTs2g2eWBibBSzQJhfW3OzA53c9oIMRoBO24Ubn4LrHfD1zjGVvL0iRHehRKS%2F3Uo1oRZL%2FDN5Dl6J%2Fb%2Fi48oJGkFLDkjsCCF3011k5bTS1GN2uOl1950z0cxHQf3bRHXwt1gLpmpfOeXD98EHLRjtKNzSiyLOpoNI5rThCgKsSJQBITX7VNgFpMpHlsYibcRB5bYvn2WZG4twm0kS988fS8cpwK2r86OR77io9xYscG%2BctwToGzbKh%2FmhMqzEgBGBFlkLEPdLsRtCrknwO%2BmMCRHn3inyq7ZPVpKxfT%2FOmeCNHTCk4P6%2FBjqkAUsm3pYONfB99RGL9FbZaSyfaLY%2FP5%2BmrEjHiYnr%2FxR7oSUpgzOCiVwfBiHjWppkoS50viVlmV1Ta%2Bke7%2BoQ4io6mxj11p1GuRBg7yH7PfMejzRCJtRSEjCg7eFr1ZwDcXNhe%2BeqyEPEBG2ul1fdq7MgEUAUoM6Gap9gMyXA8kXvztiLz0c3ojcT8XNGNvLuCo0AVVuw0YW2Yuf8F12ulYA%2B4yyF&X-Amz-Signature=665c1312181fab4f3968efa21a04f0f394d98f08695f62f522a5fe79451b45c2&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

