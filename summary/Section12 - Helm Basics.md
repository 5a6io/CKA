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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQ5NFCO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICsvL45gSyrvTpsrwJlnstiydH%2BFdBfrkPLwd%2FhKeivaAiEAz%2B9mIhvQJDxVR%2BIYztO8szCTWuIAEp8OKczDj46RA%2FEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJLJWQ4P%2BvrwDMH6yrcA4ybXUUz64Vxtm39wsE0pAqWf5RO1KH%2FqG%2FirteuMo5dr7LBnaJpXuQ%2BucrgtD2Z0B1x%2FOE3ijfn6MN%2FZF96J9NaztxZc37XtnNHCo9OAqqmU3ZRiUuMz4iCCjeURmu%2Fn0oQgTNgrhl5YTVeUk9CczcPa9l1cBWH3lgp4Jd4%2BxJY%2BCFpt00552%2BMoLAy%2FeUd4dyy57attzcCwcwlBTWY1s4bnbhyD6dVrWWlQjrFCa%2Fby9SMmwq%2B5scWjUMFZiyy1XfuJBmIeIpphuGT6eFaCXVTiJgGxV8dlNZgxBHqB3syxA1LKsWEf%2FLCjX4UEhHry27kYFpCrHEl8yclNc9sqQGvV441YUSa479MDNhn101cCQ3xRNl3faLZdJ1ieREq5n%2FhiAXCtHSP%2FR7zJjhB7%2B9YeZ7KVFJ%2FekICnq6Yla11ieN7aIeMB%2BGaefHAWiG%2BsHXtnQpfdpr0jiJLClBGq0KPteaYDABCvS%2F692bHIQxLkCNbNrjmeH79697DlTw489%2Fesz34jV%2FfYKGyrWNqS4tHx%2BVLzl5fQbRjNouN6FPNprJ%2BhNhiuoSEvm6gX8rlIDfXZ6hDdjUQJAxGBk79tEmYSXpRg0DgGEt%2BLdmBl7jhKmF7eDGnVv9MxTCXMM6hjsAGOqUBoKykhQVpzKK0poBICdJU9Ev6PVrutT1C0NJD8FwYF5fsxRiAYM6c1BZjABN1fSeuKDPCOaK39icSNI2xD7dFDy0wrX7S%2FdgMF4%2FGwd3LHkox3wDGfRQqplFV0tNK2tYrjOlDd1LqxWTzQREE6S8FZGsdfHrE%2FIrkr0fCy6%2BpgGYhIO2ZBXZW0JqiqnkL%2FvLAlBGdmE6gBFX7HRsw%2Fvph91ucyFpC&X-Amz-Signature=8aa9f11ae614f04cf45aa151b58985ca48768731c25f838329a6881441ede02a&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REZ3VBEZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCvd0KN%2FZJHrBanX4bX6fXwt5ajFrAnts%2Bdb9kOOQ%2F5%2BQIhAPA%2FX%2Fx%2F0kvzKictrjhlGKVQtm7p0vUn4vBRIJDgurmaKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMvJtAO8T06FZEs4wq3APNvcCWG5xrw153zV2oGmQ7%2FbMZPN9JATiFP4lYub1qxUZIJBk%2BXwwZicoJrtYnyzF5foCogeR7nxAyoe63oAth2Wc6u75Nb1EAwT5%2BWIHoknVSUUVkPk2%2Flz4wJ7RR0s2dsf121c9M1TlAy9hCzOUeOzOi655wCE2ZzQz4TM1Lb%2B311zPEWcaVcqLOWWGOwuAvH8tG4Ie%2Fzt7xHZQK5Se8VsVttzxV4DgJCgY5n2Z0J31v%2BcNsfA%2BcM9gl5t852macOoOF3%2Fy866mrUkyEpjefubdI7s3QLVUvLUgm0ykpS%2F0GMKYVJOKwnMvxlAAq1ThIgMi%2FdXqvungh5%2FYg3vpxSscSMD0wZ8VgvMR9DQc%2Fi1VT9trmJUhod3Y1t171EClyobGQpTpiBBjsL%2FMCqZLylRkQevrg4SCyyepxwtmQ3ScQUTT8TKmtDhM5dazRZAdZrUvoE2Q7sQxKtZdn4MpIjOnQdps0umNEMsH6YMPu6tGD2jGq59%2F23X0TV7Iby00o1ZMOSGkeR7IuR2sIOVEzZ%2Btf5RtgDLOYrpJteQ49mJmqVeoL1dPJPAaSNOAwghyC6AoZjXzVI6rtY1xnAlKCz9Yh0PCKzx%2BhYRUsaRUlX913qQVWI041Lw1aGTCTm47ABjqkAcPv7hn%2BuD%2FvLo49rKBBe9%2FLYGChMj0L4GVTg3SNxuBkkwC9TChxKQjXjpnXWery%2FhkGKBhtcxoJnt25pOMBBOYteNv7P5MLgRYR1W6AbJDIobt7jTbOEwf0QRG0Lk7JzCYZ8esFTrq70TuUY1Re%2BXrpJ6QfZEolxAvEKQdCYCX3FHNMOKQZxjlPUNaZoXHuP%2BKMVIk15IqXHxa4UuoRUXCPPrqn&X-Amz-Signature=7dd233c5f0c6a08ab1a5a3a9710d4aba61a5fb5ec829504d3b416705a4094f18&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJWU3Y4G%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICkt3cm96sI51dtKSpfhTDs2vXkyLeBksh1O0O744KWCAiEArc6HOrzcrzSo8QiHkSlcuCGXwWJJdaMLZCIrnBxCpTAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPfmCN4ZaaVlzWnaSrcA%2FHFS3yi5v8CsrwNlA6iOX050afuOAD6MmC6vPc7EtlHLZ7GuyLwx9ewDSTT7JDtYlOEI%2FqWqvqccfaIxNQqa8UqDItZQWuz%2B0MpgrPKbY3g%2FEKvKwd7Emp8f%2BHz5hmoH2fA3V%2FimLEpP%2FM%2Bjm4d%2BnpJLxDyMfG30qgOUo24CVeU%2Fw8xns12rLegJhIRSJof1IP4P0w1BtmH1wkOA1F9SBFQD%2FIwtD9U%2BB%2BwnNqr26NTXQ%2FMPNRRUPiLM5B8NG7NXT%2FxlRWd192E1DTUQjXcgRbILevyBIRiYxeEgZHj%2BUk9j01xGKTSRja%2BMr9xglfxyr0LrbCCqbl5z5llsfD3MWRjdA%2Bc%2Fpq6E9k3lse8hTXUzCvzQlEX8%2ByY2xjjF6dSGFHpeP%2BUKLKxiya5r2A933176scwHGg%2BbERFYVd832WdFRLsX3Gci5OONj6Pt63P88u8lZkkKrc5FtR0AtB7nGH3HQCB0Pnl%2BVXpOeDkO%2FQ0jzWEYHEmOhm65PMTwpd4vCeZTdHlsgj8H0Btf169VBqk2fcvpG10IjvFC%2FL9MtAzEE5F00S6RFGYWwIlfiJSEhTccFCIL%2BJOFrAWslwZ2FobuOmPBScyyLOh3C59KiIfwlvqJFz8JGtGLgJTMNWbjsAGOqUB4Qq5OKaJbKXYpxhTMHiX%2Bxzwt5XWgaGJRyXDUmKVOhqM2L8VWp1Jk4c2nGv2D5uTOuj2puIQ7qepo1WYx2MUIZHt8ZZcLNDRAXQBSfOGl8KZpraeOuxl5IMZSzNNQbHWdONY8OCd4B3PK4SPHJYVp94o2dzOxNkBg3sN%2BF4vl8RXaUItMilr1UVDvGPh63aYfLIafYKbH2tkC9TPkG2%2FDq68bMc%2B&X-Amz-Signature=76cbc0239e87d1d07fc212423bc366657b78e1ee6eb60c4cb6f7c83b1638a553&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKS4OXAL%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFBK5JD7q2XGBBfAQ02s1Au2KHLBpshmiB%2FDFSmZ7tz%2BAiAytuLq9PHnOLeR0GmCM1J%2BMusmFOh7LTCiXxKl%2FMwfqSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRsQNZrKNbO%2FVGfhtKtwDRycpqzvDoTjDUUQGQ4FOtCGPUbf4FLnHPaW7CSUfhjbnWIG%2B5AZoMEFfaGcVifshmFyvn3Wj4DGoy%2Br61VXkdSPU9eCq0OpnNxDKJFEHYfrBDi1x921jgGzdcZSHrc6Oe1Yv4EvlIaYbZNabN73Z%2B1YzyaU%2FZhDT3TzAVoIM36Z1h%2B3QnAVp4rjia7cSzYF2OS3gnUgYs3E7PegFfJ%2BM68dEJtW%2FfrDT9etJJqHFLlDiVGu%2F1q8eBlsqBvOgdtAVj6QptllzMrWfb9X5%2FWu%2FVr4EkuKQ3OQ3%2Fv%2BC2nJpN9uX29xWWk9awkDtpP6fJHB82T4v8U4l6X%2BgCC23PI1aAPjfqsuzqePeYm4jpI%2BC2Bo%2BTOzujjezXwt6EAbE9i515ATnxniMus0ZunTE%2B2C6qW3iWIWQJ2UE%2Bh5PNFSwQrY1LH4tSqGd7t5zpWDStEAeKikm4vzpuMMz7qhvNTRqnCB1b1%2FUVX7yRa0KvzNsGeQgVNybrmh1ECdiudSKmflE9elcvNPLpejMAWWwL9FfzUxj97h7TB5hJADVl1wXW6sRTHr5JtosGRKPChpm8qIT1GZ01V9froFTJsruN%2BAtYs5GeHaJmps3R5OVEO%2BVQK%2F2eWHQyTqMXaZ1pqMwoKKOwAY6pgELuX%2F4%2FzemlGJg%2FBNgxlt5%2FQUoDTBdwwQnHjWxbOaTnelcrhNZ%2Fl3If6a0C3WOQ4rgYlL7OSUIdpS7Y%2Bypj9K46BT3uYEp1CIYkJz2UkJzJYgiRQUtU4njG%2BndDPWZ1Xn0SXkguCvx%2FwtMzNEWhr6jhzMEUlylgAUlmx5%2BZ6AnHbUBust9wQTXIXbUtl8sf4DpT4UvpQCDFxqpkgRuoALsKq6OXI4k&X-Amz-Signature=edd68a963bfd06df424231abbcbcb1d860c86a0757ded3c7bd3388e280a989cb&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBVQIWWZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCy%2BOz2HqRsiS9IO%2BA64Nxv16KvORGI71xE0tMF0pKL5wIhAM%2B%2BGmSdfm9DpGWF0XhfMzsMkNtC%2FpG9M3kmbKpnMEhVKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwel%2Fg9qoG%2BKy1SsQgq3AMR%2B7pmxdhPwtOuRjo1zPDhRqH%2FkHOUcAHO4S5Ix0uBUfXkbyPS1xH6nurbNq7Yyt%2BTTT6Ll0j8KYsMvSfkC0uiQTp%2BKHmn5s8O1uDz8JYLoFMUfX9uC9kjY09JoAAG72tUvm9LfkGMAIc3Tp7Ay3npzWAnEVK68mcpSvlnJTZid5TpollMjPQe3EgKm0RSJ3mh6NJ2rosuHdf0IXulQVn8jjwu2VzdL%2B%2B4bSnsP4Tx4m4Yx5d6PlnhXuifphcfgXghJzw4NAl78DLV4Q%2B6K%2BcGjjRGA%2FiZAo4XXCtnUaBafqr%2FLHngxga%2FF0LkzR%2F3v23FlkMBfu6RnuZPlOZVut0tyVH7z9HIPSLdY1CFfcmivIz6DmLui972qiguauC77Bmf1Yj7oFonqg2w%2FdQRmXxdO5dXCENw%2BL%2B6NGXuRyjiHq5b7SR5GwXzTShYDAu%2F8z9sxWDgUuazEe0jIXbZcDmg7OQfgeepJ%2FiWuWbl4xNM1pYzpd0F52nbFWeTMvajUT8dC4tX2bl9ipqFQuFMDk5uI36MhS%2BT2C631L6e6o%2B6hf33IIOngSExThqjroOyWqm0VaoKeJTe%2FrhZ%2BcpmwFHBMQKoTDrCAbGut8xRDl4FteNYBaUCwBHftSuUsTCTm47ABjqkAYDXT1A9GIynQ6%2BDg299Apq32EID5Sj52qc9g2U1cFWuzeuqGKfOr5VO1p2a9OpatMht08%2Bh%2BbkFb3lsn49IevkJDTGwuqNNEYAyeAKUEvjL7zvOFdgGezJolgbZEeky%2Fc1vx94iolkcHsVqwCT16VXIYz0WhAvLVhuQuE4bivH6Stji8ode28IaHMWilrttsiZgU3bEkHUM9S6X6eSHcUEpfP0q&X-Amz-Signature=d30c9ec908a1842c90603d0690cce30290f098285763fefa1ecff2f9166921d6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPX6D3QN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCICxspXeseCALVNixd8XaHH7B%2BBVd44njU6%2BGbaU8gAOcAiBvZb5svAlrPo2j%2BX%2F8Xu02aH%2FvlNziJIi3JKq2HI0DQiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0JOh27jGDrQGSyaaKtwDWNth87F5%2FSWd9vtItav6mpD3YkDMaI%2FQGUQjYg3J0Oww6YhBIPNJor600%2B%2BDhRetkwLr2gv9ljmjdAcg7pNoaI4Yy5B5lFlipS7pSKpTdTrxh1MhIRwVQNDHaWK97JXozrLpYnNhe4ZBmqp3e0w8H2kh6UaCmnMcVp5H%2FVp6gSQ6uyieiUGmemISE9fI5GElu6nQHQ0e4eWlPTNk1zR3Hd0EYjsCf9z9Pn2LkO%2BiMKrlshfRWYfZ%2FYQCqxgPdQLoSDkBdiEd9QyBAy0yscpWXUrwqovmFLG6vFfDHoOxCMPUfm5Vroxg1C%2BgRvTQZVj3CRLyfiwEISEog8sW25%2FAoaxFDFJ6kiGOeWc4uwe9szW7S%2FZ6ZvUKf%2FW%2FUvLcdA1DVgB8rS8hQABmtMd8Cgnne1XxrMkaw6LA09QnpMUqWKfNIcjqEI63aWXX5ixQRLB7Boql81%2BNLFglTAurN%2FNeDdJxc%2BkMT22tgviER5w0gcwHxhJmrZfOnyoKOB80%2BVmOF5OoDVDU%2F6TiB47M9FKUJVfdUVMnLsZlNp3nqqygtQsniI3sLBn3Hqf1NrXT8aN0holjSzWBKpM1XlDlwDkydCYUtP19O0rhszIK8kLsepmRRDl0v5gkidtl0RUwnJ6OwAY6pgHfdAXzm3iIruek37Kd%2FH6tldhqmVw8k6h0nUL4D0MqjVyAA0zBA3Z3lv%2FRlqXhK6RNhiyGQz9BCkQgKlNASIYUTTs48mHEkiRd4Ae6mn5qv00xmlqw4Mb8YrO4HrcmrOUORkGau1UJxkkQNEDVogSo8BOjeq9QW61QX8yFrDSBpL%2BmxOTHVFUMWWKsoSNPOGsjlCm%2FitURyDjIFdr7W9xPEoRTMJQv&X-Amz-Signature=c7c39f09e27444c9ea69b273cd1785ebb2181620a6373299a8949ecef7d24c25&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEP3DQNO%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCb9aG0DX4f8iV9Wpj7n2agZFviBMfi08rUoUbEPuFk0QIhANLrzpK5diOmVl7N2AJplMDgDrWlMjKNw9pnuER3WQfcKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEeuFbFPSLwJLYBpAq3AP22kfz4hQVUwvtzFX4JveEdvpJ3Ur0CiYsA1wHZxjXLRvkW4xfeVZexTeV2yK1YpGdJ4QbLZb%2B4bemTUvr6f3MQTi1iAJ4nz9po7cncLAFHT5aTFhl1bEF4ilrSAHcY%2Fo9QQfY2Cec9AxCKZK0om9k0oHe3vDMyHQOLhulel74a2FYTyY81eaJjg8ej0e0xIGh7TUCeNZ9PTaWCFkizKgLOJA3nU%2B%2BK4OBNaTUcd78TFnERMh8jrD3cx3eZmV9WYACPXHMCpOFeMC%2Fe0304lcJGIFK4kItvnyqT%2F2B%2FYa4jfL74nxVRmmnaXRtAKhXhdDmQynMtqewsNfdVsOU%2BUGwfS2J6cNk9VcPTB3F1YpoeuhtPt4L%2FZSjYnuRbqsPE5zMPuPmvsQH4mAGLoSUo4ZLgjHZTJgggVXNqQNx9BhiM%2F61tfNX7LCC5VC1YXMqww2hfwvKUNQUbc%2FXYViClfecHRkRJgv29x0m%2FOF9d0V6dkU5D0bZQ8RfvQYLRF06FexBN0RXkayIQRnrfNeOD966VsvCSmEzK7qUfGdUHQJg04NlKGYmN%2BcPrglRgmTbStnxhc9Bxk5yH%2FL5CndEGAXdomOCPC%2F3QlJ57ckZZCGxdSb2gcLtJuVfd6yudDDLoI7ABjqkAY6MCgOawVAnBM1gDsNCWygEPwxVZglwjULU1e77DwIFDdMOKfMMrE6E0K2rH9GYSl9Z2HKl7TQTh1XVAVO2ugFt5zv4kVnnEn7YL%2F2zjeDm7Fm5LsWsvipMwEfYpvXZqtrrtWMbDs9CXVGfWcih7jNd%2BTlTp9Ekun3oBqI%2FVcXvV4IdISSUdgWFoz0AJ3NZpBfzgNYnDEB4UhwS%2B%2BZGZEIL4%2BMo&X-Amz-Signature=8c58c560ee2522655c62c84e9f55cac490e728c38ed7388bbe529ddfd0200d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJMI74T%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDx30QocRLGgxt69lEHPevAtFpYgsmflAoxWR%2BIaAppDQIhAMKmUttF54mMwdWJIHuvIQCr%2B9YlHEy9rI5Y3WFNts99KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWjLEHDo69px%2FiVwgq3APuuTfsHL4gN74PqxGF0hJWIC03rDJAQXaI8f%2F4KTGuYEExsNmuYApKE8%2FIdDDJ03wzIEyGDoHfSS%2FvKjiCe9XBedsUApLapMZ8Dn8teg%2FM%2FrtdCbG9SsfanrTOHtdG%2FcOp8MHMDoV85GtnctTNfe9xIHTj1tUjL5JcjY%2B5oVSGO6lfyWBmn3l5W%2Fkwshc3dOJxxSzmFysJ9xOxp3xQFVpmtB55cH8VM9VcU%2BnIrYjZvHb7uJte%2Ffd4vSpNhhWi829DKvs7YGdRTdcz7T9DUJTIsHNR6Kpoc4zP6REYTpZJ9FOxZF88aCOzVdXsEqbu%2BqooH9%2BSBnxYWRyST%2F1HbPEg2SxjHAX7YdwtV5R1ypN3AGvvC55Tax99fI6d4qW17qwSZcDdKHcrUpyNetCt6DoVwIbfsLQEjbW%2FVgnp3gfoUPw9wHL02w6VCkk7PBW97oKqGHAO%2BowhDCMNUNjOBYldyYEdiJwWiXOsh3hqBvncYFGQm7q%2Ficw9mGC4tu4SpreYQTvkZ2pnieFj4r%2F6Zi3E%2BK1Q14jFORGt19DxdcEnY%2FRehwvhbtUqU3ER7AvzJOBOUFHDSCpJYjbXJLMH87C56%2BBArmyo%2FEGSN5kAg684%2Fv6QMiK%2FONJTRKtkuDCYnI7ABjqkAU%2F9rOUsDbT9aoNZV0Z53Qm3W2gwyt9kof%2Fo81XqinRYiDpLMzZ0IKj4V0BCrKFf946tXTz6aEshbTYQz4YIAPZDOZOFjQcSmx4uHMoyTODsdkrCCq4Y%2BEGQpUwigvuvtJdlcz6w%2Biwy2n6PkeXM2pEybIYF4X%2FfDUzUVDm%2BvKJ%2B5lNkJ8wf4SMsTblPW3P3bYvD0%2BGPnfDA09YWcupjrS0nTaC5&X-Amz-Signature=a26aa42ff6d0cc057e28f46befcbacfa95272a4369c1b191d3a702c5c4f6d19d&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOI7UMZQ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T141039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCEEqC%2F0sj9sR%2FJn5TIwsbynZk7cVkpQGWAmf%2FiqSFZrQIhAJlJnnsPeeJ90jqghs1gZyDyWM%2F0YeHfy0lQQzABBa4EKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPtaRo23fH77HE2Fwq3AOjtjP8uVHr0qgRi%2FvHDwS%2BeIizU6Y4lObNuN5S4%2FUElZQhza9bq0kGvBeNjeLnTvX%2BQJPYs%2Bq0C6he0Cxdmje4h%2FsCsMD5Qj82R4ITyPJFmrx229Ps%2Be07lWGgdp%2FEE7uPwW3CVqXKoBzxOxeaQm4eM%2FE1tITfys3i4rc%2B6JwAf%2BI5wqusZoXX1UJOlKbHwB58sJdeFDpkM6ufSoc%2Btx7T4R%2F6Rtoc8TVN%2F615oqyo0TlQsc4pqNwI4zXf4ZvMwpAHIpfPNwc9Ks78MwL4Crk1iPSZvJuz6roGMB2P84y1TqjbY5uImLeQ3VwkfYEG8WMI3elJTsHH%2F8QsYYcl64xqZ9%2FQiuOTxhUgMelWkTtrsUVkKIKQgQG4PzHXCAOnI2fsqEED4z8LmWwud3ZmexMHfpcW8yWT0kpepJkBZVfDm0CB1gnienEUXVnu%2BTIPm2lE5Y1Ohls8q7lvXSAyg5on%2F8xNtEd5fltI0VcOGumAG2QfLpBuyMparcdKgeiRgQ6nTi8T6o7h6%2BXJNkvSIrUm9sAVAVXgKwBEHAnizIJkf0bUC50W60155oWjg03uAlJJaU7hT%2B6y9Cmv0mcswTukW8GEnEWmgdPJDTUKNxW%2Bxq5ZHSJ6nEbSqCz8sjDcpI7ABjqkAW6iiHSJXBUJLDr%2BM1ddnUGgvHUL6vBDF8A4FcpPdO83%2B48eyX6gRsmGIakZ1JW2ckWb%2BHLhAP0DeKuIiCWm796Fn%2BMShwXEGTBGRZnBxUFJNJkh2yvqXf4C1hlgj%2FhB15dR0G1eIyCtK4F9J84NSzQ9uYgHE8JMEAB96HAFTsJrjnGzhu6%2FReDvlrTEbwYmiXEXNNX3dzyTAsHEAm%2FjSKoFEGzh&X-Amz-Signature=2adaa7251094676788048ae3b4cec3bc0fd77746699b82347d6201ddbe87d257&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

