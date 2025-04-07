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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGGOXI7%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEg4HKQeTH49rGr%2Fb%2FsppakkWtcRSMor2Cje09SvKT%2F0AiAGOC7QfZA9kvb4pT5R%2BTLWNlwveRwfhvuL3ehneUBAJSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM3NznHzJb%2BTYaBtgeKtwDAMY7yEopufHEyLlh%2Fbbpfff4qNpuXYWsjMx8wCQbwL43JnP85XXfgXLaiIbW1z6bV%2BiuwD6bIrUYKarRxz75m0u2Yd5A%2FeBcO3PGxWVYAVkZCNt9viO3PsTvbI2%2BXPl%2FQ9GtYERbm8cbAgVKlrT0IGEDSv6GVy1qwcWs%2BS%2Bb1HbT5CUuSHeE7nVvOzR7NZ3vgWPipt8omP3liCmtaLtCgFiv4pEVva4%2BfOrI7LSzZ8oC0S%2BQn2Yxt4bxNgqVRlRTvD2mmpXgQABqmg8o3TZ3iY4vyz3Qw%2Bp%2B6asZkvKZBRfCA%2BGaK9qlN8%2BIFeE6A2PAkra7PDndAXpOQfzPpuxFM4lebB1qEDyHZIdYRXnMhQMpHjaWwx0%2B5qFc%2FZLgwOdobJdqf%2BdJc3QaBeGDzPP26qAn7UrllTcXxnD2u9sZC70J2CpKL1mqCmINcwOMuJA%2F79ceqitUSq1k8RZvoH4zsxxKNjXe8TISQ1Ov07HONMtojqOIWEMozydWakSsliywEHcKj7K8eZF4vJc2NTzJxwoMjzRSvRK%2BWq5b6gu67axMSOEGi8LiIoOExNRBKMyEeEVEd8IRXFHBdocxX7cWmGCApo9dQHL%2ForUYZ14ODygaVUIaCTrdGZN3YpIwrrfPvwY6pgHjXA3rgLeh9HtX8Idb28YaOw8G3bZVaEQq0WKk1wxAqnD%2FdSJbii8o%2B%2FuYeypFKSSZk9WF7Yp963uGeTNjcoend4q1oGT%2BQc8BGJ6uYFDSahK9tNl2hjXsiei%2BYroDG6lUJ3qupSplb2FYMQx6Mznxc2SmMr2Y8hehZYpAQx%2Bo1oWGuvjW91ZD2Gcbbvsdrh%2F4wBq7JbLWNyV%2FFr0bWJYep4TKdgxJ&X-Amz-Signature=010473e9ac70abe53586be52105ec3e38185cf68ffac12d1767f4b6aeb67b92e&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7VPHBEP%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFUncX9OJbe%2Fneoion8HSdSP43qzVJYrGSw7XmW1y%2FzgIgXCBeQ9KXus4OT63r7QZ5i%2FrcKx%2BqQy3N%2BYRLYJf6uj4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP%2ByrhYGl7NnDmdb0SrcA2sW381i0hYH%2BWgpMiuRDc7oJKpzQHU5wQ7kb%2Fy0ecqPtzioJetSqBYTskHaCPyZA3PeSEGfF5%2BebzEI7287VfDRtiIo%2BI%2BjGtQASYD8HV%2F1pfwGr%2BBXlyDszdHSDohAu0DjXbIQTugb9azEaYppV4L%2FEOi09pUPE0ZvcK2TDw2EImGkfrAAYrHH%2FgtmlZYopWgNtKhavTcWs0PpwvH6IbKLsy%2FpBxWvrG7E8po%2F%2B6gyj6q4UxgeF78akzcPncEcxXBENGZ5Vi3IUqX4TX1HKCdEFVxFqKRnDbz%2B3Az4r7V%2BgRWESz2XbOQ1SEpSrFXVk9PoZ2hvoje2P1V4U%2BT2RlFM5PlYMqqENxO19tEy8DdKJmFmi%2FQfQzAjF6m0hCUk4EYhIH9ivh%2BSgtPezDGzeBjBHjMbv6vNAPxLsx5pEGyhJELHqV%2Foxb0ytHC3EFw9VxUEsYfOBY0sYczk51KTfN2gO8oxEaOE4vrH9%2BXWABm0ICGfNbeVYz83Tk%2BnOYSznAtnjBZblBez8ijfJzoRm8ZDUxJRlhwrYyGKq1z1rVetcqN2LeGrr%2BMWwdpOSbef7suDAHr0hB%2Bu2bsx4hLiGZ5%2BcGSoARfEw%2FffpMY3YrKEQXlqCusDd8AqfZp8MPG3z78GOqUB1V2xF%2BZWF2WwgZcEcou%2B%2FXUeI4sbr%2BA339YM67TOwSjPYYVwmzjfM3PzeM8JysAzB8d1oReO0Puem9yTZmXCpgvNvJ7aNspE3b6XJ840cmpfw0YKlPS%2BkmMb6fG8bkt6bMGNY8pswF8F7LiUo8CcP012bqae%2FM3UuB50uF0vWlmiUlkgAKxqG1IEIQil%2FGXXhASBF3tnJJH%2B9eXhH%2B%2FXbsEbki0k&X-Amz-Signature=ef9a7fffdeb9c05a6c9c1996d3610b067239fc4cd01995ae2425d058aa2945ad&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYUJAOW%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxHKTn7Lxrywve5u%2F9ToyU7Fo4cmIT2OBszFbeBOvqnAIgYKD4Y2oFKqlxZy9nz04GDuPQL5xpKHGVEqUT6K40x84q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMemCfL3HPtwXpcfBircA%2F5Pv3JR5dis4GwCQlNVjs2HkpYdQN%2FmU0WGUAepL%2BgQB52%2Bv5NI0Nlj7E6rqRmekzzwuZkUc%2BsIMApguv%2BdF0xlUI6b%2FxkwrUfCOh3dLR7yWJdfZKmyiQgCR4Fcf0iGEJU3WdWCtwC6LNNDnNOLbCPCzGrkbAUK0L0Sj5ScrqqSrCQHwDPXFO6RVevdtjQwJBSgqTNjAxARCCCy1tB8aBT%2F5KcrimMZlA68o7ol5S36EVBSno425brPBELIE4Aaa4%2BjJeZvanQYAY4ivuouCOEl6PnVCnLoHoXZPaOE%2BBzGSmUMmO%2B4RS7%2Bjgs8UMUvk4ip%2FER1IN8PPBURWQsCGsWltVEKr1sZNT0kurVvBwQ94UKw3KeyGJIYV%2BEIMIUt12NwNIRor7j0dl%2BbT7RvljUggYzNzQgpBr3dhA%2BWyMSSbnz%2FeMOiysByTn%2FCpFpyxzo3p9Kors6YUlHmQofucfKX7hTDmaV05hcMQ2J8btFq%2FdL%2FAjcH%2BK3oDybpfXi0ins1i6d0JSfeWBWD%2BO%2FMuc19ljQcqAFAcAiJKYycLcB3LmzXhYRHobBvQLsx58%2B8iobOTjGMd5gm%2F%2F8u2GQt9t1m00AA2E%2FRO9IWT3pt4lhNYeC08fxbnRjNgpBJMPu3z78GOqUBNLing69irwUp5X66OD%2FY5igyysJ54ErEuHrT%2Bs9SBpf3KVYwEksfcKhAiKpB8rvwKgVgTrt5VYist8Y8p%2F4qTCT1Six%2FSBcHOrSqeFrQyG01KAMOxR%2B%2F9JvtK%2BjlG5Fti0pixbUhiebuIafW5FPvoBMCtLr%2FPpfBFc2CvVkp61tF%2F0sTQ9YNIPEsDTpotN7qge0gIQZ9raIEkaoPikprNl9DINvX&X-Amz-Signature=b4acaaf7e181f32215ad7556cffe6855622427c021d0a5b68eb2d93c8437b08f&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBJKRAH6%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLY3N%2F%2B01B5CuLLDXNbdwJkuOHl%2FF9zxDyDM6NHOaWjAiBPpEnsE4XPJojiJ%2BLQMw7VfWZn2owBWcYViIGJqACU3ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM4f48p6mFWEL9RTc%2FKtwDWbHUy4v%2B%2FomuJ0woD%2F8Z%2BVrul5t7n%2FKB7Flbvkt538STZG6cyFNMlrCkOj5adunyhVYFeMrKE4QKt98%2F5ZjpOH9hjlM%2F79EUAcWB4SL2Ks6%2F5ERvX4dCg52fS5Gd1dTK9AeyovPYBDkLAHKD8gmlvy1xz1rBx0kLkkT6sB%2FkS44wDyHTwe%2F7NpPodWaR1gXUBlTD5pZT%2BEunxb%2BUM32eONl4Z6FLk5Uc87atwcc3ecEeJezAPPQIkjj7u4MhZzaHxBc0x3%2FR3e9MgnDb3j9xnxZlsCMNvOYfyzkkTpc%2BPA6ocZH7GtPKogY7u8TZ%2FgC67tLPRwpmguZvp6QgMd2op7Xof%2BgWU9Io8d28GnI6cPBnjibcvhJTUefZxgeBJl8hZKJpAytPY3NIJpREYgq8SJVM1RYSYH2JHFGtKI82d%2FVw6ywm9f%2F9WXVBU7fCYsrcG%2BzeeDQSXRnW5A61SW6L3GvvbB2vWWCdZpCV0NEAFsKIUaUX4bqzxmZdmb%2BQ1BuBqg0zru9sqTq7Jmzgf8gWxEcb04qkfk6cU%2BHKKhfpSZZrb%2F4N%2BpSbq2nI6VggVOdbOyWVjIJlxqsN5bmiQHLDOhmgbXII7QkMIldGgyZHlWp0OVwXTqLLbmp23Q0w27fPvwY6pgFoWo8dwnE8ddai5mOZPbUFEZCXf3emxgqe%2Bb%2B1Od32eSRwa%2FFBB4j3ixe3EhHa70W34HXueqjbK34y98dqMbdC6HiiY5usUJ6peOz64rFIP97TiTlE3BPpjzqSSvQPDrUOuUVs0GJhSPgiILEv4R8ULCz2QTGyRQlsH9qWu8yiZZt7Ig%2BuMmkLfm1XG9oPpgo3LjRUg1iYpmXEECT7vLdrcQYhpwQy&X-Amz-Signature=decee8e6e9328c6bca3b6e0ca3017e148d1279027128daca0275d546b7110b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V2AMOA%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKPcbEOF0nJt2Imji8RfzX%2BVmxadhL07uLaOU%2FY4xvvAiBCRffslHS9F9OT3QEhzEX6tXbfqr1oVUcQ7gQSR0plDir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMGf9YNQvC%2B88URq1nKtwDue3ndno8CvEXdcH4a4ob24LO1DErHts1iCEIe4SS9G48%2Bv%2FaBfhkS6l%2FdJ9iRwt6kcJRmTUg7rE%2FkE%2FrFMKrTxRBnJBmM4p7APsG%2F%2BrxOVBX4aanFptb2RRo%2Fps1Wizx%2FvYlqgt9z99d%2BTX%2BGFjvXDNDyKnZfhC%2B7qLYa%2F6anF6SpuYA3JDhaEO%2BdxmJeC1ED2n%2BfvRoXDuISCo%2B%2FEReBYBi%2BCr92DiJyLdvU5cvI5dIJNNIlDsFa5hyGO3zSy3AetHoPZiKClj57hWFC3MgsnvwMH6RNQeJGaC%2FlpGljCLShKkoNZ51LgqvCRX8i15BAvIOEunQgZ7%2FPRpB0eg0NfYb%2Fv92JYKRZUtls0QEBNONioiurfD8eBr5BBz98X1lbusXFqXX6hlKcEXWV%2F9oo2VPPIWJHz%2Bx4x74HZkARQ0ZxJz3B%2FTJjSiql6%2Bf8ZGxROs1FZHN%2BCBSwVms8afFQ9bwtrSNIufLUwvlAqKAf2Ya1pz3FV5MLU3futa6DtSNxj2Jc9XcooruBo9DKcXXGge%2FrQgxTdT4kiLNg1n%2F2rp3O0w3chN%2BBpSpEVW2A6f7UjxUfxW%2FM2DNItt1WtswbhMZWn%2BO4lP8cMWunCNl9bY4BISoq6tSYJdAM6sworfPvwY6pgGgWxcQBj5R3AGuxQHIqwfFHU0Wsn5%2FgQSG57sQPYye7356fXKjD2iyx2YcOSB5mjLfzfH0cHuld0dzWaWHuKQDbEqwX2DMxRHLco97C4aZ601tp%2F1iXs%2FxVorZwKRJ5hPM1FnLoaI5pJPXh%2B3DIznvzaQ7aqyxbAJb1zmS%2F%2FOaBvAOt3nED9%2BYd0%2FfQJo1EttDIMcDUUVqVfMfSrM8d8ZwNKSwOlUj&X-Amz-Signature=e35602084b54b96fafa96485289d0245730c819c8b12458bae27a9c43485be3c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH4QDS2W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4MsHAj%2BgNEHRnOn%2BWjUU17uQtGtrLypV0DlJQCZsrDwIgC0G7KPimNo3NpCkfIUoVRc5rt3z3K5zAvAomVBtygKkq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCUscs6bbkqyUVEJxircA9TEbi6Lhu7tWs2iVPXKADRMB2cgHZKMzGJm2yOHk61YVGqtTCfaQRLCnbT6mzHKp8A4uNUGXeBvbalnRALSLCoHigAPuhfX%2BffAg7E6EFbBfKuceFv9vjI3PxMTHGtvmNk6uZQzl6Hjf%2BeiNo4CCz%2FNi4QIUHE%2Bs%2BGfK%2Fsf56Ec2Zd4lmGl9TC9%2B8Y1WXr5RMQKqfB82x2V4Sm4RiosGnGXJ0tbx2uCSGNEtM%2BN9cxULYsYp0nWuSCO67nucQmF4Fr9sj0xV0WeXEaxm18zw8xu3NBhmgwYtKtyDuG%2FAdORMeVtczZdSbd%2B3Prm0quflkQlLpaF09CVkt9NnaLEiU45ezwhZO9FHoJ1qOJxF5358gBh5JewKyz06J%2FbZ%2FuBaU%2BBkUqWVLG1QU0j430j8s7K91PPM8%2F1NVC7G8aAAhYgpXNSjQPO5eXMhqf1L4OjIIRz7CsAlkudFeinUxZOnDy4XUP4HeCxA6%2F8YykoANBDNH857cL8KiTghRXgnuufg%2FKWeWuBU8zPLCnQaQXIhy1w6k5GARcQkjGcJ%2BBeNrihaQ1WkiMd9Um9MxXnXSRgP40P6ADCS9vpDYc%2BTpvI0hnq8aRNFo62Lq4h7UJb751czzyljaamlFqhekwlMKi3z78GOqUBfKRaIiHBK%2FvcXf%2FlDWkZVR3kLyHuX%2F3ZNSg0JXeM8vDapQdrkTE6OkyIx7a2uEHNnkGDYJoRaUeESDaad3mO9sGBxlVmIIztvll5dKWY%2BjhTHNmo579N1VHQGXNLvjq0DDWXg%2Bqi79Q8pmV1HqqqPxkOxJE13n1jjLTTli23I4m%2FF9mu10aY21L872cIVSokyDgdiny%2B0ozJMPtJ%2BCuci4Gl2nPu&X-Amz-Signature=4321a61f8585a501a152d1b08853187124b714ace8685eca271c6ca107af5aaa&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NK4BJO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdGVLPBkvh%2F0BpUvXMGEgZ%2FOIeiDrlC1C7bLIGvL00WAiEA%2B0WLLyXktmFVXZ%2B28n0Jybbv4BOuE5pnc7UP5MTdpHsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPf46%2BPdJbqd0EDWSCrcA6oMzAvFXVFLbUGXvgFdAeg%2FDxO7HC3F8K%2Bqc0khetnk4%2B6quHOUUbvlYX3wEFo4IYgXpVNtdWJNgvMqZKFFxOoTjbDSLonvskqwkAR7YXlYLKbC3mHb9qinZJjWuhVhFr5BlhNHN%2BDKL40IzRr7P7wy7B6O%2F%2BDXB2SQh6HOgS1DdqYknVKh5C9keE8gM7R9%2FzN4iRjxzFq8ZXe3FZyjLK4SenGnkbRmLGtx%2F4cuLnzzvwvndLyZi289d0b8nhQqgGoQz6nSo6Evv%2BUQNmuYL%2Bi0huMadWmg92ug%2FqpVkIXTAzpN9NOLIYSFBXZY%2B57pqrSk8FOxKXg0lbFnegskDkJImMwH64dqykpVdfcqbYYUr%2BzyyVBWfINZR5RaOH8G048HPsiisWMBmWEmO%2B3tO8V9%2BB2F4Fpo8TSnLTTwlKiUf8P%2Bb3q2p5c7yFa6d9RnU9VgRnCU2UiX0eFaLk3AVphSRVwMU%2FUDEnDHyHKctbaXzmpuDnj%2FCFfrDydqcKoQk%2FVCx24ixFQnAud%2Bsa%2F4A%2FGEYz0YS1cYJazXlaNkDFV2ZDCC31FRaHEWKEK10FOsXLWFK23ISWINT2iwGjI8RQ6LWEZ%2FDHZe3TuOYLUj7JqnDQmFmrxcbzuhWp3HMJq3z78GOqUBV2mPFMIZ6zhAtqMJcLZMPE7bHognNJVt%2FjtqdpElrs0w5dVNh4k2xA3J%2BRQQuSq3FuKNO0iTBialKy9m9sAPJZqi%2FElOJhWZoc5K%2BLr%2BshK9ycbcDHaXnAEW65%2FAMaRYX7ASVQTpFsSNjJ4BzrAylQeIcEDfXuhUu2felN6SNUl2iRB6eXXp7LIDd885osv6Vj4ztMjtAhcyop2jQBg%2BFhfWhTGw&X-Amz-Signature=095724c84a2ff1cddc375deaf8a3b094646090eab924be806362acca5bc78ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ4WVQQE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2khkIll3O%2BVOyRJMR7vjSFl6zVNcuXIMMBXdsE6fQmgIgQ4Hd7UkpXzgbEI%2BtMSAkgn7%2FQ4Pfi6ATC9sKnDZmB7Uq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIJT7mzYDqblqdgeMircA8s%2B7AOs1xSihSd44dKi%2FIEpaAgzsRTghbhTZDqfoc42Pe5M%2F4H1nud%2BtLxC3IOBms%2Fcnylx5CoEBuR8S6yxYoWDmcDOmYS%2FyLqbwkJPxUv61m7mQ0oKObV91Y%2B%2BZnfZJbSuvJ28YJgC6QGcGKDtC7l%2B5P2Jf5l1%2BEmT0QtsvWukeMjXUKUblnSKX%2FLe0ik89WXo3qgV%2FNKdfv5VYepZvORib29s5CoHiqYjtHQc6Bh0b5pn9qGYpZEkdZXIghwoJit3spAEeMGg46GUhk2d0uFJGT9ll%2FEsJA2bGA5micbKp%2FabFABAkRwNGWKDO%2FAVQd8wJ4x6WjSWzY6%2B0tF1%2FBy%2BfuSecrQZKfjDtHIeIkjZrx9puklEVZhgG2C7GvfXMWRb05kBB4T19qJz0umrbOo0ZPAaqtrImpjZ5EYV8Ah3FsFYTcaWsXOXEBdJ30s9MU3j9T%2F567CGk9NmVg6GorHBV7APQxU0ICq%2BMlABbPs1vc1E%2FDvF7czKmCfGY5GezYHC0GGzlzdgR05NZ4qDstqVxHhSUxy6h3E1A65r8rI%2BCfGM1M8lRUzYjel1PiBAI2fUv%2FRSrkwtLS0RtuOo8PWOddrDw0jnUGOCiuMSHh8VFHyB%2BqxmpXOdJ%2F3KMOy2z78GOqUBDIJ2X%2FSJTOvt35jX9oMlpY2KXQRHg5mfqZs6AQGNdx7bhXv38bJEx2M78BEh6WQvZJqJJJZ6BUFTEm8iA%2FgTwhE592zrIjaIVZRgnvxeQa6VlSz3Y7rXLu98U5Q%2B31Pw%2FjEtiTTPo8G7XsAFngySh0kJzJvouL%2BD2RDfEaMVYbe1nfT5iWKCmQLTmxqmot4AxAoRFNAQGIWcRsWE2vkPt82P3fUl&X-Amz-Signature=5a67c8d197ca118b655276bf5e79ee6d0fc15657012fb08894016d0cab320e02&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RQD654G%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T141257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPVatKrkBuM%2B9DVF8D5u%2Ftk006oj8khjk%2F8tqMN4NRdgIgVk4%2F3ARJ5qbZwTFhaiJPiZPENczu4DBvizRP%2BA6z%2BiAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA9pj5Mqxafu5BvrjCrcA%2Fwahx3oFEPmMrYPXFPyRtlpPp2nCVrw6JhAS8oIDClWx0Lm7Y02UFRenHQzByhWPtjkdsISR2a8nJn55PD%2FaG6sBoCYxL6KfXJKhn4AoMCgCW3YV1MbJVdZT2FF0yfLznVQmXAAHq0WuyY%2Ftgl8rk3eJZCCL3WpPubpCrjIhe6Pm2kaIO%2FoWnV6lPA8kutx70WhWl7vfsNhhi0lR7Aw0LORKtrfVF0QPSrmzGjOFro%2FP1sCH8WB9Mj%2FYL%2F%2F15kh%2FE1vyuHvymlg6LyQO7LZgoZZNgoiW4sXuD2Gkpjmxdmx3zEOUDFn39Rgf4gsVttShH6tkTKWz3ekmJD9YxeQFbeh%2BDxJJut5KuWugofH23nhlC6MwYH3o%2F%2FZoqgkW6c7FH1GG0M0bjuqF4eE%2FG4UoXOl9KWhMa8LTk76fIIOpRk%2Bo0RVc72KL73rRprF9fv6vuXIVeqDU0M%2FQN31sbPbJNxmGqVFFHQCFOc2y9wwm%2FArMJitA7sbkjhWrp3MGspXOwUhZsHEhvmjn9dGcKAq59xHkq8fCbR65X%2Bfn0Zhp0VA77eDtNqokyNedjBwjdrdwTUzsXI8%2BZwxf%2BkQpsLKhrOMcnjGs26HEvUTBaERc1k0s%2FldrqJL0D62G3wKMIK3z78GOqUB%2BaTrB30DwY0Oj5umDJJvSfIMVhsQspU9aGAWUrcaqVk9Pg8VxMFcnoGONm%2Bmtx5IZM0bOvqx0XnW1pl7jqXiruBB7w0CrQqyPkU0oXXvEyLrUHv4mYMpYgQ1tgsLAVoLgd1JyZ5fz1Q7LcRH3BcF7HwfG0AsCRfQce2oejGxoEq3dxAnggYcUz6wrP5%2Bx4%2B9rN%2B0r7fwkRWEEaNIHMhmHUvnPMNB&X-Amz-Signature=5bcaea0a02ec8be4bac0417d0fc40a3959c3cd31021c8d8ad8a8fdae8058f04d&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

