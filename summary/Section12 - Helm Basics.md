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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4H7FAF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCwjdGhgdOyVnj%2FoTQwwLV%2Bkmw7LXyKO%2Fn9I5%2FE5cujqwIhAI%2BYokA8UFf5%2B1u6oTs1%2BG0fkrtALZ16WWrPJ7Nok%2BrIKv8DCBcQABoMNjM3NDIzMTgzODA1IgxWNN0XWSiuOnHLY3sq3AOs9JRp%2BPqyMGGzZkYPgabKHTjChEgtpR8HImDNO%2FvKRBVcsGGYgA5KzW2bYOLgxUFdQL%2BsUXtmelLwLSznQhMCFSCf6oPx3DcNcLobuMgNYVxgtBYseaH6AKJ8OLpvX%2BwjyCF0O9cAUue7mzB9irPq1zEr0DoMJDggN%2FLkA2YJONLPOnIBJYl1F9emgbA1LMV57crKRnPTYwkQBZx%2F1X1uFLBvWWE5qqvUMFvA0gMlWyqAb8cYmGXDSZsa4sK6lSl9Ytfl4%2F4%2Bg2oq1a83dX7zK%2F6gY5OadFbAuC%2FrhFExcOR5wtEw16GBivhxIQSxQJcM577SK4hsr1CWlyRT87J3vKyxJsBRnPmM9gyuIc43NgKdPwnJ8unu5BY1MwLOhKL7X1R06w1ABljScoMA5RhFWChAI2UqrAtXSPJjOPO8jsQJ9bYTFRzY%2FDNLhxVxCEn6KA6K%2FDw1%2Bx9hvfwP1Jox0DUTRIgonNhXaWfl59bO7R7vW1l8kM7EJ6rlBcPC7ddgcKXrFykumR39K%2FcmxJ6G7%2Bx3s2ANsYsJ4gZb4HSr%2FxbAAqay7R0LuzcpM0YohjwfS%2FipwEU4bK9Zytmm%2BiQqxRIvA1t643W5W7EANqKuwGI%2Ba1HX1sRJoS2woDDbupLBBjqkAe7WJ4WXARVlNMhTwzCxPWNPsWSz0MxlGSx9fxJqiijIrDg5qi76Y0SLg%2FI%2FKBfOPDJ1qAjfHZEQ0HFMS6KiTsK2fPcRh7aXCi3QNqt3Q2IDp4D81mQIpS3htiY0P3%2BbyiDOPqvVo1EfaLWgRGUlfpNwt33UYktCgxVi7GlWTzKttGbJ19oXhRq5Y5kYeJkQ8VDl8qMct6Mfa82aGhVIHkQs%2BxoY&X-Amz-Signature=3ce9d9e20b83926dda98bd2b86bc23cc7209db7bf34fb1644ab1142cb97c84aa&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBIA3QJQ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDXx1n%2FY9VYpKGJ6rUOI1SSbu6iPMDiZGHD3%2BTXLHO9FQIhAP99ljE%2FCxcwUqLuJkOkQsoTNV0jAVx5QhFMDJW4UUICKv8DCBcQABoMNjM3NDIzMTgzODA1Igya6UAGVmikBRpzos8q3APwxU1ERvc2PlonfQ%2FShhlyYAjtZKkZ5nqoRU5jXpwdMedRQwn0wfuXaklEkgOwKk7F0yxrG5mtq62vwK7qpmyJlNSq4rCnbK7mKuROnKQuwW%2B7MpwJK3VJWa2iBPaIiAFEvNqcm5yxkzD2DUBlGuGq7AODChjAUkbQ0NFHqyqTJNmQlTYBkO6%2BQXr3m9KydO%2B9XmotneW65p%2FvhxCYWhx4J8yioAfc8cNKJSitJ1PuIgi04pBPpmgRhlRKt8gvzsQjpe4ro0cEW9UrNFp7cm%2B8pL0hFdQhNjHtVayW9AkpvaXZl%2FWolgZF6FXyabFFLfEXOJ%2BW158cBMSIxctKEgGv9fz1P%2FwihTGAR69IHLTrQ8VJ8Uzc6QSZvVb5gXv4LtSPJbPwOUxdfvxsUxOexIeq8BcRlm1Nhpe9uAW8emPnwpQ%2B%2FPy7%2B3yV4LdeUnlk94cUbQ4X548UMU2%2FIrqRT0CLGY9Wku%2FNanayQXr0X0fpOceqgI9HmHhFir6ojFzKd3XqQhj%2Bfvy3aBIKD8J9TCQpkogIBHOEEZxdEyHVkQXq5tHl4P34ovmyoCRvPVRZ7CaETQ%2FVvRl1lKk7dbOgdPyR4vrNciCvnNsw6BODzdvTFMSD0LpQrh%2FK5fahdjCWupLBBjqkAXKFWoHxzOVc08cUNHl5qcslCAUVqKe6%2Fq3jvKcVyNNk4xSCwCNb9RLPpWO9IHDxCIbALfnVb%2BXvC3U1ZKmlce5CY%2FtWB1vuFqjhiLX0mwEiDmV9r%2F%2BnqzgYBNh74g7LnoliMKYQdvCo4BDjMeGEYlCnWrDLzqedLauhdLlwNEQQYpRiIL8qCNz7Gn2SUqoZ%2B8jmKt8p9t0PweqOs%2Bwfg7D9h5FH&X-Amz-Signature=5d3f7cd44e964d9208f0fbb46adb8ac7d46e1f166fe451dea94ded31aaae4619&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5VCJELL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAR0jEHOYxAeVCXSx6%2BCqiTEhNKjyKJ45uqoWGASVyNjAiEAkzyewDr5E8%2FclZdSjWsKBKDpVMwfu%2B50Xzy0%2BMRT1AQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDC0%2FRBfK1T8zWBdQ2CrcA%2BS%2FO7kOYAMop7Z%2Fzk1TB9ZMl2T2QjiclnipryMIUgXZDKrsFlQD8dWPZznYk2rBxhO4i6Bqgj3X1Rz8n0kPw2Adu4LJli8Eo0k5Bm7%2BfPWkvNrq74XBEoSx%2FvmG2BEhjYrbonUTCM2Ad52ctN8ONT3t83lMO9ETJRVXwshdjyVic%2FLmWwqzSMv5o5B%2B5Wq1zwoxD2CUP8APYpAFeNC493melHLXUf4YR8jJTTbtUXCGo59BDNjeSgiPLohd6WECsMB4abx94imaKYDJQbY1Qyxt2%2BRn57V6BHiux6%2FcCLQ5%2Bw9KBfH%2F9mKQSuQd3QOdnNytHPHYD84gZON8uUk0F3ArunPU6iWmzh%2Fz2SOaydmXR4%2BClGrxgf5Wo82zA4fFBvKHFeCIXckqP%2BgRYUAZmSecHpsnuDNAJ0Edw8gFd%2BI3tk5t0boF8wT4wsQwnyodmAFOhCzvUHuJSCXRtOfewehzf3%2FpskOTMKIVJnUZn3vWcby2jwoI%2FZYLqiWJVxyOu4gu1b3hctmo4LO47f3G5mgzLO2YCBg8Six0f0VeVVYfqt%2BnbW4fO7rZpvvG9OeacQhdXazWwJXcCyBR3o1FuMIt6e3dQxrzL3HADh1wl%2F5nxg%2BhbRhHT4RUPDdqML67ksEGOqUBAkChTVVWfZ83NgvatYBJq44qcIu1yDGsVCpGiUCm%2Fhp%2BX2RlUTXxkfGwjt3OQpaQuzpnd4zhJ4zsnlo1Vgsdk6MCNpmQQoWq7g6d9lsxK4fb8kRQ9rJcaiQIq6XID9a3M%2F3QdFsKLJfec77nT6EFPXrqzuhNNudb3GFD6KvNG8OrJcuWi9WHhVcsBRKlJ8x8KfivOldChag1WlG%2FnckznFrpQ04G&X-Amz-Signature=c2848ee5d9b4907ddb7cbaa7f0ed32f353b85d097216d975611a206e39451372&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWALGC3%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIF6ZjZ58bq8dkA1AbHN2fUF8WFFi4Q4bvebwYOeUKYi8AiEA7%2Bxd70uqZE%2B1zk7qeWQTRS7la%2BuyUqklwmF6NoRJym0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJAeOrKZERMLXVcUnircA6ZqfFoXzIlxd6DqwPWcS2eedp5tn%2F%2BLHqDglf9WnnSDdqXqcoun5abIYnlPZxyZZjxWcW6EBiXNpeY3zp%2FLyy8tbfZmd3AEDB0I%2FBwKqKhavKyTwRGqWlvt4r9kgFBFf%2B2M2UmTrX9VXaiFNkoRKXUuMskAQsbRWkYel5uX%2FBd5Vy3EegnKKbv1BL4MRRU4SzsJGqJszIu3BtHemsTopA1HSwXS9q6JYT6X%2FCxhhtDzUjS7g0srfcGXo%2F43i5NBLXKEHWrC3NbDyCljsoIuOcIfhlYW1j0QuqfNf5HVgY7HKgGISQbUATfDgamfYg2340ubSuCY0KakXU58CWFwtoVCaGTSTZ08AAEBxJwFQeJbQMYy47pBQzLnL2zLZERRvNvqk8Drgo8t3vFndMuXAXresSVePjvRlAtuzrmgVfyQ37L%2BIJywEZIYGBZT7Ztx%2F1NUvRu3IFt%2FqgulIHFG%2FfO4IEhyJVFRdtaRzqEj66RyUf5RPmiJNsqL08m%2FMkpdYKBmekjuD7EZI4gHvw7ZmyKtDMpunOJyh%2BzhqGh8I7Xtty%2FsLwXevIxMOArHEbFgfFWuyn%2FA2nHssuidUT34TiCEiYnNe8khw%2Fqw0tKCoXwTWiyNVabKfSFoQ%2F%2F9MJC6ksEGOqUBsWOukzOKieQ58Li%2FeKAUjZjxqXm2rnjyTsyLSwWq8RSiYnPBodkfDRAfKUpTcsIXamFiWHIcCNYBD5T%2B%2FyxNRXy08isa3JUrMgw8ix%2Fdnv6O0RPxkLKkujpKZvlRr3TuxQcZFdaXGa6Wg48v4CSk%2BYYIGdBjApSxZaqBTlhdTOR3NQXQrBHCVdTQRprFKNPIX3Dao3gqn9CyXrydN9xSjX05Wjro&X-Amz-Signature=d35e15afe3b06c66504425767971a5f29d4c74a702a8943a5e19d4c69b9fb660&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCEJ4V37%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCb%2F5YBgeIqMPCJx3BAD%2FaL36tHF6gF9DNneZj%2FcPUzcAIhAPBp3Jwl5OAjCNQHz6wfffofeKBfL31rHbyFGwZCI%2FGaKv8DCBcQABoMNjM3NDIzMTgzODA1IgzMzUXjJWo4zM7P3Ycq3AMi4f6UXffS%2F0SX%2Fsxbfz4kd9DeGK91cRj1gaopR79PhcrBzA6KNziUL3UOFaSlNJzV9vKzIvFeU1ttsP7%2B%2Fi5ajzLx3rwDcKWRZrLnOe%2FnWd8Ka7%2F2nxzKbjHyFppwUNJdkLW1NY0BDWLdd5Iyc%2FJjsckmNb3mUb%2FvvI%2B%2Fobi%2Bc5EG9NXBV1CriVQTefKeq1YgKqyuX7VfTBX1qb1PScF1b0TjQAQdvroANcmD6k4BCsspgpiAmve4WUvMNwMauwe8N6ipAmZT61U%2Fe%2BmhdtH0jAlIHOXrZTTcoyyEwOjpUl33A%2F%2Fsj1ZC5fpDkCyDwzqrJPyypvhO4Cu7uCl6yThw03tmm4MytS%2F21J1JDkRlPCtlrm0fgGmWZ0bjaZPMC6wPlIHicWYmbSn1oHnnUvXbyiuvZ%2BGMYfJieeq%2ByAArNAP8OeRR%2FZ0DKbjSiT%2BfJeDSXdcscnQmfOTGlDVy7E%2F5etJ9ACDH1LhsPHnYDipV4%2BGPmkZBcpUrGEdSbGHfxAPuI2%2FD6PZImEaAcXrjoKzJsqHsiVMNJ2f6mjqqkaNGR4mwlSLUXoDxoBGnVwap29%2FvG1KTowaskFRxHKb6CGepcxXPPKqwyOb5aZSviu%2BB%2FK%2F3KK5DahAB%2Be4sYjD%2BupLBBjqkAZQ65bwfOM9qjAaVKwQaLuLvxDQd0EjZ588cWIqhqNt7udwRK%2B6uSdV8PhkEbAkCXfkNTLfAFsW3n4XvrvsXf0TdQWQydNwNajgyMJBwq%2FuSlGAH8pBxW%2BsJjafXME8dPR0QHrzIMGPHha2A2rvPBvQIEehkwWoCDhOjDGmE72PqM2c5op8pOef7gD7XSXJ9iP2D7OJo5WpAH63WOC0kZEhnTlCY&X-Amz-Signature=332633451e531220283e17bef776eb3ea88f84dd06412b0d4364198744da7a01&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMZQA3I5%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHt7edx%2BSYy63n4X%2FRVjqk1Dbz2ij883u5wbtNmQZZa6AiEAqJ3fL9alHDzIoyolHisAYAo4KgdXTyxCfvWGpfRywjYq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDL%2BTZhC%2BI5J%2FtMOBWSrcA6b%2BzQFEU%2F6IKUcgrf8%2B5EgaXeLpS7Io9uyOudffAX5bRuT0EqEU16jgozeojlRMVzKtE%2FocYPX9BfOW9JLvY5A1nUphFmckTwIij7URLAknMrMzGefQxmJwLaMAHVl2S%2FX34k8mLpucCbMSeQBVhMc899D8GBA60lik3gOlsFoe69gco6cUok4fWCq2wgjl2N5njfIi0D6zNXiPF7E6lgcs1rrArrgl1KPb6G7vuOp7SoxHDhMSM4Ngk0jCyfKmPG8xOQlcaeANXvFYewcladcLVUF6Zp42KnImI4LQJc3OZf%2BvM6LezlmIt5xyqhcQjes%2B9t6EX6cDbmH3OIRZk95eaxmSWwvzBhdT5WsdnIRRKgFPqaD%2Fe7x7qtLqQ2jX0hJ5U5FUjIANohlELPQ9sVg3Yt4RJVPOX7jo%2FbupBXfF6o0mvpUsP0JLM%2F0uFo1aSl4x0shbWtClqh%2Fz3hEnr%2F1r%2Bj%2BKRGW%2FUezQTp78E%2FcWRX70J%2B31NR9gcBR%2FGEKeY%2BXY%2BVWbjlcoZHdtSwRFs4DeIzL2mRkICJ9YMORtS6TTSuTRxQhqIOGhE0e5VmfE2WeI%2F4yjF1qnHJL1Od5vL%2BIcKhUdPNr3PSLBorD8zQ3wk8%2BcYWAicRndrVNSMLi6ksEGOqUBCwg6ZQY%2Bxwmf%2Bfr3iRaxaVzPolUexLo6ALOzWKzA2SCVzA%2FN%2BACdJ4OdjRBXivV%2B%2F2rISZ%2BDvGqGpxhaWObwTabVYH3TMTi5LBndLhGHKzA5IwAMLQDpH%2B6RjO5%2BFfgl5b%2FO6MUdl1%2BwS22Q7%2B0jKgdIBvhQcSTBASGlmP0T%2BXM0dwJee07A0vCwSzVBwsO3c5gnybccbsTEEk8RuLCGFktwXCHw&X-Amz-Signature=93ff2491fee1e061385ece776d05addb47b47098188c3e745cc8221e1d4b894f&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NJMVTGA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHXRkSyPBWzYqroJ3b%2F3ZSrHOcehpO6k1BTLBU9EkbVvAiEAizRjDABrx3uVQ7QD9rMl4rFI5Yga2fRWJnIPD%2FiDjjoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAd2zmh0I7Dj9OtejyrcA%2FN9qWdSjfqPasCScDiblJpM6mV7xhCabz0EZTnP4JpkQaz%2Bl1q4fOUS2Ck02BjzPzI38r1trm4EGvb0wPEAqgO4AtjcOo%2Fl581Bf7PjZiHD2BCFXh%2F3Fj35agdak3SJg6Kdqte4BBnGaOyOc6sfb2SMWV2rs8e7fI%2BRer3KjF1du1hfAxVhadqlYR8%2BuTwMdx9kfBBrW4Rz9QC7fLKxqPQ%2Fb93MFq%2BY13zakLH6703tZko0AyNeHqqYsMvq6by6%2BT1hwuyzrx%2FhTSwEfC4TFDl4Lju2Qha6v0W5KjaxbmtKzYEfvAgWmqRCayGsmMerT4%2BVxwDoemGTROBxdVpoEBPkag69HOo6nPr3KvFGEp2%2FMt52OMey%2F3WjYtUTURdmqCiVhB4zPCHQ8I%2B7YjWtXDtpYP0iG%2FTWnqsjaYXRruszHODvUxzLkvmoyaDL2tt1y2f%2BxzY8HwkmTIdarU1iSQAQipVLePJOj0ci9wZ7yl4yl7FCcch16Wah2ZeoVrEDWkLOtgMxALQAeOCmw1r3Gn%2F%2BJOI0n1vT9%2BRWYkNBEGWoOKiuR4oWOCMFpSByMGn2hO3BO%2BkV47JUjeIfKSJpMDz7cLtTrVKJr6R6Puk6ntWY8onF%2FlkFv0nfHd6xMLC7ksEGOqUBc1Z9dSY%2BawLgH3iOXeb6X16dh9ZDALJ91ZnX3sqCAotXCK%2BvuRAppP9LBee3zovppJ16VlS94qdNFRT8uzG90%2FTwwOnqYv1E0Ti3PnNpix9otwIwh1XPjWbhBceAunmcty8VINdX0JeNDtji8RNa4g4sKGMvEgBtiydCHfcuBiYGDV6cE9XO0IoeCd6dclWoBnz5vV0nA%2BCwWPJdnw4NFY7U08dw&X-Amz-Signature=47e77b63a72378689a121e1ddaa63aaaf78f26bcba8010627fff3f722b1003dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHS36VPZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCJaUBCV0Gfp5jluTOzWr%2FEcZas%2FyGWkt1mO3yf%2B9UpvQIgNSHG8C0LNM7bddYdqRCSMhrELdyoPQQaoL833l4QiYkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJBlbQ6Fbx2p1kLwoircA3aRET17uH4vZ3dsKiWWjZm773Lz%2FEWerSem6146LbRDOv1kjUQErCF4N4ljAeDujoVtMYj3n1zq8IP8g%2B2OmVPTTy2Qx2ey11X69%2FNc2lhr6bcgp3brzd8ZEsIkLd%2B22JDC093rR1%2Fqx6VSejwWVMCYNaX2SGUS8ZSH32COOu0CLPbI5NEJmOAPeUjpbKGjH4DM2wwOyn5zytH%2FBWuvS68TPKO2ZkOtHb7bw0erFgLMqCoH4xY6gqg%2F8h2ZBNfl%2FmEeIfx8uC8ENbhVD8e%2BgtmJGRYqwnPAceYsoPmWQKk6MOMCGV1ypLusKLuBEb8vOX1lLwYJdGPJct7S%2F2wqUNtOtIxvVGqJuqdNr8ezPAV8hQy0doBuI80B78blDgQNFfdOUqN4ob9QhSYHpz50WQeO5ICblr6QJJZik%2B0aFF381T1et21TGfM7lW5naobyMgpn75FXTlpxfrxfztwEHRvkpg4uaTehmL8kZujiu3GhknVveaomdI97kCQH75lSEVKYTBLBWg4emPQoSXn4UeKlnNRkkrLpZ4YaCyNuNA71f5FVF5U%2Fi%2FTo1Uzza00kTv7ksFUYfcriY15PXPdI6vRuX0Gf3nn37ZmCZy%2Fe37bys4RNdWcO4iEOX4ccMPG6ksEGOqUBEHg3jxdFhXwIiIz15R%2F2mKD1PmMeNy8AKKQ1Gsuv%2BwsXcLAWEdUrhCrmIHM0NoaN%2Fxuml%2B%2FPKQyZcRUTjYsEBWO0hkNo8uTl%2FUYmWhhzqjUhJKkPuHdar4%2BTK72qzxPvsLtm%2Bs6FALdVn2dnawg8YF0aON%2B4xabT3aKb8uMcYODL91h193K9xp1JswxhCv%2FvlSj9UBqOJlRU5m7hFo0PmqV66b26&X-Amz-Signature=14457529c73c90544be54ff02ade67f98f8774751092030c94b634c85374f5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GBNKK7J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T141318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBxJC1MUktUqdESO4o04Cdg1bUAEMhAz2YaRlp%2FBQB%2BDAiEAkhkdtnWmL6cueU73be2GVQxAM45my3TkxuLGzQicYycq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB6xitM2ad879v7alyrcA0%2B2cy6cYhlaHj0swhVSCvK1ydQo2YDCukWRZYXcK4RQfpIvkDj%2BJCQcgKX5Hd2ynrJ97gXLzyF9%2B%2Fp5kZHygc%2BK4a8cL%2FZxGCp17iU%2FA8KlR2nfokpE9IiuTU7HpAkc4u4y9Q1Eyk0aj%2FLNBFLqUhJuhgsOfdlnYH7ncqiSlhwlr22APzOSyB72DdqGryqzT7xefBekLfXCSXXZOZ%2BDNiWIZnLdgtkN2co43KUWZBlQcj%2BWMYUBhAdWaqj3Jvi4j3QmDy7HR%2FMCLAZSfBAas8kYyyfoicyhbIsPeIM4nz%2FzN6rdBCdG1zlKyerbXR15KHpoOCDV8uGDCOpT5ssceiq2oHCYidRxiRgX1chGH%2FngQfI0IALH9nIqouCUiGOi2K5QQ0wjJikdfBYLoMWKG58VABUay9c6AzVR9wYCRGa12VMO2y1vJ%2B0p8hNzH3VCsfxcttvvZL%2Bxxe6mLfynEMO7%2BpJ%2BUkpfC3hZ9Yw5jzbKzS%2FBi8Jx4llQBujVQy%2Bf5hV4ipOwquTHcEK0kSBMuixTYVFBZvvLB9aC48K8lKFmPsfD%2FUCSj%2BJnKF3KNpraxK9K4kY3VvsUObjLPdQTcyhlNRdfBR7xzjDi14wZA60NvqAyTeK%2F5PijBBlOMP26ksEGOqUBbXpDxUEPVJ%2Bub2cHacQ%2B6VU6SZvmBEE3qvV9nQ0X0zqRo0%2BZSdhTvNS6r65WuZgmZ3lNKEhEaeRJZqa7dtHBq3DhySDKyqCTNqWMd4ybHF1GB4cFbQH%2FIFd2qjUXDa2IQIjrmwZESd%2BqhXXtxp13UMQ3JR8223GOi0wPTHYi9XBhRznJa24ROn%2BVvS8eCAd2XxdBp3UrD6qHQV3VrseISOTdYWZQ&X-Amz-Signature=08efc8933393c331f1bd84fa301089df719463aaf0ee354f54fbe981abb4a134&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

