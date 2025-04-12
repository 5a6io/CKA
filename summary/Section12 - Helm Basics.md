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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGGJSXM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIB5K0laWMtx%2Byia0y6a5zqiYOSBMRGYTNMMvG7lLfTXFAiEA9trYViOrHVRApXGuJRWT28ySYlJQLF%2BPQwv9ChoaHgYqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJdqVwYjptjLddeLSrcA%2Bg1ST%2BBA271HFYcPsdlZf2xP1QzaHfXB6vfnBfl3QCOCWRd6B1yAidtyEewQCY800oFOtkBRks%2BFd%2BFFsDfuzu2mxN%2BwFJnU4%2B4hv3qADM2Jf63KSViACnROifiH5mHIHLQCsMFIWDiU4Leu%2F6g5n4tBxgr6gXKlkOO9Ldh%2F0JIUZVbh%2B7sVhCLguFTvY7McR%2Fyqqvcoo70lEnlG9cJxNpz%2Bzn32KoTCfTFg6kbdwK6J%2F2RyV%2FJD1Au9E6k5Q6OLZrhi%2FjDj4bTo7VDOOAAon2d5b0IfHA5%2BxTbe36b2dJ%2BuAODkbgqNW2NFI67CK0fhW98o0xvPagKZ1panvcpK6iADMLZF97OgjlM80pwa%2F58s8ErALdtJN7Bh%2B0u2CE4eB7FM9ZWiIsstk5ij8Ny6ecjnqkKdI0lpiyXOKIgz5s6%2FoFRsrJN5MvtFQqCS9bt3HH9QFBfKGIXT3m57YzmsT93tEZPlBZJt3TR08OAhEOwjCvirTOkEcV%2BdYQOmqxOnzBVOpl7D4YbI6Eo%2F0Zo4zAEipjbJlxubhVKeJk4A1CQ7vlXhRe%2B365LZ%2BAcuXAOTf9NFRe%2FwFFzXdjEdwjfTA8%2FJ6Xj1AueiV6vkQ4aEW7p1o9qCiwkptssH8aZMMiv6b8GOqUBitTLdJOf9YBdP%2F8djXZpf7HTGgFajTJWDm45VbCN3SRwAqNtzuDAoXUnb9LOmRlQwHfHLviN4HuZhX%2FUTxJmUeL5se0feXSKx5LIqpYOVV9UiKLRPUin1irQIN8sRUVkdkp2uTgOUGWIjLXjbIuP94Sj8RNUeMTR0CV3N9kgGosKudcyf7RzFnMiSnpSAFJRdn9QUxLSJuucVQyeLztuNs%2Bq5PjJ&X-Amz-Signature=0c475b00c0b9f70bd2af38b318f5b8b4f17f74db66950fd28ca00fbba98c1d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UKUUHKW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFCcMAcwpmum99Qy%2B05UuIWT33CeIsPzpLLj7LyEpahVAiBt2ZLrktGsOzE2DeB4n6NTJS%2F7DMNYcV4PWz2ZhQIeqCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpF%2F5lv4qCGPLruUMKtwDKD2v%2FIJcrbwVUoqV%2FhSbfO37ZSmEUNRGBF5okb0BFKzrh%2FxnVftDqO51GavSwUm2NAwha6P8JedGF0S0idFPEfANudh8KezFA7HuHmL2%2B3kR3yJPuB9vQXW5Zygz8Htwuyj6v67GLG%2BldkQWrWkXuf9Z%2FxS49dOAFG6QAqC9u0r0VF96I7eJmG3QR3bFIA5P6xjdwDAQFkpTAoplS%2B3E9A%2F6gRphKsXEa1qDtrn3HrZ%2FJighXh7uQH4u%2BgMWEsFa0bMYg7BqWieOg3mMk0WG9cME6M%2FKSC801J9kRlaN6%2BV61N%2BuwTxXt5SKW%2BMrY58rW%2BHTFybJgO9dMtABzofR39Qm3Kqqp%2BR89SeXzLAs%2FDVjdhMNdWWrzVZZRPGO1iW%2ByOHa%2B8cYCh8Cc9sz4xiQ61uzR3s0VlwMIQAydyBg4nuEkYY8FYMvK8%2FptDPduTm359EXzejvKK1iMyFVXfPUa8N%2Br4UxRdeoTmJWTio2S%2FW%2FJShGItfVUDuHYZfInTDXSq9HSj0%2F9VpxzFaPBthEx0lUX406uTuxiKeMQEJDONGk%2BfV%2FMzu%2BN%2FVYRMm15e6%2BfAaQUPaejiiP8T3BYeJxHiwxMkZF4OTYHWUGW3i9zHYMvYn%2FFuqElP2pH6owkMzpvwY6pgGMwd5CSTdeFeGipv%2B0DG3g0rkqxrGRifwm2hTeyRfCggHc2n2iEeQBe%2BjbP1%2B1aZizxrfh0T1RiDWOqVoysYlheaTupBmHF294BCqARGVsSCkkiVUOuzm7UO6MkctyDum61S8ivruIjXOBi4dgIq1CNgH4jvT4I53a9JelAdib97QA5Uu8iX7NGvueyQ6OLtfwtP2a5KeNnLTyn3Z8ONN1SjkALZeE&X-Amz-Signature=c95e2b3a61938dc40f63667d18da112650f582ce78141392bbac825756e5bb26&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLYP6NO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC7gi4C2x182De7kQNNxJTJtGR1G3w0H0ZwinyBiE%2BFlwIhAINNK324b9hjZUWgzfho%2B7sTQb37i6vQaa0C9fBCkc8KKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAnYbDiensmrt4Oigq3APqvDMypt1NqaDlXRrAlcSzWNhq0FrE5l5UC%2BEs5Fwm9xaN7mY14p%2Bf77FzPawLSoWnMmn%2BUxIrXXMKkxifjrBCkfXg0W3cByOQrSoY2eD3uxjfTyeYiSUYgf%2Bqmaihu7yzpVr3vPZacJ9eGkj4F9RmpwqWftP7Hz1rDC3iKudKtqtxvh51gTyuDtF8KGOQtUiMWWvEZKy5loJotoEVIKC8yHsiO720BqI0crdKdZGeEYMqaG2gkllrMDvy%2BDQB7PNZWSF18SiOtD3ewReAPeQ0nwy24O8bQTwWborAucjVa7YfQbSkM20EhyWGWJC8i%2BPv%2Be8EnqC1Fhkk2rM0SiIVSZlgrikxkvKy2Q9F5dHPyew5geKXn5onG3wOU384crkjG%2FpOdRs9TNZex20iPwkgMVoIuLJL6BCavEtHqE5zP64y2n649kR3jGDs8jxPYOlLQfsmrxobHkQplaHrzDeo3P6Q6KW%2FaPHCzHt9WC3OgX7Ab6meVxld83jDkoNHoCN%2BUXwCWFo5b7UuI6fyrhG6XRFR3R1b9gxMjh8KzjTK5LhQWz6urRQ6TY6Wse7QJ2s6NXYITB3tnadx3NKLKeg%2BGqnqi2U1TkjR6W0W%2FzvbPH%2BQ0NE88hGbdrA4vjCKxem%2FBjqkAW32gtURxBc8jzPxKDPSb6t3j2dKv2CDdapBv%2FOUQAmPE%2BcN6Uqw9M4LLXci58eEbh4s1QMksmP6fEdBXmMrE%2B2njT4rm75bIumKYrOqIIn4%2BHauLrafNYTwLpadJO1cj2RO%2BWVJeqmBuXGqi0TYI0bcJ6blrjMqVXkd%2F8gXPJnUuoPlJMqlL3m41nWQNrHvwrtM%2BAinalSFZC2tV89ZWa2b9PCx&X-Amz-Signature=0e80a14234d1efee6ec65fc02cda3ffd640bc8db925256ed400938a7e080967b&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOF2ZN4F%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAluAM4SeGZkRczAk%2FvsqQOfrFksid8ainlz4zLT%2BIdEAiEArky1BPWo1vZSx%2BNocTGgaBHppGSZJY2k8DcMpwQ2O08qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhk5ZFrV5B3iqMMSyrcAwOcMGOmaVRrzdcYFOmQkSy60OdaHMLWxpP1o07ilper4uzLucYO%2F4mKNGIbcf%2F%2BlcTKPbWqF2PT3lyxB%2BAoGcCcVNfcIirW2T5u8HUKCIxodIveUB9p5BKiixwch94JOTCJtCOwjE0Ym6sErBvo%2Bg9BKbLa7rZdodZwa3ZpDDe9HyREwtHqA1%2BT7MCoFHUIukGU5XJTwXoFLrDjGWs6pD7XizClghYuOFddX2kh%2FkKm23O4nFPusvcLV5sLi0QmO3OqYGhPIMgqcvJ%2F9EAEYRjSq98DNwlF7uOUVEmIICOuHI4R9Xfz2OQH746%2F%2FfnSVgjb7YgjaxK3kaoAMCXk9Cl3wHj0mqnYe%2FxJOOpqmPpdM34esMPLH7rLPjS%2FMcE5bSo1c96Qqz7SHCf%2FKDkr%2FMDgn5yPXl3KyuAaU1WhLNCa1ihUQ6AOsqcCiJcHAOU2ZzICLme4YuQvUVNxNAerce%2FOHxYmg1vSrVFJyPxE%2B0DLQVUZiF7J74O0FjnPJBPnHHwG3E5EFpDr39ggqqc6Aqjx5iwWC%2F%2F27We32Jij7LjzTaDed1ZsSmEOzq6tk9MsTGJd6%2FM2LCa5fCHNp9BEMSgVFZ0PuJf%2Bp9kCPv6oAHJAIYkBifkcqAhOUw1uMLHN6b8GOqUB1ZId0i76wzUnjepfjaXsWdmizKhJDp%2By0Veru5CEyw9%2Bym%2BF4dRx%2FWQfd4Hu7hzvnboLetB5jalG3mXTLHDWMEpcPXmnSs1cpnMolxgG8%2FivQdp5tQxQ5UzBAfN93Eoajksl0F%2FrSEVYwtVn6QmZJKzE5M064kksVh%2FF7HLwvIDxKb80bAQM8y2NfFOuCE4Wt2TwaftdSj4YyHi1oVHALej0YJEM&X-Amz-Signature=887110c63b33f552bcded2275b4b8a65b9b02930c2fb70f587c20b6ed1e49719&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADNYXW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAXBYTJL46V3XNaAyYcvOyVdPSG2bDb%2BcYi7qiSI7x7uAiBMQrwbzw08L0h%2BoDic08MQpi16abQJDhrh5QIWHUdzLCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbEOwqHyD%2B1%2BL4opbKtwDx50CGk5wzTuwJqx4PAdFOdH0b%2BZvMndHNvX4AS1RDJ5%2FoeS6992DRCqkdmvzhDK4Ke6%2Fh1uecepPWg1mO0hjijY6tfRDsuuHljhQWHiDbYrRrvWNmgGuGyYerNNTj676LRANXM3xkEcSelfVOHMzMjEo0C9%2BTJCXuG7YiUpgO2Wcv%2B4GuXtijiW5Og3wikHk7PI0RQVacgblIJpadz0ffSUsx1sbC0yqB3PrtUDeJh2tjRuyCbebGNk9cSKP%2BofSGiT%2FGefX6DJk4W9K1%2FumiIHhOHMKOiRaWZNly0zVPr2%2B949ULUIq1KzHdxuflwDEuEOm37d6mfoCnTtwuwF501tWt6fwN6aUPjIogKQwgvAbJmDRBt80uZ%2FMrVD9%2Bo6x2zxhuQUymkJS%2BL6v98ijPQUADCtorIaZfXdpIF2aLfNkOR1TGTRVA2vZz728yAWmrndjLDtAwi1MsuO%2FlOb3WkniY9nXS9hCFElL%2F7W0YhKOsS%2BZOViJJqTPgI71MsxF7b1mU6CAqQfPMH0vBLptgO%2BVPreiXQ3NoSqgfB5Oh2j3IEfnNDqeRMqHykxu2BXpvjXKNG6G4ukYD1JQGHJ9ao3tYvKXa0Q5nSdKE6gsl8xTarK3OPBJubi39J8wvcPpvwY6pgHBeObE4iCTOA4cd7at9UW%2FLTDCs4Fa7GhsXlLngxUhuGs%2F6DMPAD5h6jtx6zJ8%2FSBTYxgRmt9zc9eME%2B6VqSaYN4g%2F4r%2FF0J%2FhhPf3NfJm6GrF5vFMUQwSC5aJqA8QqoK9pB%2BDSl%2F2bJawrt6idb7dBo8rQp5xW5H9WMolAkQ6T1ajrtAlScvs55jw97t%2BtYqusjYnbDUkdIWVbcc1deAGmfwAUsgw&X-Amz-Signature=ff2abaead171df6345967e30c6e26ef3a217000927eb6b40d9c71378bf457d81&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YEJ44JR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICjQIHvVmQCW3YmV87EUmeyPq7WWaZfYW6nvHI9ypKf9AiEA3f8WPg07EN6HooqhGU25gdWHMQPrdZD5QEx0PKSyZ6gqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfuT5CmBhQoxeseiyrcA0kBQMgf%2BhUqWxYCBTyjTEUxQuFfascKTbdPgxGnh3EscHloCumoXrJQJljmkjvQ8F0%2F2CgGJAiA0SXJTPu73JaJAYU3ZXvBw%2BaeMerl0aUAl9xCIEb%2F4Lfgz7mxeu4Td1zD6uj47xdzRN1drih2tJf%2FvrbIOtuMUzaqrTqxTOMWq0XSaktaxXtYid8h%2BQvWCuHKUb%2F8UNE2H0PJj9Dpp8gzDkmLuXoWIA8qko4i3oRxTe80kB8Kkn6ZWWfHFddB6hX7Zn%2FilL5bkEP5liQcy2KiNXfiPDJNSecEeXN2zCQ%2FKFMHcVvuk2M1CXh2pGG29sZlYhq%2FRSu%2B8y8id13FB8%2FXNuhz38jbBOVNiEC0TD1wK1%2FQSP08XJ6HFO0yreQ3zcpCsOqKWm621fiQcSeIBZP%2FQ%2FPF2dAfzTvZnVqH7Hz7kNiBpRYn%2FmgfGqWdc4OOqLWJgUvJkCxEbPH0nZQ9mkUdyIegbIHnsvMpjsMUTlRy7XcQj4zxcOmLTaqIT0frKkg0Sdg4ahhKTKN%2F3BqPxLWNF5Jny%2B%2Bm5kuseB5ue2AncxtAStX%2BkL3FYKqGWecefGo1OfAtRgcftWjcma%2BTxFzk6PjdGFk4nOag4EnYk%2B9wx%2FEX6urJCTx1%2F73gMKzF6b8GOqUB2PdbiuIppwDXPhn%2BSm7l3xcipFbtPtF3FpF50hevzA4GicCzubYgaafTT6xI3h6V8krwYNbI4vR%2FUBtV5JjopQJvvKUhq7kHpfy34w67oT38xlLne2JmrVEMOLSWBMAXnwuS4nI0XXj%2BUQGwcE%2FVcZO6qgqvUCe9drdMy7r8Yq2F8c3b1c0ETXDYSCkfUwWEvpMAe3CGZg2JqyFkGRfkEgJhj1Pr&X-Amz-Signature=38b73fca0748f3accb021c80e90494c445f99f440a04176f5a24bc2cecb8e6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ERGP4N%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDwey3hzuKxlENEHggJ0dgswfmDuUcauXIJXHdadgy5NgIgdfPei8KyKgdJnmoK5qhi2T7vOQcxG%2FvKviInxeM6emYqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4T1Ss%2F30FBzfrPHyrcA2kdILgkKMX5TYWfPhiG0at4%2BEX9pPGO79XnT97h3rC2cZ%2BbXmJ%2FVzW2vNuCCQD3HImIHlDr%2FY7h1L92dAEnHtYQXA9TxMxcw2%2FqlHzv18MZ1DaK1Kno%2BCFAVlHJS1oROyicV%2FcuePcwcqsb2%2BqY%2B4jRkDEYuni7YTvnuAp6ot2%2BPz5ApTKVygL1KsRNthGm4rUzown29wJM3cXoKUgcB5wCP7W5uPsOExfRFtUuJzB3tqHy8qM%2F8mp5Qlxdd2SpGlzqtQzkWzRHFMNSQOgPHmZmASKgn5lODluxiG5ZRmlT5QRdqqCnxH7UXocGlcovIt6HCU%2BWCa9mIM5vRScpOTX0OTiOwv1hu78zzix7rg0xqlu127Voo9L22xb0I33Ciqsme5oxmgtBcYJfr%2FARSOkUU9PeBUKvqpoxnz76pquERcpti3EY4xgiQ94surTcjOFUD10Z%2Fwc42B6mTt84qh6WtSGkskkvoiilI2MJd23sHsKe6r2NPmS7nbRiiMzsLCJwF8%2F1GgXVWHrF6AY%2FSyskYrUkQHUYVnelRQAYGRhtBAGsgv8NrFCQw5Nf8VXVH1utuPLKNtW6%2Bam1ZPLgbu9Jwtsdf7Vj3j1njRuAdAj%2Br3SKBKiKBKjKiZGrMPTI6b8GOqUBLwa3X3LJJSq951KwEv%2BqVIkuTgphU6oiebilFziPNae%2BypffLV4ypUASbjNEw2bqYgkMsCcCu9lsNqUJaDV8L71mKWRQH%2FWqJKyoEeHSHg%2Bcc3d3a7PQeP4ot0HOvtfmHo1AjE2g7NakAdefZ1DUyejoqVyi6FWSpMP9KFY8AX8DOnYz3fDLpxgns1zgEUmKsU6VcQZooa9P14ZQI2A3Fx%2BaimqZ&X-Amz-Signature=c7df72300b6b487cdf8d3d20cd10bac782a9e518bde8e4660bfe2e793f1d03b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WW3KAZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQD7octwNJJYhgUp3vYbwi25FrWYGotVa3BpU1VInlXmtgIhAIRb7U%2Bq7MfbWKHF8Z07yIQpPn9kjSRCKDH6fBeQbq7WKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVTAtB0HF5vQz0y5oq3APeojXo81TKQuFopMgnsBPGcjjV01%2BNGluwyszJwL%2FI6Wd%2BlrrPpqQPaD9H6qBz3DuH1SIS2YzZw1nGYREAUqXkBahoa8RRoJuL87Z%2Fi7ZTy8m5ykQOeiG%2BWrf%2FRdNZxewHS%2FYR64Hu5EDFhCVO5TQxVR2dOkMlLXYocf9%2Fwd3d7WHceDkoTzex7hKCnPdHgmw0hQQ5P957mSUBSxHFOC8gKH5yV4oUGXYSN5voEp4z3c4De5vyyCpaIZPYV53fLvZh6ZRYxP8wyhT1iWbj7qlpTAgiq1mKBPquchxzbo4E73vLhHBx0Z1oq1Yykk1EtKDZHyPUgNgxXCgOO9%2ByP%2FhhL9h1gIWXGQmm5MSYcueuqL2gUsZ1YS4v5S42eivDmNreGu9SAnlrLp1TiVqjIyDyrGABl1SlSGt6wXVWp0NrijqvdDxv9Yf5z3C4s1pYEGv76VQhfWEZheOpbRVAD3M98966sj8JFwHjm%2FIZXGnrnVEym4EM6GtSvIV4JHUXpNYKx9XOSiVQ%2FXp2HGNmlOGrcsbYPf5Q7t2A8P6w4cgVUQuKk3t0bLQb8pyg4uuDG3Tk3Tb230T8ZSO4HTW66OIsaoV7dBSTRJoXQ7bW3ji4UjqF6gTRGA53BFcgmjC9w%2Bm%2FBjqkAbBk%2FqKNhvuYkJB3hhXOrKUpJugBpEXuUKuPzFrYoeM3Dlp%2B3Gg97TBF%2BplaP%2BIK61uDO22HBlW57ZAOobs2aiV%2Fy9wIuxky5qviHGnNffWsu%2Bac%2BLBlDyRCo2np1IMVIGof8ShpWeNybeluqFsWOh1NPw%2BzU2LaEzD%2FDV0bY%2FEaT51LYFP5VwSzILRYhiVfhEr6qL7YlVON9KBHqWOP7t%2FgfGLO&X-Amz-Signature=c73fb0fd01db1142a247ee60802903c2532d6813e73bc51e104330b5d7601dde&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSE5JUGY%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC1i7NIlEF7jplLEL612n0uucQ6HS2VFh%2FEJ8SAUUnZGgIhAI3bWY8OzTow%2FD2suGdO%2FtwQ3B2DNb%2ByRsBl8WREOQEsKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfXRc6zL7Ob6TnYm8q3AMLzdU6h5y9aoVj4al7mxHBB4BUZr%2FEKdLhnOVAZ%2F0CCWX%2FpgZcj0g4F%2Bnz4nkqMmNB7NXrotJvn8SkRuMhrrK5NAyzPbxKLAXDpQrH1%2BDLPy%2Fd0ZlS0K012XljHU9I0e6%2BNi2p%2F2vUMk%2Brg4d2Ptn%2B3hzpKNttkoDs34GdJaFAnEati3MQWPJRzDoDYvs2PiB2HbmehoraDK8nSFGXzvky6aanksCYxCkouxIBFlX%2BFCDSklP1pVPFkpAFxWeui6J8BUCeSLVxFMLdpRZTB5aU8oL9sMWupLwhsRF3iuVXsmModh%2FzvXVUh2T%2B5NCoDV%2FwUKuM2CO9Kj%2Bc7HBhSmdJJRMXLbG11q9letrf%2FGPK494IUGi4u62S6jXIAMqNqzy1NomCLgSGrgycRz%2BXj4MVcbNRH0%2BKNUBkrY8kO%2BhSorUOPabZWWrqzetWCi4h9dxXPyDhBhHxf0fm3rVPUkiqA%2BHoxp8j7F7TzcSMUCrfTGCGGfhe9k1r3y20kncqozEyi53MF%2BgPvuMq6bIhX3iFDumTbdiROPJRrKtfrpLLyODHe%2BX6XcJQl%2B%2Fq6HoOPbH2S%2FYpLM8%2FY%2Bt3VG7dD7iefvh2bGVOn4iKa5IZggN047LHYoCJ%2FLRcJjKR%2FDDhw%2Bm%2FBjqkARMpJbv%2BT%2FAVY3KlYWZ%2BVEomPONwY8vgoBej9vYYJjbm%2FOjRVCZSOakRaPgQwm%2Bkn6d0%2FGDaKcrGoqpdaoPmgeADNLQzAbMSX4%2FSYjtJ8Wj325zeDHxSmcDB692V9%2B4L2431GbqLVYIMeZPArc6vFUOWh%2BaDJKkTVFV%2BHkPJoiN0aCo%2FcdBDR6wZubX7SlO9VGyXJ1RlnkUtKMj5ObuRVz9zYhuW&X-Amz-Signature=b49888506fa11e9fcbb1b56cf6fdb460fd069225a382a1fc3526d75be2fe0d36&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

