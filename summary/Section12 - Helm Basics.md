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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZIGVRRH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcjNCmQTMS3XhiGmu%2BEolU7d%2FILFRRtys5k5BphZ%2B5KAiEAzRReV7MB4RS64smDzE%2F10RNu6Q87ZLZgZklIfrpFboAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGe6jlurvYxab4HXVyrcA459ulEdY1KCCcTKPM%2FvDCekoxyziPGbAJk%2FE%2BDfD7fxxF29pHRe2acuXr83PH0DtF5w5HxMshWc2BB6xsJA0wK0X6NIzhce3rX3Ozh%2B57i4H1r9Oe9as5kJTPjltbr3YPOZ4j9y3ukOeCvYS9V6o%2FHyN18FdjSQJmn915yfF50RCQSzmo431ZGno3208M3DNWPooh4x%2BQdRrHMiF1iTdzfPIBCbsRfDi%2FGs1z%2BQtnQF%2FXk6qMeewL8L%2B%2FP2F2Os6A6KS%2BY%2FiyZPVFp7nZY%2FqyTnL2Trw8QeQP6eDb6s5ny9G%2B2%2FZv4rNUF8eqW6mg5xIisZFUXkK66C%2Bfauul2iBuhdETkaiN1ZgYohGer%2FotjgW7pCeREJIU6zuMqRYWEdtdWm4eK0MazHx4eeIySdIi6JUqU7HVi1Mu6a0bfhJ3%2F1%2BZ2Xj9K9lWLL4ufJVqMLkd1g0rM4tL%2F%2FNateO%2Fo7ThEfPBmMvp6i1B0V7Zqh0BI2rHyvClJOrXK%2BS4p9K6xukGfFVy0XxSYLjgFYCQrE2IASUtVjgiSb7RQ4Kd1bC%2BEYTrxpzGwYJAbGc8EGU3DwEKp7fuB1RcISTBX6A2B4pqik42MuBMfh3XpHPVV9OhjLfAIoSibQ3XexJmNgMIHD%2Bb8GOqUB19mHwmjDhGF8qCCFgPajnzZiPy8d3QmND%2BJeNoClhmk2PFMp8QAt5apEms1Rl12wlWvM4LwIFwkTFffNFoF5ontMdAd6xnTpYuJX%2BhGSjdkcRRpGJkLTuSll0COX3ej%2FSKzoWwnVu6RQ%2B9Qth%2F6qS8JtpZ5Q0Xv2SHx39BdVvu5kEnfp9m8KHUKgSBG0zfAvlizb2rPqap9ZcvZ3bpHY8XbwARnf&X-Amz-Signature=ebf694cd132ec9e67ce7f8c432ce723639c931fbbae09a03e91b89013b53b234&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B6JQK7W%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCteXtnarUsf1XTBSMIHI6Iel%2BfQPgOhTrEQ2Nb1DQ4MAIhAKrwCGiU6fgO6dGqBCB9fjBJe%2B%2Bq7GEs6UuQzFvVpQEtKv8DCC8QABoMNjM3NDIzMTgzODA1IgyMpmxyNF0At7uCOPwq3ANhlmvdiG2KHXeplviF6Vy21JE89MCIP%2B76dlhgfZAMZ6Kv47Rpm9okrdOjPGaTjggqMTp57zCreFmzARTeXYTU0gqN3lgqw3G6Jv9GEiWZWuGs5vACB5Ndp21VqsEnU8aR4Q9kwY2EciyPY%2F0Bye6ppfSx3TcRh0iiTEJWM3biN6do4TSSx8Pt44FJuyXRSpcI4l2LNjVMgvBtmJbwYmJlXH%2BO8uj%2BWwNXr6QXqY6MOrDdwOyVzEhwMIha1K%2FMTJ31rzTYt02TWujI2lvK5Ww3zf%2FG2cWD7RU0YX62Hme1e5bcf9rRPe0kfLY4cSHygiM34xlaWihGYxJi4uBLtKWF2kC6ZmBhVeQEEHCg8y9TKcG5ay7JhXAtgNq2j5gat6AVk0K3235U63VWQ9U09X5nyzow%2BOMrsWvKFirwzSiGtxo%2FKkuSIZsvclpqk62WjlXXpncGqXzeDL%2FyNXp1eBl%2Fax%2FqANQpTa22JjWlp%2F%2FzwNPPib9iNmtVXl0E7FtzUdtd5MW9GlyJHlRMsO1%2FwWZtfPBli1r5um%2F97iOe0QmVQZeBGhDN6zFkuFqvc1AwMn8ortunqBXRx817N3X%2BeaM3MpFkjj5LE0G7aSXKLF7I1ilT6C%2FEHRSqv8ittTCAwvm%2FBjqkAQGKbqrPvHh0%2FCufgdAowkt5j10VdIZZolTuK88rqP%2BG%2FYrxqsG0gmAV9KhWPfZIIOnZVEewxCzbXvTzILOKbYYjy5LMX%2FvYq8%2BzZ%2B1NWZrXMNRG2CugSRlHxRvQnTLUAJLOT9xdLC9Pf1ZgDgOSqlLB6REosCq0MStTxOC8jnA0H8Glah4LqOkb0Np7%2B4YsarCbCWsfpCTyPZ%2F7WNEBDmuTvZn1&X-Amz-Signature=fd50c258f3055c917db660b9bdb6d84a6555b6b728e3dd5470df39ea3453988d&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFUHC6H%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjd4JvPn12N95R9DccfzaQ5aWKLeap1B0vEn5eTrwjwIgPOQdo6ct32D6hN%2FsASsvVfc6s37KLFMMx7rpXZygPwAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEkfw7MUCCOnDK%2BWSircA1PX5gKrtNr%2FKsR2uEFoXBhmtQym7L7GUsbkTdHC%2BeBtFynBGIjWRsl0185TBgeGtct4BS2H9hY8nMUuC0QIpkcb4fVtLtNRQUYFsEJgS2J29cqRpr5F3Q%2Bl2GA9UKN2kFazrflDEPaFdK3qPy1cjxZbfc3jmapwArJnkRcFgNLpkBUYC0shtduSXAYMAVcjJwt841LNGri48SnmfugEDfS4E6TWG3tUJmDIaC0otoGNclM3a6NJ9hI9YYL0S%2FNoFhPF8plORqameMvwXwocVVThZp0dvb3PTXlyF5BupK8NVKCeYVxRHXw%2FM2BW1WSRURUz3M1Ex68DqRyO7K31dzf4ggdXEfe1oAm17ratIqfYBzgA88TgEbfVwcEo3VI4ReiVEPZjZ%2F7xNjZ65XDIGQh24GBkLbeKz8erLyRW9aa55Ah3CbAnDzwlMKYhh3o12Hl6Wj6zq%2FAz%2BbHBIZeSnXSwmdJPrM0lIWpRrzy5lMXto1awSr87CErs46ydU%2BIL%2Beo0YRebwtxl8KNRupUdkyLM5F3LMF2O%2B6Vz0rmSH3GkqsB%2F6jTbQIV%2FbkIidiq8ilH6VGxjpf0v7aPe6TfP7y%2FUdRQtblo%2B3gv6WOLFdcw40IQZtjUhR3zKZKiNMIDC%2Bb8GOqUBX02ytBxivztNQYTfihGsAqWVNJJZcs%2BKzpaQdVFKbGt%2BOwsAevqsVwveHbChrTXVQNGVhlX4RijjrnrLH798eGyXKuNeqGjCJbhSChSOg738XQ%2BQYL4hpiKJ1jmh33CscHYWot1N8MWoL5sRwTbr2FxxbVgsI2xmCuLDKOgB1ZabIMdt%2F%2FUj6ktKjSwZy2UAHG%2BUajNbEcTkO3viiFYKeYzcLjq9&X-Amz-Signature=cd67152972181a4e3c99dac81f788e9aa2c6f9b85cba1f1794f5887cbad7a68b&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4QSAOM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BREbdx3mdd9Jt7bQPVaYfRxg2x6YY4dWZr4sp5gD2kAiAX%2BqCgx6Cczs4eEn7p2U4QzUSDsdz%2BPtTLpRVBims0pSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGI6rM%2F51XSviUk7uKtwDwmku70O7bXZg%2Fa2s5tm6iWP1lA2mN3e%2Foag2I1GczJQeqzMdaVZrMnmqMDZJsrXGrUqlr0uzw%2BywC7%2Bb%2BUyMmmYlQJYFqQ3axfxYRnO7J3fGY%2BIwrUQ0BXoRNHatBDDc71WGQS4%2FRW0V1xxhCuVRx7SnYt8kq1vVUEFC7YfgQ5qeQ9b7dUp1z0bghZU4LinzbKLezSwL0G1rMolqpFMSJNPmZl9rZs%2Fkuj6Bu%2BpJ3kXLj2snrb0uizt9wjjKXeWqUQW1CdeFD%2B3cnIm%2FJCO2ATIJbvNvumgNujdc9IPAFH3HQjWvptw1mDNhBIC5Rr4y2EHQgDCHWENyz0OvXPApmFKf19uLp9OAorTlgcaUxm41yg56q1kRiT4DoFgxdNBa3BASEas3v9n8PMQ0hG2grwwS9E1%2F%2FdgOIwVPkKA0G5CD%2FcmBQ%2BXxQN1LVkvGuo7jKPgmtQVQpwsNti%2BkuS%2BPuvIAAwTwJKDeZpuhImFJk9hI8JNpurxPbKUpKnsVk4WMqV8MG6wi1XPfhXLy53D6zu8FmjWXjYjn4KWX3SzHl01dHrljlr3CcXmHHAfL%2BkQbVVqJpLODjRGD9kipHl%2B8tIqLwKA4jzWv3Vpn6ys1JohCmbyjVWVMw4TZUjUw1cL5vwY6pgGPgVZQZPH8Ii3DHjCWexsUDnI3q5ioNPPd2EGOElhM%2Bqtgu8d6rKMQ75f5scCWL1J7MsEJaRfjKuKg0Yd1SXJ069HzEGQVpAu4GDKqT%2Bpkp0JCy%2FZN%2Fayes643Dv58hD5dg0Iceb57yTCEmKCCb4Dy92qx581ktiCr7MTv6Mj%2BCVW%2FG3R2mxLD5bjy41Sn3THgELzyLdTHKk%2Fzo3ambZXj%2F%2BNcbh6O&X-Amz-Signature=c67a8302d7eccc779b2dcd26bed637c9ee37b7e32330c502a39c67816d363e51&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG4MRMJ6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWRlNwB9ojUjYV%2FTrh5sU9X6Uvrg0imQLXUm1kByuvVAiEAt2HrG047x9zA9yY2nqqiKN1eQ5%2Bc4X%2FrnEJCERUoyBAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDH7rfLbetpEnHXm2%2FSrcAxVy060xpGt3KWNMqZFrOjs2TcB28V97NtqOYocqz3GG6Slqds7%2FEIIQgMmNR6O8TEBrBaAjsrzbl8Bl4QSyL1%2FB2410cEbXoO%2FULYdCQnE8uBibeXG%2F8VfSyA2wGVgZDpnMhrtLspiKaCNAWpm1xjPwFGs0nkxJ2dXqEZnfh6eNt4Eolpv9is%2BGUZ5o%2BrpqOjDkqSOgWtLtw7aUvS20FNNQzCgZvcrLfyigAnq%2F%2BEioZOkFuFcdYZTHWrlaJqfE5WZXXksvVU0yPgn1ieX%2FLDBZ5YwAtPX7ggw66lJu6dSxcOWi7jnFcipwmPZsdFYo0GBdjb72rEsN6alzasD0KmzkSm5RTuYCP9Mzev7YUOZ4ktExoJfbDF5xABqskcqMUjVHGG5orov0r%2Fq3oMvS4UATyz%2BuLtb6MC5nPlfcE5x6gSGlxDWVEbEO6ndGS2kGRx5Xk6poGEaM55mAfxI4I%2FYWyydzJnVEdtb7Vo0hVf72KwUTdZ0UWRp5mWazBjJCToYqriUNT1%2BuNEyJ793J%2BdlBRgOyHqsE8s75e%2FENt3DwFxT9Vf6gc62%2BiFEE35Hwezx6epVC8ZhxHykjPQ0ow4YRylNFoqDBE1%2BROszss3kmz6k8Jpkmx%2Fa5BDDVMI3C%2Bb8GOqUBtJBwa2qBqoP53ajOGeyUFb8hDcYykB%2Fio30aboJIvm8psCTxoNpCDpo1u8TUVu3zKXxikKS7xNIZ5AN3Wh46%2FoZB9rIW%2Fd0XVNFrM9Tr%2FoXUUcpPh2FTvaZPbBIv7J6za1g7bkU%2FexEzEeLYy7YvExzD08ymYgW8BjZQJZNuhNimll6pC0XBv%2F%2Bs5bB2a%2FQGTNkARVHahaHyoO78nABIhqbwjyEu&X-Amz-Signature=2666b0551b7a2cb707165cb12be6f60667ee084ae1261076a240d90e2f023d54&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFS6N3SR%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBYTxap4DF%2BjHh1duFJxB0OzaYzw1NDNw2CMykGgfjyAiBgqWW5hZaJjBvZHByvuQY%2F7KE7pFCEWd74xmeoSQ5y5ir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMYV9hBVaAbK10lkxGKtwDPsE27JPuLjg%2BQmuHvHgBl%2B%2FGabV8UsiBgc9p7aPOGA58wcTZ7%2B4UogrjDhyJ%2FlUzcZ2NEEqUHkOoG8hS%2FljCN%2B%2BeuAHw8pYmpC2RHIawroBhlDLazvxZA4qkldNuihsPk70i1tu5p3IfdKFk9N%2B8GyvMu81Oql73ygfaOAkGOOmNassdEWbRLovsmQ0MOGT4i0upwWc2EFXhWiR9H2h44nbLOqymVu9k69UawSpFHetK91a8yZ4UorMoxzNMlmldgQFKAbFCltnhlP94ogKHpxl2DzqGnHqlL8STNZJRVFza3RgBLPPABLQvOADneB4n%2BqdeIuV9RJ02P5H%2BMPIpjd%2BD1RoEUK1gGgINQMNnGlgen8XDv%2BeDmuubRHCCszK4XVtZrUN8FiVh%2FO82d4vSdMQFM5wZUTTHMLtHKq7RVqzsyWw0xgfO1E82ibvYFE0tmUc4ybUc2%2BgFzXTgvECmL2reGkITvd40sJxOYEPG2i4Rdu2CH6F%2FtLXQDE6o3k5iI5YGIXMxfd9XxI4pxIcron1C4QyTaLmIttUoBiuqz8w66A19%2B5QSf0MKaAnj5O%2FF8zlSDZQY%2Beq74kb47q7X1gZy05IN%2FWsTyNn7pb3dT8XNpjYjNiJ8n9qqO4Aw6sH5vwY6pgEvouHLwZMyBjbG5utkUmt6ZRCIMAVPFEDO57715nvKvNhMVsVyvQxNDfrJP46bXl0Dlq0LPopvqW2rSpM%2BHa8BlGLXb6oTQMMI%2FdAyLhggprzywMKApey%2B2UklpEyk26FbrXe63%2BOGpi%2BkGPQlVqO%2BURBolXbEIbqhkVHmrdobnCsi8%2FQK51mAMnehR69z1Hrs%2F9Zf20AQ28SkptlLmZp%2F1PoqIFJc&X-Amz-Signature=7d89a7081c56f2cf74b1e2a83b027f6fecd9faec0233c7bd66a6e17efc97583f&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKA4S2GZ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLdWPXDSvxqVTY2FUK2wcFCJ7kgF%2FuZdMxL4KtHDAJhAiBUIBps85pKdyuNO%2FSfo77cY0uz12NoztKP0ZPQucqnGCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMo6fQOmSGoCopQLl3KtwDtG%2F1NMHLwkkG6eM3BNeFl1oggdqmL07TeZF%2BpdPNZPfc%2FgE82J%2BgGm2wR9En7YVi5jVNDRIWIkB%2FP%2F3AJtrrkcnCe5NS0207JWnawe0ttCAnUhMNJmC1WWV1p99ks7PRPsrpYr5TLW6FfsUvjq%2FGlszA3s3Yls3nfhjCxIXf66S8BzKdyS2P0J%2BCymuHImw1Pg3F3gkqBRiHnW4eqk5WEcbE9KnKEg4X9Pj1pHfDa7LMf%2FTvniW%2FWRXzL7k%2BjES61gDOqcUTtP3zsSNM%2BoScGdOEezMytv48sFGeje%2BiEoJBJ%2F7dPQunPGuoQPDxqKJvxaHXq%2Faq3TiWdr%2F6bJSV8HvGV5nV2fQH4miQCVKE6zWxZvdS%2Bi0lBEjWerBoYKcd1M3J%2BezeatEHQq5ZJR2g7QS1fUzF%2BIT2yABijXEo4QmT229LkjyVZQ4jPOOPwD%2BhUP%2BcAXbOdyYZZgvztdGMV%2B1LUijoUiFAWBOzghneu4cr9Ez1qZjciaP4rv7qS2a19eAP48zAd8GbFOhda206fYerE%2Bkdste9GnoZfLXOweX1U%2FxykQLCsnHTh6xsgUpGkMjSH6bi8kJvatN7vKiScHWv2qE10a20XZhKZ%2BFZkzBgyUKeP42X4Cis%2BPkwlsL5vwY6pgGSDHHtWK7tzQ53DH0SHKr80zELfEC7C2DR3vpZK0knPkU8qm0gqG63qb85O9QcUa0KdM2Abvz6qQvZuuMDnUL3I%2BZv3i30Vp9spZwEkszvARTTxk8MHA4XHtLBIx8tSzPsItquPx62g%2Bf6R0NM6sb5X0AaZdVxayy5WBfF8ktZOwYWj2JQxeFx8gfjB%2Fz2v%2FCfceyruIfGmEd4PdwRQE9Qx4NIH9zD&X-Amz-Signature=9f86f40c6874d99b500ef96c23b63a98de83a16c425ef239fce84de09720b5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K2WQUEB%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6feRzN6QqNt%2BaNN%2BDQm9fFBCGV0tr8XGLGXrHNBKilAiEA3ZSdjvprh7vKEWSqEKH%2F04%2FMFfM20Fp%2BnbI97axUFDQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCD%2FqgKO2GUEuRx%2FqCrcA2%2FFG4wRq7H9Y6nXdmBJZsXfiuqwBqvvkuPPXzTdzeDAk3THwiNt0Kc5c6RJlZDYhoUT8UZOxjS%2FGedllGNwfnh8Bhx87DEqVS46W4zE4NQNwIlO8lKe3qbwWhq36q2FoO3WMq75KovQXkTK1%2BVheU7S7AbLQhJWcOCbNKhXDZhKcvS42EdE5E5%2FGxEqGETratTAgaE9wFbiUbZIt0EATFfbKXFq9k3eS6kh7HwtF3vbEZiapKb8Cfi7ProtB5H9jRgWi1ivZBynK6Qk9Ra8UkOk3Tk2qzERk3QQbIu%2FKpCwWUCKR%2Bh8VZxLPGmM5ctlcgiNhlv2TBpeQh4NTkiNjjE4Loruh1cUvmfy9wlk8zYFOv5seAHv4%2BZOn%2Bu2OZSqM6KCOBkNqYSHEpYeWDAp%2Bk7xmrjLIXb1zjiiYc8DIFIO9iKO3K2AKhTNzlC0K5YPZel412ANKV3DsfhVn8Qzy%2BPBQx4qUf8lfL8clocNLv8IKO7A3MGiCDX%2BNuOubonLfRSV2wDxKkFuHqk8E1MMG%2BvGs8bby22IrI550CRTlu9qbvGafBUWF93B7iN3ktAj3Y34crq93iPQeC7etZ7%2BPpY5SG18Cl%2BmpT4tk3Qvd8SOylOQMJvH5M8lVka2MIDC%2Bb8GOqUBqK4TEEzBnnK9jUCMGa4Oqy5NKI0EIhKTGCPgnH6Oe6K1U9Q1A1xUEQfZE6Mj8McngwNDaud4gmtoqQ5ZMVDoYI0eC0wP2FrxHouszLmtwKxonSikHLaobzsi6Pk86mDMsMD5C1DtNOa3MLaT7jNh%2FJGeyXkoADaue10eu2A3j9YBpliUNrAPP2qQsspP0HDEVWONS92%2B720XrJ3ceZUQbIX0Cwcw&X-Amz-Signature=9a196e8193e441b0561fb3a53b21b75002a6bfac7d7081614005dad8ab5ac6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGFZXLBS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T141236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID2fc98eltxJB5p7L1tE6Zbmajpa0BaieId%2FAw5V5MrbAiA0jreIpcBGupCKVdra46sxZbx5HgAWBtClVbY6B3NqGyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM2oFHHL1QvIe0TWr%2FKtwDsrpu0p9IDOK2XmUzqEjoCwQTsaRWiWYTE0LompnvXmyioO%2FSU3i%2FgDXNGcOSwnQxop4GBAsCWTNITCW2U1eCAKXm0KqxoUcKqmkYA8%2FfkiedHOyku%2B3huU22q9%2BfHLk0bONSdFzSKa0MjQg3GyUEE0hLGMJAymO8EysvrDF2xLEOdNf1gMUbknEfjl0gKdmnSYSP8x9x%2BBUTLr6ixeCK1FsmTUGLI%2FiKCNrjgWBvK%2BMSRQ4eBdeCYBKj4eLzncNcVbvt876amKt2hfljunqhNcbePgYXqhmHV52CDvZeHdMXTyzMLnUshencWGRT9Xjo6aiSbCtX4tJxlgRjn8or3hnSLxthbLXSJr1ZWdHApXnONsSqguDMVFS70XQWHkQOzmCpFjly8Kb%2BH038GQRa4qVzKxWcMAczlE%2FiblIcrE8Us7X7eaWHnL5Cnn3UNJlakAlerjc8892hBnkzx58gWysspsKIx%2BZpDfY7qXyZEpPt3h9i4cwQoD4qNB0ss39v9B%2BpLIDtzZ2va2uS1Ne2Lh2pCYX5s7FT%2B7aUWCjcc09bi3eqp6hBsoBEvIZxWj7wFlYKI%2B2dBIwlpgkgziK%2BU3zzL8Si8KuMsdGIoy0xOC5OuZIWU9o83kShadMw0ML5vwY6pgGSjI5SOQ804xGjdvxbCfwnJwOo8PseOn6dglh%2Bxj3HKRmS4JeCZN9UKSkktJvk8pklxnNKk94JK0GbmPLo20XpkfW2v2SciMhrq3KJdYPVuyeEkhRDDbj7FsbeVmgGfRvD7bHlJ4m68l9N%2FY2rjPRCa%2F%2B3r56NJeWilIYXBUjNEqtmBQZnzvSAWBQbrK%2BdVxu31sZ07h4Oe2WK%2FqRWLrpTb5si77kc&X-Amz-Signature=44f66eb24d113fb1e953cdeab2ab4bdd40c7336a7247d7c5bd5ef42a9a637746&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

