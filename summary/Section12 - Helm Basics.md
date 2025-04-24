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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQTDFOS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHxRlMbego9nYpk75kvqyC4R3nr2WJj0WPbOg3VVrCjkAiEAqoqMP2Y2Gcs3vBaHtC0RzMuFluKU3c8VqFsNKFtSYVkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOGEM2wNEL7CdEaTJSrcA9BPsbOfGFT0hbACn%2FVTDw%2BWPtTgv8WJy1k4kBDPPl3FSf5MqEJO41jg7tBvqhYe0xBfMbJ%2BkTKrbZy8au0kPjadHPA%2FOSVOn%2FW8rf9Ism9ozpa8l%2FHjojP%2BtpEkChSVQuyWtBsB5lZiG3OMsPda71JmdOZ68yCI1DrRWeqHwk8pcLxxAl58zWreFWy%2BWNKbvcL%2BIiOCY98L1Htupv15KRFdX0Cc9CLo55oGcwVsPnIo%2BHDkRHy%2Fp2geWoDhlREA%2Fn6bYR55M%2FnxSn%2BOsIqfdoNlxk5UJF0UqYLaefSnqseY2uGmLJap%2FWZdVQUDRR3ki4nmQMympFWBO9sSuEVGQFhwn3u3Xjj50euh%2BeQPCK4OJZeEU3NOvCFJjdtQaFTSpifFFMQT3rGINUYvzaN0wEvjoPFsik0MvQ8EMgmI2%2FfXNfn54%2BEZcMjCLaBtUiQyBy7FdvTUXIhDBCqZDRLDxZUt4HfDRnGHQIqjGpBRHMKX7%2F8xZVSHladCDnQATtbUtEy1SYqVkVjCn0sjHxrC7y8xjYUVV1rTZ6c5C02q0Pk9QJsgUxsCz6xniBRg9M%2B1%2Bo%2F7OzXCVFXrW1J5LFUH%2FRP%2F4P8awxNb%2BGihLJPO4sLcLB9QCKeeCmnegJ3EMPmEqcAGOqUBwBqjBEddntVMFmgscpJscfaiEpLhu4ekHKJhfBFnDQein0IzBf5pY%2BmM9YxgkznbdyeEbwLYSDtzLx7joZdmAhVlRYp97iq09LHM9Y4jPCbujLUhxEeEb%2FN9AiHk6FEhmZInMZaPW9cMO%2FPVNVfRRG02RtNZw0ap12zsUHOH16By1vLdXjwAzstHSE3ytdEOR1q8ikP2sCCD0ljoHyWO19lm6KJj&X-Amz-Signature=730d9b5d74598f4c3791e00d52d5eeef008f6d2b78a21c45448a2ccf9457b7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674DYGJSX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG9RtuBgxSEhjcawEAv4xxhiuSEaXBcS3cdNomN%2Boc8xAiEA4tSvj5VePzfQzZPhcbRqGT0jmgs9WwfkzcJZUj9cqr0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEnt5hCE13HH%2BVuqGCrcA3M1a7iJPlLdAuRHxFXWRdYQdFcruta9YNFO81HlXLkqd49ZcCGhdHIqk2h0KSG1UroxSnpXxHL3xhlIP3mRFt2iHeFiYu5ipZd3hqC%2F%2BdD8Qf3mKDBXimiF0ehKd%2FqzsBplEgI3z%2F8XlUr5Cvt9HAKh5LiR52nONqkuV%2FUCgIZ05wsG6VQC1ChNkKpIshA6WRONWNHGxkcGD5FwzTj2xBBWOswXqjWwWjcHV%2Fj%2BibiPkVjUM2rWLG%2ByW71cf%2BV02wPBPn3iitej%2B4aIyFAPCtX1miuxze2qC4ZdeHqS9mIdoYfy0nN5MK9aXEywLA4LL7b75EMwWEJYFeuiYDXNJ1Lv2HvuBY9aa%2Fc8VqgVhZOaXY54nFmxgvvaw0GjYo1uTnBaXE%2FDFJUMlKU1ieRE4nw6pX2h0e3SqwBGiBi0FhpKygV%2BwqhMWPVvOXpmiGQhaB4js4rO0Bba1h%2FTDmRY1ECAfvx%2BTNGSnzNqOh7R%2BzL0W4b3Vk093hLMaj7DPofEq5geBuoZ7aG9aYAJbavbY57bExdBkC%2BCNnZbT%2BgpbMTZLWuQ1h7uxEglao8oPeeUxH01d0p%2FIjzIpZHda0N4tIUExLaj3WLj7%2BBapAJ9CStFwpVvQBXI1qpghsP%2BMKaFqcAGOqUBpmZ0zEvMCpVCCSDY6TUC1IXgoMuXZwWROj%2BHydawctouOH31I3UkKCfRykQwLzAGtBLpcToPjNDmQdLtLadfRPcia4MI214x%2BV%2FFOaY%2BcGnwUuDCBYAJCDdHfqElUJRxSAg3s4rP%2FXPFDxnftDnN3PHr66%2FBLzHWOJy0Qnfbg2X2AF3Pof%2Bisgy0CgZc%2F2qvE%2FyNlhYDLcfGK1a5UpY%2F4ERpW%2ByQ&X-Amz-Signature=04def6c54bd455eb71e973d01cc861f865dab4b87418deabf87e90b000ea0012&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OYFKWFD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICwAh6Cpw06uDpbplNbzsHmW%2FoGcuvTsbjGGvWJkg64SAiBmTpxBSjuSszCcyhBsxeYpfKowjrH59HxAY25v%2BUarFir%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMdMDEHCtcoej%2B5QSRKtwDzfcUon8v6km%2FnHEG0b%2FakiMfJGDqDIrHZH4aVkZ7SbjpNMAS0%2BB7FNsDp9rHnP5hlTmdfz0w8IIHww%2BLhwUiHZ7SyB0p590OOutRlgj8LyR9Tl1QUACrPi8bqJlx21ldH9vHj%2FfVe%2F8KTaODLwjwU8ztsLsnLCrpr1T0fx1DTfYkHzhhkmBkkzbGDANGunc7g8oAC2YkPnuQ59uProyFggxuMN3YODStNEckrTGgHrJngKX42d3W98nKqNzd8RUrJlWgcW2JXALQ2xqfRpbDrGiOxDsNiTDSYCJTncBkM6opRVmcNCfaUtaoab2mggMvrBAb3I7%2FCF%2BfP%2B3Hxw99Bm%2BfNWixxnsh7uprCeR8p7uihfvFvWt%2FR6huu5EZWzcv5%2BkD9VlRfKyD2tdtrmXG5nosUNQQi4b1TTOaWKtU2MbABd1oEA28GiSBHHQp3Te8umD%2Ff9Uuk%2Bapdw5vCyLYqYLF5GAy%2F8jpNWOd8nI8lAobyiy%2FHqo9Y1i8SmiktxOuNs%2BUCTAOJJXKSXCBP6c0nDaXNN1HpCBILMJVux0mr3KOH%2BY3OmmT8bbF%2B8Pu0UNP8kslYYnWFRfqTvSvSCzTgw0QBgPT2uYdjZmTREE0o5zdApA9tkuvVbZb3O8w%2FIOpwAY6pgEiDLoEzEWPkp6TTg73oVGRbVT6ytS6kakgGcn1tgNBemlvZ7oN4FculiZJEoXyqsDeh0KZoNK7GxM%2FF%2FYlv%2B0H73AyQBtgnxBpVv3xdSW%2BAyc2AshuWnm2A%2FsXNbBzo4k57MbMeuLVj6KjfcoNdCxomf62SyDhD9EbbPfpz21IvFw5A%2B3gXUpgE%2FleQt%2Fli3roVD4Su4245ehYe3VgX7ugV%2FFNl9FY&X-Amz-Signature=ed574e666d037180f7cd966e6d13a00d35438b8be869682fd96e8921b6fee15e&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2K46TJK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQChsYYVbg%2FDl3p2kJ9ZLpEFf5b7X2guzkUrLQRYW0KXUwIgRGn6pV3B1ltGHzWLJCOxVW3WUsEKdiLDhW6R5WP0%2FT0q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDKmZzuys20JUDqAisircAy2y0wOxzXBSrKEl1ng7vYDbssTb%2F53iUi562UNLX6Zvcq3zNtXDCpH7LC8OCMEfFJIs2iv7Kt%2FxS792TLAR3jIOEG2oO%2BFNITyMQLIUO24Te0AgN3Ck12V3UxFXPvFhpBVMEWJ3zuD39J2EH7LVL6bAGFzP1T8PIg3T5AVi43oXESW3xXTX2AelZY59pbaUNJc8SodrxxvLsAjBLgPg1lp4c3Kkr2%2F%2F5KTClyvBsg77Q%2FmaF6U%2FpZumTf%2F9Bo8MqnDmej8XBkvw6Cz7Zdzki8%2B5YSTijqd8fUz8LJJWN3N2yl7bXN%2Fug96HgUmxqIzBUmFLbhNj0wM0qKT71QlxjY8KoU%2BxndWklXVuIeYluW%2FLPwgkMXlcnRiD2MW4asuVDWICKsiDn8cCR7EDrl9apEe%2FIz5bWKgD5fp4CqaWk4bdZ9OxoJGen1ZQJnKVxG0fiRKRBmuswVaZ1e5QxqfqK3XPMGV1vwwCdZMfOxNGFyhO71trxHiPYDgrqLF8yOAyufz615Tqxg%2B7BkU9bJUEKZ71Z2VIFQSQN51dNm84%2FUrfRdvSYLATLsCHsX2o0DaXpSLaYxSC%2FX%2BX6jIud4l3eKNv2ewdC02D9eAFeCNn6RAvW%2FcLfeYMBzbrLOXHMPyEqcAGOqUBxyJXo5AqN8rGKMtan060rrS3qRIPoyVDe44slynACkmov1mfjWZ00oZJrazi0knyS8yge2c0X%2FX3Iy6YHrO36uAtd4StE5JuQYZOjgy4Rtug2NqNZO%2FvM8YbXyGISle2RnEO0tzw0YZwm9F3LI39kyyLLymISg0zDFB6P%2FN2Z6j73NuRWSjf26h%2FwIK9C9P3H4iKDJU%2BAJAqp%2Fj97JXXxfFY%2FUnu&X-Amz-Signature=0f8f45bea06e0d2b5c906781dc70cbff39eda0c7a9cc0fb8804b2801dcbffa2a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4N7MIEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD09BBDlOUn87hRaHxtjoePBLHeNhplhc30jE41exbXMgIhANY6mS3GKzG4opihDgTbJ%2F30ef1Dc%2BaDiHXKOu%2BEXHn5Kv8DCBcQABoMNjM3NDIzMTgzODA1Igw7TMBNsJcO%2F67JF14q3AOowqy4e86mkJDc6FknBg6TnL6%2BvNHEPeVNV8RQJ73AxX%2BzXJhWa2MAxDJFGzwkOFe1qOTrU%2FEmXD1IvIQeN5fVb1GMveGVskI5DMhfpduzAlJGyImnlOMGb9UqPYn8u8sN5yTk0wBEuJ%2FRJfdbr%2F6srQa8J0AKL3FMO6%2BQLVEzHF6eY5bUhM8f%2FMXOHx%2FVKj%2FVbCUdWfIyh9sCkdgqJ7He8wOzrQ3ETWyyz5FnAV3vZBMf1gTkPu%2By48Y9ya6lTEpNtzZxw5nn7D3kXdkMmVVZmHUfMnbT9vfXwtT%2FyASnQZnQRTt2z2AJdVaVIJypkcbYNQHzYMe%2FmZ9rF7BFQag9UoJHBKPRkJHoK61N8vq56cbgNxNBD%2F8pmggdPGPi30U6GL6BMaLtFWjMWPTqoRWBE1VqGy80bgJ2okGhu8QBj9ufhE9%2FbfhpLiHQ06Laa7rclTdR2SLX92VSDE2fTbQNiciDgycRwmMvjlU4jYIJyyzE5rRwDUN7tdahb76TRIwJDKuAF6%2BQ8%2BqdSOa1%2FjM2bh6OJ%2BVasS0RwM9nG3KNXsQ9Lh2n69CpDoFlkHrpTm%2BA7kYqt9HZM6vh3IMyyA7rMVG3cqpe1ZZdxG3kXuS%2BAJ%2Fnx1yziUBAP0nkuzCnhKnABjqkAVUsDwxoGuwWq1IBme4rWmV8%2FMaknSC%2FMtZLI5ghaj7uX1Jh6OAALT8JQVOytOXFFpAFX66MeG1Il9q%2BaHrdEWdOQbtnirpgrpklfXySLleRNkD8QHrxKiM5qV8nfDw4Zoo4RyzCYbQOxgu58q7sezwPchrZ%2Bi2Mb9DM8xkSKe3Ixo8wCAvsgGJDeIHMxgQboOFScPFMCCesqLRLsUjtRCddVXFS&X-Amz-Signature=9c04589ec981b759a1b5348811256dedd105ce87893a1b18532269b4037a3bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YC5YYGS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCg43CIUpfHVVXRHZ%2BMbn%2FHa%2B%2FtpSBA2F5EP4uWbKssmwIgOmg5DKE73CeUDm1jFy3KeVdFdEx5%2BXcheBCbRwbwUlMq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHS8hU1uOGXLO%2FDzRyrcAzVKAfjvhMGnTkSPrcks2RuYC5dtJ5Z2%2B1t4zdRDBN0Fflc4oEtubpqqkxCdvD%2BqsYMLZ8cFTqVM8dI%2FIUDW%2FBRcI23OTlQCzgnkTvA3ZYXVqyDr3HL3d4yp6m%2Flr7CiLXvF66BPDEeimRlSOwvElFYZN7z9GVcvCF1Ke2Np4mzjWeUCO1FjxVMquthG1ZnAW3xOHHnuB33b6Pok3AAMgWbnHlz68NF6UfLleu4%2B0S8OvtAwxw6%2BEJOHEmdTmJ9KFWAW4HS87vZJPcngP7zJ3ud4VO8gxuLpk9Z9Vut8YAu7Ku0jY0UxHzrTcOvAJCGAc2nJRp6kbWK5yeAwWY77jsuKMan%2F5Fmjf75C4qv9k9IxE5LfBlVBXNLBZCsioiu17eR5xXS6qhRlVIXQ8gebCdZyZNHTjHXy8jDJkGVngHNNcQSBx5p0gGCpzv5eklwGdOVN44a%2BmF5%2BHIrbYGlZqcs3AfCajtZD1oCtC%2ByKrSY6jq03TKww47%2FTMWfmfO1LzueFSVBnxkJiGieqNQmrK6lgamhfNIh0G%2BTm4YJA7vGi%2BV3zfmstsbN6USVh31R2%2BmP4BVQv0dOyrYC%2Bc1x7Qa0pvV6ujXIzW5ZqYFaPNsJKLDIR8KCur0TvUq91MJGEqcAGOqUBU%2B5VUsVMgxkSHMUwvurg81UNoKUSHlFLOvD3PdFOC2ArU0SB7gX3aWsgDm9PdM%2FnE34j%2BgIi8jQHbQn8NnoQc25tmTRbQ0f8o62xN%2B7zNeUg0LiGfYQsB8%2FBlTkl4p5h01P0fBNOVojnTFIwkjM4yBzUK%2FLFE1vMmRDL0bYfbiHM3ZL16C6so0Q6HKW%2FU5z1PMSmjEFD8Md8qFR%2Ba15%2FsWdFhRJv&X-Amz-Signature=333383756212eb014a52d12de29693b747e60479fe9e565d2a5853a11c7e6e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6CVENU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDOLA1qy%2BIMhJ98kHXtX6bDXWUjmU6q1rqbVr8%2B9DURwAIhAMhiEpjr2RSkIDM4UrwqiYARlH1kit%2FsMbAZltAdZ5xQKv8DCBcQABoMNjM3NDIzMTgzODA1IgyuLxCXMAiMb85Ms9kq3AOncoeBe4S9cRCtYowc07tPrAtzIJnhAJh3zy3bw%2BUKonUHhBpgHGyxDvCYIrhwBXY7NLiQWlK1sndAW5q1mi%2FfVZZYQ1bgYbH9nI4%2BQDoc%2F8eZOtK%2BlysJU21i%2BhmkVSKsuqqWubwbux%2B%2BnqDIOrN9JUBcUDwgHv%2FxmxbMa5CL%2Fmv44ZNy4POA0KmSnp7YXdX6l32I160lOqDP46BpJSLOBlMw0k%2BI%2F%2Bwdp0nVPnmpaOIcMQ4Ix%2F2pgKygz%2FcqzJ69Do2OK6ui%2BKejdSM2K2obHl6fL7kiTHw%2Fb6EMOXfNEHS%2FL%2FyjdYp5YYPs5%2F7qGa8rl5pWd6l2PcaSW6Z8Eebvnzgi5lvydH6zdXVIWJYcWdrPI6PG7hIKfZR9m1DnDlMC0C1T5Xrd66F7G3a9W6jdDVIA2FvXGsyW8TaSSHlqiD%2BgVIR67Ws7FT5gQLkzEi2DdNy%2Fh71wPcoHIruEhsE5zgmRCt28LMLwaWMeP6VAMCn%2FPQUSlg8tS67B8vvqHtFTXbK0NsjaClzAs2kJNBMLbkuMfzkl9%2BAUr2mbm2VX672vqPc3hABJDQEaVkLkvPy62pEE1S98DJsjdkboCfVzutJSn5jJxa1ssdzHXpLsr3fdzSO%2FGbSVT8zRnzDfhKnABjqkAQjq5YGIeYTpU3DySuNTuaXt3AgBFmrQ44jCHrSEsl4ww%2Fr5MjsBBBc1g0mZ4WPv6MTBueca%2BFqjO3iAjURuEDkPc3TOAGdn8%2FUJ2RZczr8EzaG991P%2BAPTC1aYX3BgRePcH2Da3dh7xwMyzxTaw8kfGYn3pEGBfK3BP8tyyFXJkVLvqihllwsmsk06dQL7qvg1LQZZkXS1NmOQvtTwFF%2B2ZVfoR&X-Amz-Signature=a6e32bd3e63c6ac572f736f68e6238e3efb2a28a967d85644465ca54218139fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZUWJFP%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDFYR8Ote85SnAoDDiqzDVueHC16YVc8EaqzfOIRkmVQQIgYjQyRlD4A4YIbrid7OWqKVWG3cvKwrZU1CizyBYaEvwq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDMzCI4Kcd1O1dLGfZircA9mCl7y3afy4OViJEPpYrHnX0fsqbscVaFeGbgXY7zNo2SNkSjNJ0qCy%2FhDH8iF%2FReXm96UWAzgGTJghT5r2UWv%2BiOTeJ91UVATSvSZlJ66K3QoiYsg7iFAKEHH%2FpGnbCyo8XX2sbeuOoD%2F7sjr4Sr7hfJNCS%2FJnTFzMIgY%2BUM9B5RyTSnJKRY0OGEEpc%2BVBIW5QOr3x6ESKhgbwjjfgET%2Fus1lSpwPs4JcoYCqs1rhj%2FKWpjZwrEznQPIZW7CiNbPr90yCu7SmEJ5nlmSgDQyhIlBJ%2FPN2N7cAqKANTNtTg1lCuYfb5rvcTeEQo59D5aT8nkKmWYY%2FDAi8eAd7SdGHgPzhMlw7q7A7shYDQ3vf0h0eUCXRQ5S0cRKogv0cKB%2Bdr%2Fbt7Nwslf2EFNzBgtazfG6h5lctOpm3aQElDl16Z%2FRO1NUP1tdf%2FniMgILsLlojFsyei5h7GVkefYhlbBUjD6HtrY3C8XLqLh4shyLK1bzTMpXGDcwWyHINyZnobujV%2FNe0Epu9aTRGudcgbl2BFNH%2F2VnFTQ16d%2BsiVLDdUOH9J57%2F2krMOoV6Ne3S3rRGKyDGIkIZhJ4QHm1bEyDDb1HXPm8lganohl87QVlZojgYhZR1viwRF48uGMPyDqcAGOqUBF%2FmbvsLH3NBgA5O%2Fjx5LdXd8MgEZkvyhU94cS%2BtMtR6rGQ67ibAUzW2TKKBzAKQCKKNXB7rmoK3dbSbFl3oMyESwmMwRbPuiD6%2B6bPLtf4n0rGA9i8pCE%2FyU7k24Qa9%2F7h34qdBC9%2BDKOo71diJfY%2FPmEdjQ0wrJ5is7gw38ldzOepaP%2BPCzbRY8uSAWVTZgWvD7V%2FL1YKYR7GE7%2BTlZ8NrbrKWT&X-Amz-Signature=cec2cb7ebe9e17ac8655f3afe8c74397d6147dbe8ee8aba498622a65fde7893f&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XQTDFOS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T141112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHxRlMbego9nYpk75kvqyC4R3nr2WJj0WPbOg3VVrCjkAiEAqoqMP2Y2Gcs3vBaHtC0RzMuFluKU3c8VqFsNKFtSYVkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOGEM2wNEL7CdEaTJSrcA9BPsbOfGFT0hbACn%2FVTDw%2BWPtTgv8WJy1k4kBDPPl3FSf5MqEJO41jg7tBvqhYe0xBfMbJ%2BkTKrbZy8au0kPjadHPA%2FOSVOn%2FW8rf9Ism9ozpa8l%2FHjojP%2BtpEkChSVQuyWtBsB5lZiG3OMsPda71JmdOZ68yCI1DrRWeqHwk8pcLxxAl58zWreFWy%2BWNKbvcL%2BIiOCY98L1Htupv15KRFdX0Cc9CLo55oGcwVsPnIo%2BHDkRHy%2Fp2geWoDhlREA%2Fn6bYR55M%2FnxSn%2BOsIqfdoNlxk5UJF0UqYLaefSnqseY2uGmLJap%2FWZdVQUDRR3ki4nmQMympFWBO9sSuEVGQFhwn3u3Xjj50euh%2BeQPCK4OJZeEU3NOvCFJjdtQaFTSpifFFMQT3rGINUYvzaN0wEvjoPFsik0MvQ8EMgmI2%2FfXNfn54%2BEZcMjCLaBtUiQyBy7FdvTUXIhDBCqZDRLDxZUt4HfDRnGHQIqjGpBRHMKX7%2F8xZVSHladCDnQATtbUtEy1SYqVkVjCn0sjHxrC7y8xjYUVV1rTZ6c5C02q0Pk9QJsgUxsCz6xniBRg9M%2B1%2Bo%2F7OzXCVFXrW1J5LFUH%2FRP%2F4P8awxNb%2BGihLJPO4sLcLB9QCKeeCmnegJ3EMPmEqcAGOqUBwBqjBEddntVMFmgscpJscfaiEpLhu4ekHKJhfBFnDQein0IzBf5pY%2BmM9YxgkznbdyeEbwLYSDtzLx7joZdmAhVlRYp97iq09LHM9Y4jPCbujLUhxEeEb%2FN9AiHk6FEhmZInMZaPW9cMO%2FPVNVfRRG02RtNZw0ap12zsUHOH16By1vLdXjwAzstHSE3ytdEOR1q8ikP2sCCD0ljoHyWO19lm6KJj&X-Amz-Signature=dddf8eb3393c0d366b8743e0c07e9343c6268366ae5daa60b7fc98c8f62ff35e&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

