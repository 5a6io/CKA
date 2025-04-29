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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STYKJBLJ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfmv8MPOGOprx%2BH2HXJLWawfx5jCZbrulh51AbQXtBdAiBIM9NTRVCK%2FoC33ybQ0K55nVMBWwmH8AXrHuNNlLD8hyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMucdPKKpvweCHHtH5KtwDaMYYFHJmNA5pdwzsuoqdhlKUBkEQZ37vEN554louRxOSdV4tRc80dregUmj4sHkgRVqQvzZf2MR53BctYfAJZMHHWKrlfF9YvCgVRGKLCFT4wyqppoVG%2F52Y0V77ZOdwLNspufLKpUFdu2czsqvHCFniJ5EGXe6kVOW9xEoIW5zCrcsxTxZLZZpiFr2jfb5fHhIQB6Ofi2sAGKXmZZWWqnzFxSLxuokLYZEth2ZvIwn4kieCZqj6VBuvor5lrTfOcM75wnDtbQAvbmmWIYZKB%2Fw5m222SNc5axHL9JvfsFujAeelCVXy9VlATEOxU%2FueluNQfrR3yk%2BH9G%2BSOO0BWcrvlcP%2BaR4IfJ2SG%2BOI%2F%2F6tr6tKEAZPD026tyYsTTcxSAsMlO64Sd5Mj9kqQJXnwXPRF6Njb3vhFb1IUSBpZNvz6cOoIGtuwTSUH5uH%2FZELpynOKmFMTMH9aP%2B%2F2kJNjdyu70baz%2FCTEltHpttyH9jn6Fmz75gVSLUl4KBGPzFwuV5KM0QLgOt74%2Bddxdgw0gK2Q%2B0nItCbsBn1ffaUZjJQB4TkKQAmv%2Bh8PrS6I0maLfcMe303WdbH51ZICw%2FNzoEtFwoqPnd3p5oxpgwrAKkgY9pbprvGC0MzxEcw0bbBwAY6pgF5si5ki4ygXJEMqTdI2T2yuNq1TzTdA74%2FIVlJep5QUFzKq4moEmFf%2BAZTTUqd%2Fn2bEKv6gUD0TJnG9hjF5Jf%2B7RaPjmYHC%2F4ca1JqtdTu27hH6rk2PmLuHzMJ2FQ3%2Fw%2BY%2FG5ZMLFivtvHDLfFDdvK%2FHyrRHvEzfskmREonwBSMdW0itVde2xOLrs3K14qBhKwDDi8fN6L4EXnTE6IvuYV7K8Zv5Ql&X-Amz-Signature=0d49193bbb87e860a3d8486d725f8f59b7decaee3830894c38a842b7167ffa51&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZI2WWS%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHa6wMQUd2moYB0CGMN4t7ugxcfgesg1rHiOzzcWpaPAIgEa0PT6L7iXIh8mfKzXCguektbt6DcXlTKTTgJgLkxYcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHn0Qmp2Im46dTNSCrcAzorLkj998wg5qVAhRe8gNyTdIFb4H6l1ZKbYnqLgmF1wEE9LRNtSsLpYrUmxTVnNa0CAewhvQoz8rZELmlFLOZHYerQ%2BxNunrf1ocbf6bVznv%2B9hxuHYpi8Y250Om4DVmNZnzSvRcxPTBKpDAUGjYgaBAYPFa9PjgOq3RHwpzTQmSmGLXhM31Mvqp1DLww85Cz4Qxgvux%2Fp0A%2F%2BFqngyXYQJTkw839KJ0lifFUGmCLmClj7ghM7iByBHtBBNTw%2F0anzf2n7ey1jfiSEoqnHj%2FvxMRUOC%2FhgA0NI6Pu%2FDOGO1csgOKAkgpCtZsJGs0BR4O%2FXpBQksTJ5Mo%2B%2FsQkc47ZAlXVEBmLo%2FBCzZ6OwjdWEpZKSiRTh39%2F%2F4Q5%2FT8DLcfVJZemD0DUW%2B4SrRHkZfPWVSo%2FiRvliQv%2FxXz9GHseGyxqJetVS5bA2fGCdSNm7fUV2D6n4AtBdF0MBnWo6uEgLqybcyXBXR2Fahez%2FRSyYNtQ4FLQtHMMh3nx4Eg6lrX74H%2FpT%2BYVNLWbQJXkJwabiRG9c5O2yNOrIBiJpmXPHCPnjxFCsxxLOWQ2iaTfXANWcTxbzsPSm12XbNmJisd1f6bQR6ve31UgFr4PTS6iHgkm7BoRiFUNFeOpWMK%2B2wcAGOqUBN%2FkROnEQJF0s8NfR1F7IXcBn82NvAzkgCrRwQB8Yn4xUai8cur6yh5IegMtublLkFpybvfdh51ZNvf5jwBKZQx5K8cQhoADY5Fcvz6HCenMKAvTZ%2FZTbF3PdTvuPVE%2BMM1B0UKiENN%2BecTeV2qHLsI4SZp0heZr%2BaBGB8Mp6WBOTgUOeaACDFUYPspzr%2BJp5Ulizx7k9kscyy1PuHnogV%2FiTYaT8&X-Amz-Signature=cc4dd0bc875f5329d565f130c45546a3e5b0e0e076d8908189d4848db18a8361&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYPI6TIG%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArzFRBTClw4sMMxO91qIBqvUQx69VjJT3qxIWrGmA2jAiBrYZbtKp5uwTZg%2B%2Bvks%2BLuYedb3Frm47dXuTxIH7AX8yqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG0RH1IEFv7RlvKaQKtwDXmvRYVp0g4pK1FRRXNfe6WCOsVqRGqT04r3o7syKWKVhYp6S6f1ThfnF3kWdZ8DAYDLYAfoWkDFaghkgLacbAFT6%2FzbXexSBvJ%2Fsp7Adq5hvA436GnmkKnW2LfNqdqWFG5wyHofvTjESAaXRB9z6YgmED1wIbw0uVv3s9bcV2kJsoU2hb6rv2rPAVdM68GCk21jpRIQV4ZwYaqyboJXLoZHh3kxQUVfJYHDD%2Fd6XVI3uywfWIzYPZceHBQuDz8miByL6WYHDDzAB%2FqiVPfirb4j6uymWjHYyxngqucR2%2BTBXY5katnWsAMOxvWJoLb8eaIb510fAm6uJJGlTb3OmWWJuWsP291R%2BwBHqY2QuQ1yScIOUPyUph%2FxQ1aBP0HfEsqXydOq3JnLlFFgMEeuMlsljWDt6rXOROExkQ5NHSGjcnNGEEGihVdGoB1HZSVqYbcyvL8HyqK8grEEZRfe9Nk4%2BeshuDF7NKXxpzDfIFgVEIwuS03g%2BrMP%2ByCZPEH9unCD6i8Bk%2BEpj9Dbdh5rXiTo9IqTas2yepsKoGhI9pckoS1%2B4B6NZKYawIx3P460va5smht5X0cguY85GXD8ZWNj0omqm3WD7lrdk%2BIY57OschYtGmB9Ymy%2BKcpIwsLbBwAY6pgEm40%2BqvYXXI7zKP2isp4FlRiKk%2F7eq%2FEYsPS03tCLRdD8%2F06cCCm9MnTi6qU3nr%2BX6H05U2MmLCxSHZ8c7TYFlwgoSwLdBKLnBdPKUanlnGUJVH9yHA8hJPbw%2FF76bFIFZP4UIkJP5lVJW%2BLposSFvcoc0i8ZSnrlXtNGHRQXOBWOYQ9p3jVJD6ES949Y701i%2FtjOdMKPcR3H%2BYg9Gj3fZ9xx2KtAK&X-Amz-Signature=d2904c9880d078e3269c9ae8202fd4ac0dcc32bd5990b3e8ba101f4bf8478cab&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F6IYQUZ%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsqEK7%2FruGpIWzgxTBHArEbMNHTS44HpceqyKGiJ4CrwIhAON6hBZv1x48cYD6r0vmeC0pk4uGgsEsBgef5WrgzEiPKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoyvQMo4UF7tz8S68q3AM16VSCOW3pSjF1OXBEdH58cXCvaGEmAJZ32k%2F8q3vnpD3ug%2Fmax5cKOEXlC7%2BuG6Lqix7ZPCtKwRmpD89Pd82K6DG1w%2FnL%2BNkbx5LdWD8j8Dt0EbsXaLBTCB6nW5R0Z5eTf%2F697WmpUzs%2BvW633Amkq7yK8TA6wawrE0FK9TNcCSZ5GloM0Bkf4HADO%2F%2Fs5qVPyfVxgE6mLIIscBYk7FuDq8XFEXAsN4ySiE%2FEz8twl1hbx%2F6DAF5ObLk%2F1zMcfeVMOdpLewgHlihPgWJfXB3ufsmlwHn7bp7C4yHLCafHeFS2EPdGroQjp9eTb0YZ26scMgQzLx5dFu1vgVhACKVosVtX5G2%2F0YFunqZwMMERmqZxOp%2FrOc%2FYL9kL9ECs0A8AqxvL5VQP5h0HMAWt7dBfollhLjrYngoe%2BqbyMbEiXLz7u5FEu7ZqK5b%2FksgQJCjba0JQIbJCZ27iC%2B6v051EB4kcO5WbdyPIDOXes1Yn6jrts%2F0JotTKA9B0rVrSQaJURhsDz62VcYhagNH%2Frsx8jB5VHFCIIx6RTbpuwbbPfBWX9rykvaEES%2Ft1ET%2BVEtZFph4v5lX4uMOdCEdBZEbFiHvVuxy36M3lZgk8sIV%2FamFVf3X0A8HhT%2BlNcjDxtsHABjqkAbBNlMcL3%2BxUrRFtbJx%2FcMAWrGyvdjZ9tUq%2FznkUoPoQTu0AoEM27CX9iFRmGDUp1K8xYEjKzejMg9rx3XlbKWCLSlNusJzfU9YTe%2FRhTI%2BRpa%2FAuGgsgmMjXfLv40h78%2BhmzxYM1fRvPfjVnoV762ESkgiIaTfNp18H%2FB7rqeT2sR%2BldwgDCt318vKBfIipZh0UFQDOZ0R2xTbmreyBZejuZpVy&X-Amz-Signature=f7ba6e5ba98de3439e3891bf9ec76da3d37fd4d15f5ae780985ee6f39b98c91a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIOQF43B%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvGfnNA2o3uG7ybnh4sN9dg0aR78nWCGeR82zgff%2BIEAiEAjxjU31wtN5s%2FjgQ5jza0bKvGt5H%2Byat7kvm39wgeWjsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDODGicWmgOs2Neqi1yrcA2%2BUMWH3p7O6f4p3mxgKILHpH%2ByyKyKECF%2FPE7jGJCwXOKzjj9yevTUij52nM05FSBpJZedljXcSk1bP7XaLuybxWgdD1UCL5JA8he5y3E%2BFs6%2Fxj1KaILMedEHOBKJNDgCCx2IX3%2FeRbGBq09Kur%2F146dhlkjMo9YZ0lcwWu94XSJfJi8hb9vD2rrc%2FFYWBQ5DBytESOlIJGSEsHOw8N6tJ%2FQvgbN8fa5Y6I1SwHqXY2hHF06QIvN3mDmWhafcNLgqj90TEkLmMqZvtmPg8Cb21%2BESdb1aVQ6W1pXqWqHl9bXZ0ixhrQCbSKNSvN%2Bgz5UYflJ8C8xiiLUIS4Djq7PpprqIrXDfFQTGoTIcCRACpcHv3IB57%2Ff12%2F7lBGjcqsiG3CyUkHrO%2FklYbNTk%2BQr2TEb%2FV1Yau3ADj4OnIsuqVgj9IZV7tt1coauTekE%2B4YyEHdEhzkKUxq0nHnpFcDgNpSLyDtY9wX9tis2xlCbkbIaQqRx1xh6YfKrOMuIXd9t3t0jBsTg8cZEeQFa4hghRLHMxq%2BlmOPMc7eH1RPwMO6%2B8lSgtPqN3YdAIuuuf1S8e%2FdIVBY73RJcPQOazFY7s5xnrq1W37OWvcawpxwdEpPePSXf7N5Du%2FZg2wMKG2wcAGOqUBMXXoyEJOCKYQJBtGi%2BcKumaku%2BKaouhh3gvG5cIgplpcchpCmhWVNObYsXYr%2FeAtiATqxH6OoB5W2LhQ3knhBIjDNpyxh0MLu6ikQdrlasBoxSHIN44cN57ac19fZA7zlRw1k5u9aRa8f4jkyyYLWxV8zzrEy1gVUtV7Fdd4o38LmoENz9mVrIA%2B0x7gIFMkT9shBUzcyXxlHbnzj15zUekNzvrM&X-Amz-Signature=f83a84ec050da5d57867a28906035af793253cc3074fd870b5838a21c0659d12&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBU4T4C%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFVTe6bhyVnFSDDxDvSsgamYXRro6w8tvBajFpoU1LSgIhANSNPhYD2%2F0%2BjvF%2Bq%2Fg2XT0VofjPfVAlNN0roenhLuHlKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzQG2nLvFP9KErMjwq3APvA%2F9bkuQ9Y4GGGAvWk652kNM9grNsdo6FhrpuL8%2B4vtfAayW4s7EBiBVVI92nC5KymYd0ToMddIWGWMWNwkkW8sjTu9NHjSCS1hV4iwj8zwldXpOoStvsJFmSu1ascwLZq%2B%2FEjRylXtV9wdG1pMHqvWm%2BHLEPJd8%2BFTSVU%2Bgs22BTxqX0yV8qLDAKhtPaRvPXBOLAxtCJbqPEuVkWSL5nZISI%2BKPjORjV2%2FKtSFySPpP8P28fCOSyFihs94%2FmAUw%2FJ9y1V2khZAyrZZIrniPX5Ld%2FqIo8%2B0rQR13pxMxVjo1RxOBod%2F1oKIZKwjQ7CaNQDqJRn4frqspwSPtwYD%2FSkB81anICNsO5K8PKz047SCIG2yntH8z0Bun6ablmCfUZ348lKujampprgZB8j9RZAf6wKWmeO0VtKS4Vix0xGIpbgoJRJQ9TUw7ZQytAaYq99EnSwX7kL66UjGLh2epHKSZY6iXRUcR%2FbEvAwy5akGI%2BbJ4080BnhS2k%2BcX1uIrbxmf79H40kZJ%2FoG3%2BKFDAun%2FoHFI4vO5vUKw6QvKUlXpa78WzPslnjoFF6uAhpnmyXhHYZ%2B0L%2FUQDM3JGAq0NW0sKeB5j616jAVdUf3IGElvb2YljjRNN6Ig8JjCStsHABjqkAfCWNbanRLQHFnovRzWbOEPbwPQLpHx%2B90AMxbJVY4xXr1%2B29GjwWbbdE53abIRwY1qfMb8dP1JWiDLuQNUVcuxJlyW5C0XDfMyMMLBUMgiZ2NAhU6EZ9fN15zpBILq5BEE0Nhhj2XObXX8iZ527u7LbnMcfSpau7Y1Y0TW1nQl2A80P%2F00PyJnd96lEJyQlEnpwjzjICNL4m4MhZHQWNThn4mwq&X-Amz-Signature=86b7cc74cfbd56a242101804af86467083a7dae01a9daeaec3a83b1d3cfb7ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WKYC4Z%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVauW1HiYb0XVaARaE6WfxOK3gxSpfUxtoy3Nc0caBFAiAdsQwF1zyQFalcfRNeOMjTUSKu1542fQDOAbGsgdBCLyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXPcZXsUJOrWqKydWKtwD2tglJaRC8WeTrUyEuem72%2BRvyQTwpQWZ0VqW%2BHowLHG6sABSnChW43H%2FzHcMJmu9rdbcgyFyUFbu03EceNkBJdlBKnFrq8nmzn7mgTYg7XCpEskkOU0UD51GcncV0FXjTsEODyVZDzS%2FeSMU%2BPTV3SpFcsWuAJEnOxk8ZN78iCLNZxyW23HTrv15jxj2fAUPvF%2BVT0dE6oW5dqeubt4NOPvPRl%2B6DJJJH%2BjcENCmpk0VgbGM%2BHSnbG3sK9wSGkklM8hSJZ7oM%2FfooWQLa3ShvQ%2FsLY7hAqOnL5Lk%2FVIDfcO3C7pqYKGmdvkhcldl%2BvzUH9w7cFSges1Jx1ebmIyulAkoB8RtyVABcpq%2BfHkBjAF%2FzNC0bFwVKM6G9N1Jt16wrX27%2FBwQ7LfGiT6IROZEvXyILMccfsmAWQIEjPZmnCtj1Wv%2BoAGZ%2BoEab7611Fy6cKTSdT1GUabqO%2F8iyDqVTHCmGQFDCHGUq42n5Mx48Y1Whxh9G9Zwl8xc09Y1qosUj72OJgaZgaBHXjtfSBIf8fxcCdK6t0iMrJ6cL2Pnkjo4vSMZAXv8eDiF6p1vaqEo2JSWzw3YG8ZRzWaWi5oz7mlZz96vmTzeynEwNvjRa3QRRWwGfXiHT7mBLBUwpbbBwAY6pgGqJ5h8tLtVt7U19Xut05my37ThSx%2BifCSJ5HyKsjxuIUKbTcxz2VzLbHy1vJVzRR1L%2FOHlPB51oQb4DcNQseMvXLcmUpBByZMmxNjF6w6gtoWLfFz1fLxKDW0UfvC58vx83bBMdijOTT8NqBfWSeSgxvJiSR7ngbDFE4Nh19GBfvV3vA4aHd%2F0uubokeboGqwQLIhoebmSrPNZBp%2BpmGQupM4KIxie&X-Amz-Signature=3ec06f9915a279215001b9d27d61f68b19c30eda221585f0411401468ff31bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJ3G6EM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0miDMRw4VxAllooXKIH5XgEfCB6da8%2FL9mBMcVm4J%2BwIhAMOK1nIQusHEqlnig8oTafaNrgTe8qWsZTzIoaqiCWxGKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFqnPdqoKcpmL09QIq3AMMndkNZ4alp6ky3HfpXd4n6ohXveHFg9B%2BImzhxsSvue0GZ0rqzuD%2F7cQOJaLcSu%2BTNjJXpovGLWZ8NkiNLXxFa24tgWXUjAg6X6as9xn5Y9I0JyiVPwtf%2BEOW17c73jkRHHfvxmMrHD%2BJLsr7XZWCAu0QpSfLgiwOaVeJ2zYGLANRwZ5fTcVf1fX5BbC67c1K4iDJE8O5ktzq0BYM6Nza9U64QGL2vmbOPGWWPlA5w207JlJouU6VKPXzJzK694%2FrO%2FRuYPMmyUHJjjmErTSWZLQlKpe0s6XRYQdc0ef8QHe%2ByEkIUYGjTa8%2Bg%2BXVKtyRh2Wtla384kp2A0TmFT%2FKaYF%2FL%2FQbEvFNnj2y18YVX2%2BzSoPbG%2Fx%2FRZgu%2Fv1ZGVldthxYhaBGBynOkx8nwDfqJo7TuBgb949DSo4iI3RHiYo1UVO7MA%2F%2FTJWPXWynRse2ByBfyrzCPhRpMp5%2BsB2FOtcdlW7rdKKkg1KRTi1IdcqPaVFSP7ntcu0TIehLf1TnHhgiwimlPqtL%2BVTkOD%2FXhBC3IKUCQkKhBxh2PrWy8sm0sxfqHAq4eCGjM99UVY%2BYg9OnMYGIuf0Q309WZB86m20QuuOhH5GttsV6SiwZPPl%2BuQBKo1OhEUJcoDCLtsHABjqkAY%2Bou1nm8%2FSbaD1yCZwzEZ%2FgRNNGN5TKaw3396i3yCKfmYUjH7Pzj7a8dPoGl5r64VJjSndjuJ8y8lU6zeYwW9FAVJZWBWnyblk9DM857img7FtDdBUcv0GFg9SPjJHbkX9Yp4vXGrMQFYEGTm1n1qIu9XYAj23867zLHPRISEsZcrAoh8LUbJlU8wNFyI%2B3VbGRLSoiGGLpR1WBOSo7FLajDoD9&X-Amz-Signature=1596d6cc9681d7dc52195149f51fdd16225efb8d4c705ed7af6795b01766b9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HQDMEVE%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T053858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTT1Snb6Q90B1aP%2BHhVkvAxHFgI%2BOGOaoRSHDiIwcqfgIgK0aBqEWy3IFeaut1Cq6V5B%2By4DYgehUHt7USK38%2BT%2BYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqKfsNzHIoGPBspTCrcA4NCsxk7HfO%2Bi%2FQBRaRNwyjJTwZqg0Hu%2F7Hxuy122SL4%2FXd67VchR1SOeDhrJg0ZewAYEPLvGhpEOymVYZD4SLtMN7RCcj%2BD7bG7pnZlnbF8GPOfyUmZ088mOd2N7VWkCz4FKDaJEBX6HnRXMAb8J9qW3bzPiTaJom04jlqU7JJkrhYI8RN48F2vTriXL8qx8IqpycmH4Fe0lKrLetCKjkyxTWNxM3rqwrvrYSAe0OxhawOpX9Qo5E6KgvOoyDKFv2beQWdmwL2YHhXErTlnnQRY6%2BfYOJechu81HD0GMERsp30obQKMvi38FG8te%2BQc8leaXM4BP21ir5sVPh5DJvdC1Gl0An4f5WEutf9ikYH1tZ7SG5Xv7ySShmYm4wGVSv8rkxAQmSM2Q1ZoDPTwHoNoefJqd%2FGO2ZihSjTYDvQApFsiqhx%2FNRpd2LfoeFKNt0ACvRssr4vXmeEKJ8fSocowrqxpsOA%2Fbi5ADvnCivCYT1ndFoX4MmETzPl2tygh7jma0H0IJ2zMU709r6dGGjaJDKz8bF2%2B4ZNFmIF%2FGwH7Zw5Q7iMA2gNbLL6mPXkg%2BlWymtZRYrc2BaPK3G2pzYxpi%2FsvQQKfruTNbjny3rw1nZCiNkxriovNUlbKMNK2wcAGOqUB%2BnpcKpDpvN5AUU0kn2V%2FVwbCsol09pmGBveG22ICGNM%2BglgxC4zeH7vWvO2CxEw9vEGdfhpJakc5jtdZb6YpVX3m0ItvnSSs7PYUGf5gSpkWhBgR%2BVyhB8VDtsc0r7HZ1K7hdt%2FYcC60CZ9C25vl9PT1Ri08ERJK%2BGAnp4mXV9MJw51wB3k%2FeA9cZldV3cMusxaI0tzfngZuNcRIGRvEw4%2FAulJN&X-Amz-Signature=99e8590957b704db8ace69e39f9f1756b3f6e2a6f156052fe8201805261f7463&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

