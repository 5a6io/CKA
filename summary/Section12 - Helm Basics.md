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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YJMLCGX%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZjA1FqanFJpt%2B6ZuAT5BuvEgGXbfLoGHYMxuSykEcqAIgLoOSIhiKMjbdtmYHHmHGrQMqBBdhpLE9OBAXAg5WcNcq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPqH513GLzIq6%2BqSxircA6zHAqs0yHhFoKNja2%2B%2F9uEAGI1nLBkBdrFWrHDqClRKNC%2BMUf%2FszEsd%2FOKxMh%2FrKw1YQj%2BJZ%2FGGOZa2lgZGdvKP1WmpQTsCcFXp1cyv7SpEhkgChWfJqTLAKiieoHALpWlteVGdXhoY0iKhVgTEiQq%2FFai5qo4Vam8zecrQZKtcF4xzRNrwTjgBR2QXD5%2F1%2F7lLOj0wBnT9B0Z%2FoY8qf%2FduV10bfSZCB5%2FvcB077ivN3lIatoSkkGSa3mc1eXSlZrBqyufVAOnolzBwfWS%2BKZmY5ByHIqOdVbdPrgKECRygi3X%2FIMmTo0NXWqai6ccB1MbXdivencFSU66xicYqbfqcKg2OgSqSRwpYv5KdOMC21r0buKJjOfWkq%2FeFKSwLcWBL65tnD%2FqKELplTxzqPJrRXD64B0IJuLI8nCDGJamNT5gtTwj5y4%2BwbhSUxdAUl62YamdrJSBBI5vvJZwAoNzedlCVDYqodXA6Po8l8s6d%2F2Q7fVEZrHz987XKdILoVGPASHk9Y%2BEcXF3lv5ntSdLpkoLGvnyQtADzpfKB20rd5dpQqgJNmIPTsHNoX8wJUugdgoXdQkhXJauR%2BCKtg7jrCp5VjGlFq0BMcMe2nfEEm%2B6J74F%2BuvRrB23AMLCZrsAGOqUBbJbGlwxR%2B0owyMtB%2Br9Hp70WQGWh8uNv0pv4jXXfUybzHrNCa4s1tPQbkvbYtuFpGCtzBy29FJ9g5i2HInbM3HQ58XZR28eltGbYzpem6m9RabNlioqRMJaOVyt1WFSgdXOTLxhaHh3HqhFqKy95mHzdViUYHOjrccr4O7Mi2ptDtrGk9tjgneHhixbyXpDmxVPVBh49ue7GEnARr%2FMDxYtiO2eN&X-Amz-Signature=df2f25176d15431d4d17321da20a206077458d95f54f86906c5f286e0cb0f164&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVUDRB7%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsBl8R2Dxol%2FuZInmytDfKSwflIXQJtKIdKYpDFuqgOAiEAsQDvB9jYiAm18D8kXDJlKSAM3KoocBeHl18Eu26J%2BQoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH4TTq%2BkAJDnijFK6SrcA3aBpZkMJkHcpGfzTVRjAmxmbVlc5CJvwy%2Fys0eIkC1tWU0SsGnfi1q0%2FBZPw1UtadoTSALEUyuMo0TjthlSXiZ5Z7Z3LG94bgrSs2FIukT9UT%2Bs%2BW97fUkU8qTIFP0IP8IK2T%2Fd1Q5%2F3E%2Fe789oZrL%2Bi%2BwOc0hee8fOEqY3qUAn9ooEpk0xAEoJIui7Xt2Gkpp13K7yXP6TVCZWtJmBFmnDQv3f%2F7woV81oduHOZCL%2FFgfaH75Im%2Brnz7%2BAle2u%2BKPE9NAyQwMHfRZeT2ftv5uMr7hoKv3gMt7%2Bu9y2f3fpdF9QaS6sTg2OvEBBWm9yDCuIZxnACBm7ARPDgzYV4RzPIIcK9CJe1r1t2K5ls%2BlJN26hTYSMpeID%2FxyQD0OWSYfrGDFN%2Bnz4%2FaepVRYXfchji3EfrkJbvp5lLTKtDoGVVAOXcNgbo3vDMkz%2Bzd%2B%2BJMOhwUoCFFVHH0kuHcVGw9BFPmGkvdiB3G8%2FqKZZMbBGa9BRHVl0m2xrz%2FFXz%2BzYEaWsjCPObz0fQZy9tCGEsTtEPw9I5x%2BfBaDkrlKdFKeNezi1ZmDp3Nypj%2BkdgzdCD9f67i9%2BTmFfilszCEWkLUCb1ll3mQBxD1m94%2Fn7q1ovjf4uzePyRBDOUR9%2FMJ%2BZrsAGOqUBJttOlKkeazDIlf99YonjlTdpQTKXCXUxlHWSGSJEKwFypIWNMHT%2BPw9XA%2FiX2cpCSgm8omk7zqcJLnVibww1VPON%2FUvjO5ZO7M8k%2FZom8ltTWOujaQXwIsuT6xbL0uKiZedZIhr33UHCjUXfMAAyEC9SgSHnssha2vChMNrP6mJpsrhtDOx4ELp%2Fadjicq4yRXCooFkniYtguF4CMgVPdC5MsNYk&X-Amz-Signature=698474c183f470c4d009b640ca3717017e209e85eddc98f9ba81868c8f04b006&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALBJZ54%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FjSAnDN7HslzA3T3he2BXijoDmq734Ixb5AZqnKZogIgXYZvHrfzQ4JCBAV8FKbWIhg%2FtAM8g40EpeY9p235yUwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPQSASClnUf81CRFnircA51TqzZ1jlDdKmQV8mLeNJY0kV9Sb%2BGz%2F98%2F0wNEYZrNQ9q784oLny7yU6tBSI4RGTVDnHT66Whg%2F7gdIRBEpXPw1omZKg7NEfHltu9MvGc6jZh74%2F2U1RoEvtGlzWbMUtq85AxSObWBBdzI%2F504tXEFGzq2VbpcEE6CAB%2B%2Bo48UYhG8Rl9Hji0ki34pSfcS483Rc9iL5%2BYG0uxXYeoGsXj6N8kAOkvvy6gGmry2%2FZ6bZE9J8TNBuenr9XDggI0FtUXXI1ldXQIIwjIQCYatHXpMfrdkck3KfXzTXzNBjlHWGtZqNJw8DQSZ1qEs5VGvGUvtsWxzaPVekgU50T4dTAgOsf%2Bn9IT%2FyU9j0uzPYldBei0TuO0Y8QEdR2xOtJbkBC6tRmyJatPJJ1UKqNI6MeS5HLWmdxP1XOdX6PZqfBd0QgQyS87MOTNNoyVYbcZb03mpfsMM%2F3BtCHWLoEyrRVUkdyBRf98TT%2FQAgABCAHdthJbmNJLTX3ysBTJ0BFR%2FDpD9VO1fIvRmOji0rRzqHfwVpL0cB4cMF4TSghtXG71QmjhiTkR2rL4T%2FGB7Q74OFmu%2FC6FD7idT91jes5h%2FE7qKI%2BQum7jYniUrYkoi8qROlEqHrJOk8vDrFAuMMJOZrsAGOqUBUVSkGzu8gq8xsgVpsch8Dr1mW1QX2cbVpngh2Ht%2Bfjio5HuvQi4cyR4wxrR8%2BTujFXtP3VzniTcHRyVGruwoc58lxvbkMspUjwpI6s7MttBWQP4hOgEpZfAQg4DoDpPzZ%2FRFDSWY%2Bm90tUshnmzXK4Hh0BkaxDy85KYcX07w%2F1YIX9sDkrhxZuMXgXF6FHRDWTA8t3Po9QF9Xtg7Uu8YOkEIPuKM&X-Amz-Signature=dc9c8ebe5895a33321572113debd3e073141ab9d48c35d505cf42ce9015410e6&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJTNSNE4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsrPoPptWyErEhz%2FWwSfviFgc4M4y0BRk4A1umrTJg5QIgYZrIl%2F094jjjcZbwyKPxYm5vZl4wAW%2B2Okqy2PZPf8wq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNoMEp%2FVUpEBiSzZLyrcA6x5zE%2B3wSVB7OkpzdBW%2FQBf%2ByPrNakyiVLevqMoCwaEbenNjIM0XQgd8maxt%2FiXa6icdRXwfsLLbUOkqLkrS2kiuKKDHvPa94r81LDkCLZaa8xYxEC89%2FD1lH8TjSP1dNfWrevpKXSR%2FG5XV%2FnpTNQyrCDPuikd1RRFzgGnhqpEriQsTnKnku24zPjOE1QIjcqROAxgLfYV0GNiurmDBxKQ39TB9c4AWSIOaLriFtSoe%2BAa4j6wE%2F4QstRprdMfKwiBqOuBE8vK6hTUxCwDB0H2%2FTHVa5boVOy%2Ft1qzIzFeh5Yz2XMPCz3rwVEz%2F1i%2Budnv1fbbBPgr%2FEALjepO%2FoigsrsSrOh3e8B8Vjkn2loYli%2BQi2Kz9oZgSeADiCDvasABIZdGWE0lIeBoqpGH3Y%2B0RsxN%2F6OUId0f9eRq%2BaHFYj8qve6rpmJPQoOY2bO%2FrQcdnT2lfJf3sy9wumPWLgmivaxclTxeRididf6H9x485SGahyi0TjG%2Bs6F4yA1teDFmTFRiEb6d55Kz4YeKCoao2zINGpSxcLEkYVJ5SG4QGPdVhUEhPYfJgh5Xmauq1x54EOp6Z7oOrs81NS9yf%2BR4NktLAwh3PHLbRrcQQMsn3uuJeBOHrhI9eMGhMMGZrsAGOqUBhY3VS4astNwt4fEGHK00uNIrmWV%2BcxZSC%2FHYfyA8rvo%2FJispGa%2F%2BbiJeYjm%2FjNI66KxvtDROrexPr6kkp%2FHFGYsC96m3g%2FnE35zQ9zU3Z5%2FpoD9Mux6qZmcberfeJdZ%2F6tSQw%2B582QV9a4aXyx3c4Y4Mgn35HwBJBMnTRw0aL%2BnbWjVWAYMwQXkX4GzqCQQ8dkR15QtUYuWxNqHZRwepQN1JzUJX&X-Amz-Signature=a2d57a122de8e4168afaad4386243d221dd7d60f7bcb4e9f01474184a47a1c38&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFDEBIUS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BbTJ%2By3Db89ylt0u3QQEhtYlLMtLUaeHdnJO44mBqOAiBsioUMTFenAjEH%2BqawbEoqZ%2FGRqAd6PawKzwGQcB%2BIaSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMuq%2Fitk%2BLF3TF9DNSKtwDrKQppTVXOf%2BknPHRyu98X%2Fu1a1GormBulijapGy%2FqCreqDww2PIHEs5dsPkushO3L29uAaB2xVPRsSODBeXOqL%2FPT69SgWSCxDV%2FrXl466fpk2k7h6e1D%2FTi%2FYumQBU99Cjyz0QutqHt%2FI0Gd8FCR2szx0onsfAxwge5shFhAbhjCbz43HCI2M5FsTvX7OMvZNmfx7fJGRJPhZMlij2p90oIzvDN7iQHrjR6hpLTjKpLK4BUqpUMl4q9%2FwUdM%2FUVpE12SftrGPwPrpZ2WyQ%2B8NMQy%2FROjI%2Fa1x4Feeqvhh61hjHM%2FlkD%2BOvo9T7YRxt8VvIka82a8mux8DjcPdcmiHar8BCivi6MX4kaSUhh0ZREu9pfxEYBfsaZJZIpkUeA8N70bTcM13ZgyJxrDmJeyI%2FjOHw9gxIZIWX22cmYxi0yHpZLeOVpXZ0S2i3Q0iPtoEew4klI4b9CAgH70N1MOUdzweh5QAYbgJiJcwl8bSM0jAcROWM8hiGw2Lu45RbKl4rrsy%2FZ5DPa40jMlXiCZufYWTfe%2BFm%2BWRo1%2BqmgYDd6zPuvmENWSL3c1R%2BtG2jR2L6vvdBLck8C0uqB08sEPHYu0EcwBbSACnc03Ju51vcVxi1N11Bt2jjuL%2BEw9ZmuwAY6pgGzbHKCTpJrneqwQHPGOrSXCvZKxR15mSXiKJS%2FzzIpCHvNEgQtdIWqEnJlZUEHJ%2BIVm2c0vBL5b%2Bdl4GqEzeM8snZ8gX4%2FdsyR3cDbHDKnTWbvC1B0AyaAhr5WXZMBB%2FYXMkgx59KhYvy6KeGRGmHrzrq9XSlCNzD1hk4B0Bx%2FmJTmuHHXSg%2Bt7sr7iBaxVBNAK7vCi%2F14r6JDgl7vmSwz6Iz8xxBB&X-Amz-Signature=94d71e3318424981f2d96d78f949b5013716363c594ca6a606dba53d287a9869&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QOPCHD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIqF5JlbVxNE%2Fda6So7zko4r1rERXoFAWgxOzwuCGx6AiEAhbc4cBzNsyBURLIJYbRZ8p3oOlSMjaduxL9JvhjPLVYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDP3outBH7BLF5f17%2ByrcA%2F7mdkibdbMa0WY7o%2FLItY4xeFOECgK4AkgjL08adIlNd7%2BNDMK5AWfRgpr6h2ohhA1KIaIn5iz8QLa0%2FTRJQK5HLb%2FNpY%2FERYZ7crjbwiupj%2FiwomGBM9XP2nIIKhp%2B%2FJK0MAXPYrTAHyP7lpGV3HGw%2BHaPN6%2Flwpi%2BCN8YRT46VkAVBFxHx%2FrB%2FV%2BaxGYQLDtlOcr8DMZCG3XXjTptytxw%2Bgaqzcn%2BjKiwCJOEqEJFqmzf8%2BKNYzaDQZmkYlg32YfENTtJ6fiX7tmPtTIZ8QnCkSWjwqmdnr2DcVAw8b9IJuSbDdQapW9eO6WP4Lqdvk6HpM%2BaMONw65A2bk47%2BD%2FFWauyu1YoO1keL7A4G9f9Y72QlUizkqVOkTwY5jDfK1qgA%2BfWHEodTR0Hc83LR4pAkGW6xmeTt2UkSd0%2FRiFEvD6846uUXPjsEw86o0jN6sOkzTgUkXn2FMgcwaPttQYynsN%2FQFOWc5VkdLClVV7EyiwA6d1PkthlIZE9Jxi8%2Bwq5IIsOJweEJJhL4eLxYq8%2BzNdJTncqj5yb4K33yg14lkrS98JNNrhDZw%2FHe3AuthPEuqOes%2FfwpydOWKnPICcKCMtPwLeUqRDm23C%2FDDAv174iRYaYNW5lS27VMOOYrsAGOqUBARif77UrGqHVmUw9qRKwt03c3NeDZsW580n4qcylErG9wVEMSIWil4vCq1ImEnDJ%2FhWR93ooc%2B9dr4cknzoyrKJYtVol1YWadvvP5n8Z5Tt8HNvSflSEZanoUsC7QnYsjO23UZqZaLA%2BSg8Jvs8%2FdlA8hK5eLE5JqAcoQMM62s5yM0UaFMR29rpRtalKgLz6EK2TDt1KBu3l%2F0hX80kJqNm%2BXw7W&X-Amz-Signature=a474a69d4961aeb1a341f8374f4a462a5f90eeb54f1da88d368eece6338a5772&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S6MWBQW%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP6W%2ByOo4dyVUftlqQevcTziGiTEi3Ss4eNYWUlqFmzQIgFCeuZ7dKg%2Bfv8qImcVwo2JRxwD4HuVsXZJ6oxR7BliYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCGEsbesPS9DZEXTOSrcA7TbjmRZRoNvkfWB41FD7C58AhIznosZaqPseRYDUW03FXL5qGEgnzmilcQ1s%2F6Ke%2BreOkW13gI6shFsaOtekFb5a6al1%2BL6bI4eczozHlLWabVSP5Icu6AVy06gvcjuc4fZU8lGF6ngC4rgPn0wZORBBMTlKGaH7A79vcPOPBrD%2FWROgyzI7BR7nyt0M7zUmgPa00ZoI3Bbs51vw4IfWPLEoyZURI%2Bulvg67AZO7NSYbHFh0ffyzvkyJUbuMnTWd4sqroiIk%2FqddAglf%2F75Ew%2FkgK58JiHdugvLDqMciFr%2BEq%2FOTFhT%2FmJaRCaYsD%2F2U5QHbhVDU1GSa%2B2wCG0XRryDxHCcoEyT16o%2BnyPwUaQSF2CM18Oj8bK2s8oYWvg2z7mUomUFDdqZhGK%2B%2BdZL2SJdKpzCZqhZcwZG6s2aiLryDCa2EbHRY1URl0DZ5lRZK4EYfGrLkV2VHNqez8caWaKl%2Bu9q8tfMF%2FhvfhfvJCDmp4FJ8ulGw%2For5O3SCx2RcdqmxHpTQki70ftn5%2BqskYmzVPHVeA731IJQliiKOBzixvx1eSM90P%2BgHowlBtA5Opb1phZvvZ5ja5VShtKPHXoYxIabM3ZWLGPAulF2Ym9SLZB0HTWuhKKaTTp%2BMOyYrsAGOqUBLOgyLzlkU37uRn55%2BaGbII0f5v7LKbrkOA6uxw5t8M6B6JNCEB%2B5AARWGbKRjsPotAcm203ChEIHTYAFe4Qk8hlDo7JU4dr55mf7Ev6dSjv6rWWgImzTXk0vPpTf10%2BVolHT0ZdLCv6oFEApDajaS%2BxQerLjNYQX65Yrd0Mr%2F1k0bVdS%2F8oR1pkkwYsg1NftExfam9p%2FyWAZKmP3I1PIMX7JySLi&X-Amz-Signature=dcfd5cccde81091806112a3c04976b38ce7b0a8fa074f2edcb068ee1d70f94da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAE5WNDN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5krJ9%2F8tWhyuIbWWKcWkZoF4eaaQbCU0%2BfbILjQC%2BaAiEAi6n%2BDBPD5uivxM7%2B%2B96n50QRo1lkPEoilavBOWTchboq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzCPFDfLY5xTzwrsircA0rnn3ep5JvGaskfFNRbPPkbPrGjMaK99LRem%2B152jh9Ndls%2BqtSZtyBM1SRD%2FwgPulGjjvMBurz0prD51keO%2B%2FUh3DCdRZiWddZFtqkCJT%2FU%2FyVl%2Bjzuhsj%2B1xw%2BFnjdmz4m6kJkHZFuc8jiDt7b0wGQ01Bm4fwWNeQw6ECqKBrxfkQ6GLTG59FmDss2PjTK5GnkgRGnNgS9U9HOqn8LpXfvLNZFKkOU0U9yoq%2FSze%2BJGXrvaxQCQoolZU77tjI2cTucyuGT8OPylASBp0p7zWgqX4EmwI6HpFM03yWIRaHqcm3R0oYGnvhcgo71fBgvf2eb7ov486fn5IpbZkXnXFMqLMjnauWat%2F%2F26VXEXoqzgC22XF%2B%2B2c48J9FbFSEc9NZq8Hl9Gxq7ryHv6cVJGsdFSAc%2B2LaiiCx97sMPlsc2B9knZ8ILVbNYJ5UqevDNv7EtrOJtIKiBp57h2gmEtUFt7fH%2B2JPScKbIGM%2FDY0y7jj%2BMVOFy6fg6NQ5KR3IEGV7xnWQNBc0DI%2F3e6ZWaox8bDk4x7AOrnb5LzLLl5R2CVF5%2Fnc2il7dK65cAx%2FK5EZQ4n6QCYdOmXwqN8NxhWBkYNfH%2FLtQhtzhuWIyDpR5oNDC51ckBzqbbl16MMuZrsAGOqUB%2BLdBPFHbbC2XDGhV8WfmfsLhuWf04lbiJ1gl2aYlmECT3baoq3DDiUbqwK2F6tkyKoUaT4e8K5sllda%2BKS7TvdgaI%2F%2BpAilr0xZLH6ltcV2FdcHwqtSjlFQ3hFz6Vg3AEMIdKlyGMFJnTFg%2BzygmjOqCexQt%2BCiD2%2BiuI8RZjcrISrpK9kHL7lkBgMQRsHZv7oTRuHanhcnp6lsmgJ4au2YDlHBK&X-Amz-Signature=b890e1fd95d927cd6b2415f433bffe66a9903c4a14095caf39ef05864e230297&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGDB5HAJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T141144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVhT2EJCMHzwiVNepeaQHzxSV77R5qwYFRJqlV9NK4XAiEA4iEoro9tftfytqFGH3XAigAjEify405PEn53AV7XW8oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB0rW5t9wYG3t%2FFovircA8L10lE1jFjbXHrm5Hdq8B1VwTk3yCPGcRq%2F42iHru%2FfZS%2BRv2qjcNkJrJDlJxwlB1VYSQMZ%2FvWIYOGYWc1kdGiv30pxKod%2FBJMYnW7q%2BhBt%2Fvlz%2B43dBaLmVU80GNDI4CnyxmjcyDztme0Wve5gOx9aRQdpDQNWsu09QGafW2y2zI5MK8dzRfE4juCJAhM5BgegPHALyagZtkKsHvBEtvq0ZPfEoBXl6CRsDV9%2FPb5Qc%2Fxo%2FMMkBM0uVEwISnJlo2J7kt2GUGQgML4JplHsp7K4Gom5dBc4SrfNUl2hsjfQEhNzd%2F9N2LidWnaXmMw%2FLGvGWRGv5GLgVzsMPFbpmWrrWu4vh9t3wu%2FXPKjaTopD8xk3cRSyVakSLx2mffFNtZMP1h8sXCxNFVrv4MisVLwjVNrPZ9dm88kiAt4Ym5ODnwd%2F8rI6PcVp%2FE1x3IeVqUZ8fRMkS%2BWi4qJKcEfvoVJi4Ig4mxTTtw8QzHLJjeaveC%2BopgwErcxC6GlUtwRTkF4awYBMHo9Tc2L93ACgxWoj9Qstj4uyQ35VZmDzv4h7E0%2FAdReKVJ8t8rYdw01HnFVoZT%2F%2FI9%2Fx2xAJbQQ8fERrHY%2FGQpGiStSkBZnFGepVCe7m%2F9vzpfYh7%2BxBMNyYrsAGOqUBh7QwlT4GJbUuR%2F9Gp%2Ffk35sL3y02XyZn5MTV8q6wZoZUypNrRlHMZVEDLEki2AloqlXYWPDfNotwFG%2FyWin%2B9A1JckvPP4CnBG2TiM28ZbsybKfpMgN%2Biy%2FD2I8kUReeR%2Fv6IDlEeOUKCqgXhXUVf5ovvD7dfBfM5lRobt0DJDlB%2Feqj0luV1rIIzaI6lY2vIjRhP%2BHLk5hJ2pAoUgtpzFFqDxVj&X-Amz-Signature=8cbc712f51a085986f6e83897e0f66dc995da3ee1595da58e5e62673e687bc37&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

