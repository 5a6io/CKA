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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6O4QENE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC5lquB10BV6hG%2Fld6DaKUCV5AksTSctdGRjjFwTbyQlQIgWBE15%2B6XLCgxs603emfzVfNqwt%2B%2F5m27hCCUZCj3fpkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKCXBSiPbGnd0eOaFSrcAw16wD0Im3JtJtivOR5e8sfo%2BxaqXoJjDOSpPFtzUm5w7QZuE61EKoPINvvvSeCUhaKsonQ2aJkzSBHiy3HFDmWsc9xElPIxjTaYFMXPrhDvnrQnjKU9k4NO3ntkofD52022qPnPNwool58cBFMHKt39prKhnh6Q4D8sdgV7TeynwHCshXTnRZvPDEOGT7%2FBHokSCoTGXdofK5NahnfFcqN4swaPGnYQtAIGudJgYX3jKdDI6yE40l4Se78qjZ6V78L%2FhTPe4%2F9u7I%2BIj853%2B1Pxy88T29Hg112AbMoujujK944cbCs%2BuLTQcqlmqzQL7yra0ARJmGGWEEQcW0DKcDbaIi5MdEWVbBZoO2tN%2BRL49OqB4%2B9pRpJHYrjlEpPYposWccx0OoNKUEtJplL93haLVnyeF14GGlsd9QrwL%2FRa7gT18T1LJQAvnTrr86WWlHOR1sx7bVf4cBAmED6gbvEKbXThF1iYEAxEj8Y3S%2FoZTiiBrv75rXcC9FRw9BUDQJMcwoY6wnbIXIjZpUZ9shWT9kFdAdozID7plnhmdJpAt5UMpW9yvsKW1OO97KUzqO0aWf8vjfk%2BupotdwZZR6lpw8xJ5h0bH%2BLXHBAWl6fNHzQQmKOcfBffmxg2MJrWl8EGOqUBK5dEHDccEPm5zQv%2F1tQJAFweQ6qJSiMpSPeKdvopCN6wbG%2BVq4QSIjh9p6J4ZPvJZUYcAlItlN9hpVLqwd4kNmCHmy1uGdBS4NFcTmugUge1nikX447LEq8C6SZORd%2FYM8XVO1oiLrvFQ5UlTGwL7jYgU7GpUvcVVdG2dYYERzmpa%2BGWc96r3k1eOizgla5qP9opZbvtculiFfVTlT9%2F%2BAVqkL%2Fr&X-Amz-Signature=715ebd000bbd52da76d08dcaf1abb8f0a1696cb178c19b620a2b365daef540b1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSOIOXA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDLLv%2BrmVv9ksDhHCXEVpcqDjTKbPKS%2F2u%2B5gTRgOaW5AiBV1pHfgrcwLonJv1IROjbrZJ7GABbAZI47TEwq%2BdHZ5ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMpZ356qXDyA2tz7SNKtwDt4KeUG2EayQeXU5uPjwEFqxep%2BbcyVHvW5en85luGIQ4JyPRO4ROpSdvwMbVv7lAwmCcMW2HCSnWC06o4EEjcdaXSkPPZLpcEmYXcTgTdkqzp4lkfshRlXLpoWYDBCD%2BJdAlPMfwXk22bUWEJgt%2FGfexzI7PNsW7h93006Y7OdktSOtHvMjXD5b3Yb6gIMleNXXNx1y8o2menomx7DrCZz58mSiXnzRjv3cNHzGSbfEXOiP4L5wVcWP5x1NTNARx%2Be%2Fu%2BVmjA5IqVzsFXjhRnD9Y%2Fds7GILQ9FOYbUHCzRA13AFHhLxzBbkBFm%2BLWevyyXzoYegnP1M5kFKmRB4RSIpNN0R9v2bxDYoTyFmZkm1XnFwVzwYEgNFUMFUEfkVmQ0eAVG3XruqB1%2FR6GolgjoMXzzn5ArrVIwdx8%2FPOe%2Bvqpu5aYzIoJHtX11zhKd5tllmiwIzKOjt8d1jfZc%2FM3YhBq%2FN0anhC86PBWXkw%2BUIoha9qFZX70ndFBHlqhKQKEwZdmGdoeHl6WtCVDw8N8af3UIqqkwuv8mMzhHS2qaexi%2FMgxJoKe%2FAiBXkYAxDdqKUBVSdaQP08d4crrkl%2FbS1hPnHEkLhDEfXN0SJ3LHXVJ5bopVT6PsrHyuowntaXwQY6pgFKW2NpcOqhHTqVsJ7gXYLlEkUooJbIIvqkw5vGOBV1FXxezs8s%2FVt5MDHp5AQ4OTU1qnY%2FE64O0BfrSX3f97Lhz9rkHvJ4Ezz4yFoD7rOxY0aviql67fvYBD32nfV29BGEgUbXv%2FVoPBma7Uhq5SZ9ww4y6BlewhgtZUOrMjHocMmgYhouyE1npPkfl6ghEufHMwXufL7Gx3hcbk1KG%2BjMihgoVsLS&X-Amz-Signature=7aaa5e797027b5932ce85afeb7348883d1fc86a24c91d6393b9c80624c0bd8de&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFQS6TR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEb5AGldEeq8ysZwaKabYhbMTGUR80TeWMjwfKytYZbbAiBRgffWeLlgHPkUjXQzTvZlQwdxhrWOXrW1FugMM6JJ3Cr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMtfo6JTvl2YBSZrk5KtwDmeS6JJ05E6%2FzcGB2dKT%2BmcV27d0%2B4vB5qoY4%2FK4axSUwz7K%2FDqjn82aGqRgSJK6gtAH%2Ba1a1Tww2VAAMEP8yi40hbA0oOAUNp4pwwB2JwLnfDeXeVwgoes5zKjq869BVlyVhHEM9V0d6T7IBmlDza%2F%2BMIsO4sb6ll7q3rQe6hIKAC1FBIgbY6zOgcca%2FAZ64AUTHGRvC%2FB2PttXjgNUg2AQuFRmJKOP9daN3belp2RYCBVrfu9%2BD361XgFZpBiTg7KAEUfL6Z8Og2nyVley3UZNT1%2Bfd3p1WkxrVP6uSqxLob3soPuK7fti660XBi6J6OLpGg%2FsL1tzD6z0qMyJm%2FqYLHr5bwLFHI%2Bf3QtCDC3p3f%2Fx3mvIcrgvrOpm%2Fen0Xfow08XTSpSJoLsMj%2FG3uB89chYtZzZr0ym5EjO%2F1mzYEL6VtDYGIjDp42%2FuZQwct8iAwAYhJRzA3zJhe62ww9uLyHiCjT9gtHS5FYk5HF1sguoutBb3tBVgf%2BFRgzJ1JYLczfGxgikedDiOPZIAGUUNCv6GCTgyKpVMRvkggKWXsh3m4Uh%2F85S5a3%2FM0NSPC1gayV1ELkLP2XsJwp8qLMSgbDt1G5%2B4Dyj4IrKimACB65oBm%2Bbh3fR%2F5dtEwlNWXwQY6pgHcWuAFXYRBZGpVxC1mdZj6vGt258nxWU3f6mjJxSW%2BcSJrEiFllZfoEvDGdisD4Vl7a3vmjgpRgmFNaXqvEgSzkioIPNfNELiUO%2BY0FYiV4YLgWPOYemEtwi%2BEADsDR%2FGSs%2FzOGvzGtbHJQBWDbVNOu2uPf69oVB15BrXBwGOlei%2FHq3ZSUbak2RTS3XtKgNxwZAm8htqiumDDwbaTPBuga4di%2F8b%2B&X-Amz-Signature=8cdc5b8e0f86683e8b2332c89bb909ed3ce57a89b71aaab4d4a888d45f018e3e&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPCQRQO%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAbIrRVnoGb5YDe3s1Ab5gAQEWYVGwk0312HEIcp96MDAiEAkcomeodHoc02F3k5VHqzCVk9NjMwpuLMqapwklIfsz4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDFMhbc5YMv9fwEVqVSrcAy%2BtCTLleTiQqENODAiBbe1QEGYB89CBac3DMWe11hpxFGGKbBM4CbIb71%2B%2F79qhNq4L1o3k2Zr9hPmnZxSvcm%2F2DoFXmaoUiRzAX1819%2FRGP82kdsxvYCwKBg7WpXRaiQLp9eKJpkXAdL1f3VNSaDwpYRf9FALoTc3Q2dRJBzndMVgyVWd5MATvl9tbtRtLX5S%2BvB3VBIAY9H66B4tKDM8wlwHNqeLzr01IXFhnYm1UKP1fSEh28kBdpJtYoKuLn3qNXBgrlolBZpeFP2Y0weJYGyjfHBS1iuLpElcQ3uC7%2BHkCRKvrxTWMx6LWc95SbW63rZSorhj5J6RUaZUkobPTmgWakBVtlBdfGoRhFbArd8quEZjtV0XBW3CAjxIby%2BuEFHgNXXatF7pk1%2Fw7gE%2BjFQGlHG7p9LZ1zOajcjURFu2RCT7pIw%2BGC%2Bwuqr5hsbtyt2RBayr8z3N1kfxvxRblg3vUPaK5bRAKkTvmss81zNSZeJIvEXvxhw8OBUmtuQXX%2FmEtW8CviqKJ24d%2BfeFye3h2yFDljtTTRlHZ4yx3AWbLFfBUKv1cMmQy%2FAYcViYYg0u%2FbaPvEMUZxIW5gpufG9wOhSajly%2BUznBhRI9N8%2FVh%2F0eM4stDrvSOMJTWl8EGOqUBPVYkpgO4sPj0gmoZVxKg2biRXJ0VwcHDDAj30F1SMbe0wwRZj1pDlA6miacaRBPhGb2VUKfqAAwaZelXUsAT5c4mpBnC8zlzvSBHnVi1DvLyCSFXZA66iMn%2BNhbUPfK2RXBWyRkgHHWFsx0koH2K6VyBXct2cKFnXnW3P3HwKrkXgbeRQ3jt9XLEW4Yam0zMsI9UmNcP5tek0Sk3%2FbqrkyyVLS1X&X-Amz-Signature=1a1e1ffb36ea2cfb562f25373e455b40e6fe8be3fb433a09f7dbd89f87c0a619&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZGG2LXS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqnohgFhpg7R6m5bip3qd6V35Q82JVCScRD8sn8YropQIgWNCxim21ro4hpnAkPjP0oVu6IRgKrNLtd5SeygnLLnoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPnajmPRRmPIq6s9AircAxZn41ZVQYK2DiAsuLGJ2KvLoUOh3McUSkK8q08imUjLRtQ8WooiH8ZLOjttDUZMePYQ62emKv4gYdAKCBqmyI8Qh5tUnAozb%2FkZnAPMRsUTa8vc1Pw2VLMbV%2FiK8FgVe0FXpmJItA4Q%2BikABEgVlExO97HD4Y%2FGZXUO5%2Fn6WeN0%2Br5Bh0IkIO1qOBlePEqEyA7MYzS34xDUsjPK6T7aE6zVnYmQnVkk8CIl3121wCF0DgLS2ZWNOWC2bkmqy2FY086ST9cflwQJbtCaHfF5XxZ252HwjpOA1JE1NUao9bGwsFo6yL2K4BNwIx7pAisPLBs5%2FdpQedgT9xsihcN2G66s%2Fr4lgUbsfe6FHDMm91Dl5xgq2qreLSH9N2UTcbUicIg6OALKcPTdfaWcjkfOMZRVxxcqDkOXpwcgzmPgM%2F4JCCpv%2F2of%2FFSBUSKNqeoqp4v5t69IWWTHNYxafePCytFnBW6Q1zy9yV3oaU0l1OR3BNVhMe%2B4MpE%2BGAt5tKzC3O%2F6JIxoQHXmldqtZpJCJrLcHwWT3UQJFjWti%2BA3VEoORWgsWcihYBOMzcDI4dLFHw0onhSqy%2B90nwpxaUhtpDeEXB6qWn2CKbEd4ABrX2MDDTVTZXP%2B3iywNVfhMIXVl8EGOqUBgcJoDTeqEp2vzIp2E%2FuuHJcXGi7osx8vQtWU7L2OWR%2BQhF%2BJfRZlaogC9VoDFlzAKge28FM8WTD6uAdm2w1MAwnYdx8OI7bY7h6ZkC1K7lVpTcN7jYhb1zMN7lJrWSrU9wq7I1p9KOLBXdtiyxRi8EtVpgljjfveQkWNywbInZCCsw81jfCdYZX0KKIJylnEI8Pnuzaful4JYOY5QkdmUxRq3dZl&X-Amz-Signature=9ee6cb86e8bc714a9e8e97959fb8d7c5a2f2abb96fd37ad81cd52a2b97f36ca7&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AI72NFR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCp3JRj3e7wqZyrDdQMigYYbxg4YkxgYb64Xtit7TSm%2BwIhAKFG5CFrRK7yEFegwgPz1ztVOZIq3cB8CSVe15%2FpS5NFKv8DCC8QABoMNjM3NDIzMTgzODA1IgzwIL%2F4kTgVh%2F2CUjwq3APNe93YX3zNeqxp1%2BdklGpK5ux8SVlooWkAZWFGfpyJpRGLoH0Szl74BDYUgUfpQc23SbcVQ%2FfxFv3BP8HVVy81EtSdPxDDukoHNq6KEAo1PXrpxhxIuR21SFMlwFlJ6sBzdn1KtzMtcYIYLtbnD4DpkRd57vOwsGVRs67GBnUnyQA7pIsrN4gsyUix7iaXspiws2GhTV7NOoEUKVkSMGRj0ybscWeI7qkHbCrgubLaV0xoYNQQN7AORzfRE9P%2FfHolr3FA%2BuJeJUdnMVBIuNq2zbQa4QNNauf8%2BpMJKcsZ%2Fc0x%2FLM4R6Qo6Ae%2BA%2BETzoBTXNV2W27NvSapbArmEpZQ9QO2rsm0wMfEM68p33%2FZVK9LPM5BY8I9s4%2F8n8v4eJxagSYlqO7FzfBCpCdIJp3zkCHHrSyB5qaLrar3T37FU8B6G7ieFY%2BwE%2Fi3sT4vh5slNvQ8CeBPIrGl5%2FA1A%2FhZMqGbSyV%2FURNVsZsoyTTRAEvt%2FNOyHeQeTxQIIkXtfrrZnaQ31B1esed%2Bk2JVNwlj3M83SHuOakc0RXYAdNXNk22ya6LqH3MTw7PBLF%2FowF9CGCAiqXMbDjrm4AzlioXAHBnbpzimT8hqSKhBYpJfxn%2B%2B9ZSfDNvHwwK19TCH4JfBBjqkASPB%2F2697jRPCAzp61nCHkSXfj9jm7%2FC852IYwqmH9Beu6pTW8gY1%2Flw0sdQa9m6T4JXO37AhD1MqM1oiMFjA6ohRW8TM1SHG3%2FXGAPbZB6SukhE8LgWcm%2FgUlpAbp1Jm%2BefRVMbjPp0A3%2B23lBziLhuj%2Bhxxo%2BZIBtP0whRbZjyQiKFpHUrDZLaHRoZmFrmCLmSVBzmizc7yjmlbm2T4pGzC7GT&X-Amz-Signature=bc8cf8d06c230e33c0c46e5370660caa226fa9adbfe44b61e2a3557041cfa20a&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J46FVGP%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDqa0AdXWpm2sJNelcHInrEe4W4uARmBq8yhT%2BehI%2BKeAIgRhbPIYk5xIQcmxcv87dt90S5087L90dzVZNlIYOn7msq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAgniKwTns9XhAdb2CrcAzpVXTOiuluGLHYuPpuiYr%2F%2BADNkEbuRGQF3xhYGP1LkKHjKA6RWls5CVIvmrgIWE1oRPyOo1yFj1bCms0txarTkWNIfgRG6UQlpzjNlMbGyPjDLPy9%2FQpY8cfjM4qbt%2BerYWgQwzewTPHIH9%2F%2FFVuB9eEIuWHPE8FeoRzAqDDE%2FAqH8ePgBlImbH3z4f86ZKeGl0PMIbFVh%2F3lFFzNAPiK%2FO4Tq3AYBfbZ%2FsEacXitY8%2FbEOeBZqMLYsYaxpx1QG3CupPXjWt843iLab4g%2BsR7dKGGmT50xHH7DfCY9nIcGZ9Eyz3pIWpz%2BP1wgDH7v2BnIwis3xhOWqQx8WTNquwpEySm8h2QqBUhYi6PKu%2FAyUmRLtNYZdmmOyL%2BmcCOJ25Hcq80BowxCNrHHPMLGINbckuA5tdRJvdzlyjDGH1qZDK8YaHbKH%2BN1qhmejwkmHmmEsPrdRMV%2FuH3NX7vIInhEHqYTjl3a6UJeB6zkGw90qmveqbvQGHqTUlcGoeHF3qaEjUNNX0HMbMiJLoa95Oy7BnlGV9PH64WEFv9c%2BOcTrsDCvX6XzbU4ygOoFAjnsym%2BwR5gJESrjHVXV5OSixmK3rz%2BOm6gSu4mrq8vYFpJsUV8f%2FoDF11lz80OMJvWl8EGOqUBb32R1SmwrrshjjvfQRyTfdX2vx2lH6lO20LbWwpPaHRtWudi%2Bu53RCL2OpmAsnIjKqIkVclYCK4Q1fVj8V8Wy7iEsAvEu%2BLrhP%2FQIAAuIOXrOObvkru8jUV1ZPMkP6iNFiKhgDHQi77pq62G%2FsVlM1nG%2FHMmZxFc9uzIuWY5F31StfjVIoio2VDhvTmGQ3F5PHbwdvP4ib5Ucnd2r2RVQSYzJLvs&X-Amz-Signature=8a0ea700a1fb62329f7c66e83787200aa2cc6857f4049e13caccb68fbef478ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5FX4BI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD2w8TFR%2Fm%2BI52wpX1PmqU16%2FV6hV45WoR9pHrGq%2FjOLgIhAKw1HqLpkDSZykzRmZNMeiqGt5I8FT1YTCjkwDjusZwlKv8DCC4QABoMNjM3NDIzMTgzODA1Igwz2UsR8hMGMdOa5bsq3AN6g12Yt%2FriX3%2BcB6%2B%2FHLi3t1VUtIixFg1FfJwCE9KU8Y3zHSgLikVxJDilRLI9r72wiw0fOdx5Uz89Qvj0c6ChcxgkbmNNf2YmNLQcUd3RQ%2FvpKx2WBRNN36Fnfmy0N95uyDdHiB2wTVboYWbg%2BmaRFhOZKSQFfYZvVDQfSPI4PnmZRcpMMeEOFn1BOm7SPLxEY2M4IwxrHIv6TVF%2BSJc4bRmU%2BGiDSl%2FY21ugHyM2bAuckYb8aDHjwSHKIomaM8TFzJaBctTegFcayQ1j2l6n2eJEVNqfq28BELoyzHfCiYvnYxptWJ4A9ecVOpI8lEhIqlLhnL8ZTfm97CRVXE7oBaBhRStbjJ53GtW7XUh9dYJ5peHVF9yV2ALG4qEVsnbOPe%2F4%2FQb9q4NJE0KGSICqnrMy%2FSq7HNzVMwiucH%2FfT5IeS79Exhm7Sfs6aaE3xkHLfBD6jqExg0ZaVqPjbYPAhYApoh9S%2Bu5D9GwTotBztwyMz95cWPhgB5DjTS%2Bp5eytsIxBQAS%2F%2FG22XmVeGqc%2FotpMugvHVl5d%2BkTcP%2FTeeJRPEMqBvdle2grMGpDBueYzmqRowinZghzOmErZeYGm9VUD5ZSmJcGwDLqMWerAtGC%2F7uWDgFduw344eTDQ1ZfBBjqkAdIA78ZX3055Fc0bCbG0oVR4rr%2BHRojkc3fGOYVzbKfWjOPrmDIRRINvXF%2BWDPQDn5pVUa66XNl8H8LH8arFZHlRqjkNHHwnigqdrI6fPP94hbWcWI2afoRc3O0AiIXC6XRB9ox2rImjHQh1VxK6eKJZEDmeyJ%2Bl811QScrj1e5RoZylPsG9DNm2UjhI1p5Mna653V%2FsqBkECdZMhL7h1hhNsrRS&X-Amz-Signature=b9d7356e202391789ea40ac591b57ebd613eec0555b0d5c26589ef2d019e27ba&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFMBOG5%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T141302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDIXX3hnZ1m1YSFiP2hCiWVg1yL7gpR%2BZW6GuacEZV6EAIgf5ArjQUkayvBu6jUE4N0EhrkUFKEIuAJMxEj6ntZHbAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIUQlG%2F9hM2AgvSVRircA3h0gg6vBL3iCtlKHa6HjQody91nRhm34loh7zDUvoDI2Ds5S%2FjxoDk3gGSbSyN9V4BRegqstAKNprJ99%2BOKEbs35SfuS7kOd2uNvsW064UnfhpQ86tehGlwhuU4fkPXYZ3bn05rwXWdbTU49ds%2Bdzymu8TJj8Be377j8WXE1T6wRgj6CVvLdY3aws32ZfxPC%2FsEMrYcnz3fzoX1P84qUDGtf6JyDcRiVFSNoR8QJCP24RjXnKqMXUtbJSod8vccLdS8yZz9pH73XQiwxtFzVFda21LBt8qFcBu1GTKwZzxvmvPcmnjI8VItnDaSh%2BDWZGcwFw4o1GgmPGGb7SBtpUVOaDgXaGtdfG8959%2FExhUhnuEYuiKxCXSrM2aIOemQsc%2BEWggfKjY6OCMOVTNAr7i5Ee1nOY45RGtp8A6mD3CJPFiY14Kw5KuH76s%2FmQFNgeHw6J90Ka%2Fd4uRKMBmRLugxY6AYYFKz4cg37F5HPcE336%2BlX1MOmsl5PT%2FQhZPRDUDidzF0LV3gqHtq61VsbCwvqiRMeUYCeeAdyGwNgPDJ9r8aFga3GWEBo9xrA40ph6ivDk8zHuBo48awOj%2BXlr4JV5TbdXoWTRLAEjdHoJhvnCI3D3E10L5aPRCQMNXVl8EGOqUBKi7WFIWLuj1sg%2FRL3FBLQ%2B7q%2BowsDqsEdXk2i%2BiIphl%2BIAOlvIy1Jq8RtP4JoX1g8K0TssIPNVcvjjmPS1EIvh6r1IJLQalXIUWo63kULrk90xFIWtSKNk%2FCUbBoSB0GE09dhO4uO9XXeaNrRgIUinBocRIlfJAVBlXeyuF52N2ymH53fMzU7yUT51lFXqhZCYfbDQv0%2F1PEA9%2FaVp%2BetHPjPLXD&X-Amz-Signature=0208199736fc6234ea9e46d9e7b00852dd1675934aac12a7bba6e6cde42e9124&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

