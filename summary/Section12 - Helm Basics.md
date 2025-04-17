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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSB5W2B%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDido9tcyLK47w%2FsMmHw%2BtuDE49%2BWCxjgrLYsyUFTEGYgIhAK%2FGOpG9ZeREdSkcTBe0YscdEZx4PLWiQhSC72ZAMFCmKv8DCF4QABoMNjM3NDIzMTgzODA1IgyZLGPa8nTEhaal3fYq3ANTzazugUq0JrqySv9B4AGlGhnqGcqp%2BY%2BhTkxycYPVvhpzVLKX4Tlmg25JSl1jXNyb449jQQ3wq9f2v3fjYKddTJmFXBNPg%2FFkP6sGgJ6oBIrKppg7pKta4RMuhooJ%2F1GI1zvyFZDB27S0xynenW0AMrQ8nRvJOougiAD1%2BrJNWx2MwJFVN2zl85aVjX0xkdFv9lu8Gg6YSLtc2fMn3asmDEnFJusihzsCnSLXQQuPMMQEY%2BkV93uG16yrk%2BstG4b0GHulPiMUJT1wYIy3QjZ3KwPvownC6cHkGSqxtlmxd%2FwreOLyGrNcJGIyrlwa2FzoBFHCzEn%2B2eR0gyGtzx3oVAU1LYl4qFPjTRGhvqpJu9rz%2F9I2nzOqWcqeuBQdXIGHUEgAQA9yxnwClnBokkdJLCh%2FWDWex81m4Tc0NXnzODvPeRi7N9qv%2Fm9R%2FDxqunm2uXDH%2BE0vuKx%2B60rr0dZQ5iq9ApF%2FuREjVEvNOczWHR%2BQY%2BHYAWbVWHXuOQr6glyKmOI9jmNemoOesCxumzMsrh5%2ByQp5UDHMghz6SnQDiDuI3OcUFP05iwODXDDG8qKc5EyUchZ4xAl6p3CDRU8sIhr0nyedPGc1%2FVGM3BSkRyjujFzz6KIEUE8f7jDf%2FIPABjqkAR07GCh0qZ8CTO%2BIEyPUC3QV%2F2B9rai6ESZl19Hkulal4o7IfmzhSFPzsc8A5rY%2Bf6M7k3Dpd317X7jLpPkxof5Ovu03uCbR%2BEwXSipyUX5UggcrL0fbaWJaT95Jz%2FYvix6UV2FJ2y5CBcYl%2Bz%2FND7w30AFhWY2HquB3Nj5RtczHL2rGwbCjXstsI7TnZnJWnd7vvK%2F11SBTJUQ25gaIuyesLfMY&X-Amz-Signature=cb233969ff7ca4398b3c216b61e0b8b8a5828b5bd98e98369790ff880eff53c6&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XRQPPD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeqKbhIFA9oHNiT9Dw4W6k2bW9SoGRZRyGVJbUvKiHKAiAvSAAofTpE8i4dRbI11ZiB9wlbMf9ILlEVsyVijRMtuir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJl1VmwvSbmsKYiUMKtwDwFZbRPXt%2FjHuCLft5s66UZdwW36z6kAdp1VOJrWS2qf6WC%2BEZHiV5Z9OIu10LtZVYjsBH9baIRl5Q7Mj3esayzp40bX3dVj6AGhGD43TMPmKQLEcGYfrbf0uVBHhdd1ct511ySr2rFmdxXbe1ri%2FxTL7WF5pcXcGmspQnOx57h%2FWbhZSFC9LcXabF2qF7F2L6fdR%2FJVILjT8JjBr%2Bt6VEqV3XsB2lNF39OmTHVJhgx4NIdMq5RWxoVSjCQU4bYkYDQsycuBHWikwWiSujBt4hC1BNttza5j4hCHx6h7UqXhTuHIJSOYtsTzoQrJLoTaIN3oF6gmvBJYAhtqvLs%2BTFPyZJ08sIGc5j21g5kP39dJQz%2BjX3FDzV4Na%2BsCp7YKEHoU4duUXNHbNVq1CoZkpFfXffTfldVv2NCtiXWNWRZjc5fUfJFW%2FQAYNTMYevZTsKfp6lJ53yoAhZHxAZIKsHWODTiaIk3WSLMZ8%2FDWJw5XANc73408Jd25lcAG2%2Fb3DWLjD3f8ml%2F5WIWs2OEBbioNyuV4fH7SzTHTm5qq0tRS0j%2FJoIGJ6wLNNjXSkYISWQ3nwUZh8rdm3xvV0QDBCPA0m0fBXJFV53rf5HekQf37fINrBpNE5RsMCyocwzZaEwAY6pgFccKiIfIBQDkaaM5ZXasSWu1paJxBUvCKiqvIDePiclulcxQ3lrZSy8A4PqRREi8kLy%2F3fjH%2BhTELAj%2FfX%2FG32wSPD5mbfKmcg2FyC2WFE19i%2FRgzKWfhalOXwowKfOA%2BbI5GYYeOmc60lD51Rxrdhp85iAGRct%2Fh0WDa8Da1IySrZYddU07xFinl%2FmufUfVvGASHiC0Lfeeyh29J3Ju7JnqiK3lLh&X-Amz-Signature=8a806a88d99b47bbfcdbd8a6100134d2947d794e0d9606308d66495d5db1561e&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULPLPQN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHxuG1a0t%2F%2FKFTP6QEbcffjvWohQiVy%2F1C%2FWzoqFRrqcCIQC8THKPlxo%2FJNqhlaAB2BbUgFDyFeeLIyUpCHWGqxvAair%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMJhNFVGrdHRMr06XYKtwD3DHyrfUGAQNK%2B4ytlj5ZC5kaN80YJ%2B8HL%2FETzq07vL5gBng2BiD%2F%2FpeOFQ5dHjiKTk9d%2FYz6AeJ%2Bdpc819TBiNrf5OLJwPfyJUcvl%2FORodnMtPJ%2Bc0RnorVrh0Yg5a3Xgvr%2B%2BVK3ayntDUXjYXocuROV3IaAYzY3fCrXyH%2FJRgR2oQHtuXJvS6DIUM324UwD%2FoJPzJyb3lRFyvHyixMJsUQZUxQq4wLDF7TYWE10%2BrQdhjsnORkqp%2BEIVWaIDbMugTb%2FHdK7Auty0c6qSxCyZhCbwZliNZryJI0YsQnStyyjFXMGuSKhUa%2Bo0IqjEQIGrrK9R%2F8%2BEPQ2D%2BRTYR4QIEuYbkz9iYqE4xitAUK171M6of1qPSGBgO7DAXcTkS9GzPXHMS1974HXRNdHehjgzhogoi03O%2FempjyQLm8QY81juvLA708rK%2BoHYi3DBpx57XxCR1DQKe54hglt%2BGzmPbJssb37YnqjS2r1%2F0CsPxObT45yy8L3qLN%2BUTLVA3xwHKtdl4i3GTL1QWgZUcGgi%2FDLe1D2pB53PBcUmOt2S%2BqD0kQGljGo%2BLctXrMyoGSCWxt4PGGhRDS7COm8WTcbTTuCPkMgOmPDbA%2Fpg%2Bx04fL2AV8kor%2FbQxH2BVAw6fyDwAY6pgHWLH2ASb7vGbjkt5pVJhoZADc3QJ81dM0AUyx%2FaHdb2KCn7%2FTXg7h4TdEq2G2Ta2%2BCpknxuaZT8HEaqC95LTjye2esuXCzOg4yIMAetIi32B0fAyTVrTDV%2F7f7rxAtfNiFkqiD%2FC5S0rngRxVHJDPHuXM3Dhyojm5kGMb%2F55IFJk3PiJFqKAndU6ltONn3FkuAKjKv7e3ef1SwFhpdNnXaomTiCM35&X-Amz-Signature=2ca1909b568375edddbe348bf97111db9a544d6ca52ff5a2fb745c127c0b3fae&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNNV4KM3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfVXilnreYpnZjZA3Mwwtv73c26SMm8DeHcfINZd6plwIhAJIddu2sI2pXLDqTNjAPNeXIZc%2FNIkcn%2Flm15UQuFFZLKv8DCF8QABoMNjM3NDIzMTgzODA1IgydX%2Fq1cNNrWkG1M%2Boq3AOzlyi2mI5EJvi9n1UM0YFK24eGpH6W4wbp6Xu4cRdBQ6ATH7k3PDEvDa2ODTnnsSfRiN%2BX%2Biy5Iiq58ka3oDqzmGrlaMBozH2IgXjwMgx50W6%2BmNq%2FzCsmq4nkcJfnGPncKNUWRTV6w48KQA50YZuU5%2F3svi9RUQb40Mar%2Fam%2F59h2EFJnk4RqYF9uLLwTLB%2BvId8HYU3KpPxjSlkwluWGcKvwE5vgQhRWFNn3i6G1ojNAkalxGtO7FFi88kBBKAKe6o6%2Bk1tQx7KulXwoekQb4czkS0Sx0F7EQM7%2BiSmxRZi5j2q0UTc9csBBni4pk91tuGAel4iwb62uKowWOAsDHaV51%2BdLoDqu3tq0XXB6cxwE0imsJFSZQ4ppEzSTlRd45vPLidBzlFRYjajFggv8C6krXkTjcsgPooNjdFngHlOYtEP1mxNWkCSK6xdw7VwW%2FgDHinnqRnxqP9VgzC04%2BvQHfFbQAptj2zkWZEr6gwnd%2BWXUUjb325%2FRlQLbcZmKJQPwVat3wtB8jgkV%2FRZzn6GikjBA6htR9Dzyl6vplF5mQBnB%2FEVqamOYAPFy2%2BArVcfp481sjU51m17EnmfEHOG61P7d86Gt2AVd%2FrVvBwLOc9ZYfn80Be87QTDtloTABjqkAZAwPdkzBOJGV6qJPUUUCoBwHxTsFTKlp0IgAV8NypWZ%2FtqfgzE0LzSwoxUHRDCc%2BzlRAJQdNQN6kqLP7aTzUDM37N5cUDYzaK3pBbD5xpaeAdFZvmtSktBTlq99wILXBAK5q5Sr9gpkyBkEYG5LwTQDAqtG0gdxLhNl71pqaeYa37eVc3s5rCxCBIu0LuvR92CHEHyve49ikRISH6ZWQvzIYswc&X-Amz-Signature=ac5cacb16089ea9ca303e42f3cea2822395848f1820fd7585c038bd0144ececf&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG4RP5D2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYvfrhJpRL3sXX8YQ5AxzoDK%2B4V4O4oz%2Fj3u180BXPbAIhAJjyNS%2F%2Fuqzo0zG6BAwU%2F8SdgJ8C1wR98izuvYd76zWyKv8DCF8QABoMNjM3NDIzMTgzODA1IgyuOOvr33zAOytHLM8q3AOXGw7Oq%2BIijsO2Z2fda330rI5GMAZYFwDRCDuxKj5SA4imlFUju2%2FQCp1HVEwTuBFDg5CBajPvU0t49jcGk3GEsFPWNVMES3CiKcMzrz10gGbrkXCbML6lCvx7fSHVJ94waqJeFUebYis9jGLDNb4PK0dTJwXEP0461Bbmb%2BEkrhunU1G8gFAtDYsEhaWY35ljJfSNNxyisNTWsP4T24IwKRhWKN2rDpd90W%2Bd2RUaid1SI6BESEFx5YEzudKJQKSC4cqVZKONtfUHHfZYXt%2B2gCt3KWQF3TRl2eaKhUr8qUCAtzbRRH3vh87qnmtPiNdmVp4j32XxSgg2aoesV6E1h%2BbIHbMCukC4RzVex42exjj2Pw8DSn0QcedDQk9xYhpepJw0CsG58InbqOQiR6omJe95hCswlJO1B%2F2nGcrwVT32jcxV3Mzut4d721CIopzKwhm%2FZ1qgIm9WAlHEznERQ9R9HSQLii182%2BWS0GX0ztTa1CvjiP2o33nsW8ndYOxjWZr1G88EKpd0EQjO0z4uVj0d31vPS3oV1sXJ%2BeY%2FemkMHKLyV6mcm3eT%2BHxFFpQGQjQ4Z8Z5fB%2B%2FhS7CrvYGmWqzVw%2FEMgmTBegYncEqXiWNgSda7HUjpFh9wzDVloTABjqkAcymng9MP%2BUVK4WHC3WFbW0vRi9GjnMxJWS8h20ptDP%2B4GA%2BU2C0f6OT6aa2oHnAY6g6SbtYPzH%2BMGR%2Faw2uuhpEQfywJ9batrPuI684%2BawNxCaPt9AGvChoXuR0IYz2fIca3QV4aVmN2PguqhMh1BwVy1Mg9%2FheprARAakgUMIUKYAgAewVNYvCo8wsBLD%2BMdgy9hM6nLE3h9ViWqnu9iuj3uTT&X-Amz-Signature=66629076d299bc82eacccbd8da0fcb3b3228c0dc01c982400c4ce6eea09c55ac&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273TFHWK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz7ZVh7JSkXbM1ajlRhG2JdXkLcaED3fEU2sjBPmngjAIgfTJFWtNh3LItFkKFoICxtxUFURyetWFH98xEytUsVGgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDE2Ea2ERfrIUTx22iircAzfMJuqJuto9pxlqw2%2BaNPfOzEgk5xcXJzsLZGYhk3onpZJ1k00pBrKc5yb9PvGgKQUNHWfCPVj2tSDFcismMKGt4XQrmfqGE49hfKradWAEG6wI%2FA9hihUJnZCdJmYeynQxvRwcioYdEQfOuG95ym0KCXc4K4iuz9GujkIEQt90imXuyTPiUTnUVpOzb3ZQl2V9ffey1cq5%2B9c9f7Fn5XL%2BWcFZkUWqiuQ%2B6T5lqqTPaWMW6M%2BHxXWo9drWN3Wr64zXdiDERWa4B5ZeuLYUnOvobbThfBO7VKTfMDraIwAlsPHXyG5E5WNR2Wo56viJr5X0CA9bCk2N4EUSdDzh2s3%2FDLCDRh4WyA8RwAYKI7clLeaJkJLn2xKrMMnqqGtmwAaG13kQBxOhBj9yakFn%2F%2Blm%2BJJ1wElyYJnsQjHtjtMcaJqvAG7BmY2LrrS47iEZ2jgpg%2FMqjSqcyRQgGUmF5fK8jx%2BWQx%2FtmN2ahiAoKMjOpi3%2FgYuSvp99a2%2FjOzC%2FJDvqOl0VXvdA%2FL2z1jTXUrhHLL8RxPZNoqXKNB4GS%2Byw3VGMbRyy1cKQDKcnkPbeUzn%2BFvoYgOXhwQXQ9l7BchOgJolC7fzKWefWrh%2FMXNeb9YaiF6IgS0DWg8MkMJOXhMAGOqUBjsmVf8%2BBSIo5P37TEglsGr25X1ThuurGHGDazPz3pABh9YdlwUXtDvOshiF5dWFm3Dg6icB7WeTXyGBUhFdvQvlu3Rl0AdYKc7Gd3lM%2FmlQvkhnGZ3OxkYGuYsjsy7rWZgy5bptg98LZmRE7y9nNN4ezd9pE2U0AUJ1vpIlzo8i5tVkJ9fYF3WbyLdRYcOJJHsigo%2FRtsbg4abV04s%2F8evwt59on&X-Amz-Signature=2ea829c80c05ef0c36fdb1554c42a271d8ef676ad83197c590e32e5e2d6b50bc&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6BUBA4W%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcl1IkquUFRUEfCa66JuTsEMEpeBeqWuqw%2BcKgOaIpOAiByxEtuI12%2FVxAAha4TyiGU1N%2B5jTdaiY6ixTqzUGZY9yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMyQnIBx3M04YBo5D6KtwD0za6rN3v2Rz6dIMERYThWBH9nwBNYYSzpv7T9ehQBKpF1Q5bfPQPW3pF9iEOpgGnERqZcV0GLkvdpcl24468QyZAajvOhPSykrV8R3m8KST272zgNPIRoEXUshONG68k%2Fwe8StO2PNVfgy91Vb6ZXuJL3%2BAVF5tnQGFtjnff%2BKD59k2d%2FYQ5azfQxN3oy%2F%2By84DDN2QqR6e08RF0DM3x4395RXDWxhJHRtttbZL3ngaixyh4zXHoodtT6PapPHZt64n2K6Z03mwB1w0oz4roiuFjwzZL%2B8JpKpFhBwJtXr4Ul1xkErULvVvaG5kNGpouJdC%2FIkxbpHcCs9fZvEwhRJGBAvNDd5XYJ2We8FlMUAqeL36HEt%2Bo2lmH0Nj9V%2FSo%2F2pYI1RlGhZFNSBn7P%2Fmv6vNf0xFxEFjVXLIzflx3DSwaXLPan220%2Fd9zfPMj4IxLY0ZqYnEQZamG7J9v3%2FV9DmaomOlE9L%2B3KWUtOhta6FvcbWCJv3pNZyekwSmW9E2DOXXrZEJVOJIfKi4MFFdT4BAlTYWOBMg4NUot2658lK3ptHcSpZaO8EJXajXEJmSPeC8OPYLR%2FeAlH8LAF0CuoN0F7m5fZVqzcSRW7Jn8CO6mkUgVWUtr5h9Cr4wrZaEwAY6pgEmM1%2B0TP%2B0henrEDpRG0HTgTM%2FNIDq9qr2I2TRJkSeO7%2Fvqfg6xXrnyS0ulDjWQ9OvygZn19SfQjX4KhOIK%2BqeQiIXW5TRQ76JugU440VXlFoRy8ozw2YPf1hEXp5tDhTLGJhCIdbAac66I2SNmnIWdjbNcFV9mSCNTHIiylMQ9rkD6MpITCwEzx%2BzJKCeO566Cye3ISmPziI0pTjEsR2CeiFqquGP&X-Amz-Signature=a10419f21770c6687e4f3a0c347ba30a0d81938c8ff5fa5cd991b9ccec62aa11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHRBYIV%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQkR%2FKqvlEejXqK8tzJKq26boeQ9wpLaCdW6VruegStAIga7Z6K9N1hBJrxeCVO%2BaVijvq2WYyZwgHIPFIUTYreRwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIDdncFeWdEaTr3%2BjyrcAyQEx0FKcwIa92BTX0PcO%2FQlKS9hWCS7Gz8QoPPpi5Lkd%2FrwzAIr8Zdq25SbHlPA8BWa1MGahiwNKznLCjcTSj5qvqEMXT9B1rACnJ0hlvIM6ExxC8FMTr7JyOWemUOuIQW5mJXfQMJj%2B1fpAN45mXDQCpsliW9AWsczNGLrjx44AEB1FKJB%2FBELb2ewui1ctEm9HIIbusah8BnaltOaHaamO%2FKDUUm8BZoxvivXt33bPNsXQxft4XCrWS2zCeUC2ZZWqI4Mv6mo0C7gKGodcBIvgto6F6KPRcAVHcYmYcsJHTvQjsNhSCnak0qUogE9%2FpKPgpyknqML45o0hz2EpYHg8il44Dxtw1Aj4QKFjVTN5%2B0hzTx5hgbaQIwiAUeVbFLflNiZW5aa4AqC5mdKDS5W4zeZwnaF52ClQeCKybGyKXCUJLPc1SBpqB3QLwH4kYH4183JOiNtOKLlphLelGfsSGZ3g5jteZW3ewB4i8a0Jp6LWcJAJO5vo24%2BtltAHiSGRWZzLNxpNST1AYtZIX7VUOUwbN2kXlzhPpBm0Sokk83DtA4t20m6oGedN2b84LKYSZxS1j3DFFygxUwBVpNmbsgF1b6pOd435pycipmKYXb9y1pIE5%2F%2BJAXMMN6WhMAGOqUBPTGqfSt%2Bb653Z0NVXFgMbhrrpsHc0Ws%2FXa3GGFbRtUZrqVVIEOkKWt88ZvITDRK7iujGYmkEHB4ev32HsbVL4sZilWt2ZGmIeHXOYhcUCbZx79%2B8B%2BeQfdIaa6YkjrInFvOBxK1QXNQFP%2B5trWgw9bIScn20MzMRw2V0tF%2B3PgjReL%2B3THReRZd6ZWMvS%2F9AxpQViNDYaEHtDDOlb%2BKZ%2BP9coeIB&X-Amz-Signature=a58ff74959e14af5dc2dbdd8708f3f07b7da1d81abdd2f71d24002234b0efe0b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH3CSFNK%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCC1KVKuELTHt9yvvxVghZY1gmM6khaESooVgQ5vVLDLwIhAJme19XIv5us%2BXBuNUqhuxWB6z6dxHjslNuSP%2FArEbZRKv8DCF8QABoMNjM3NDIzMTgzODA1Igyav4bf1mDS6DVOSYwq3AN%2FCEr%2FVnBVqOev3BrzqdBfpQgPCAPtqEVb2o%2FWR7PnP4vELkcGQKVqT%2BGSwnv7ZAgJQnPJl28iAIOm93XkhrkJcBs%2BJLmqyK%2BJr%2FAaePBDQ59r6X%2BPNJf%2FrIYRt5q%2FjFYERwU3qHf6t3mhVVEQt2MgEwnDsJZyjYZH%2B9%2BtPdxfkRVDDPZ1V5huPwHs9PSNe5YauabkmcgT2p%2FrcRaj4OKLmL0AB7Mp7rCzTGZ90aXFAPpA2LEQ3kS46yp84oWiIpQ0fnfWZieikGx0bY0TcRJ1IzKiwdzOPHEId7Z8XIAKcIdb1PNEYxWJmu5Z9hijalWyzmPJmArISSNJg437LTi8hMmlpHZw8qakT6DqXQ7k7uSUunlAY5G2u9x3HDJO34wCEpQ24vfUOSmYe7eolAzQ8W1TfC4XRZiqEXXkvk2BjFZK8yvNa5Nb%2BFh47CLFlftRWd7CKXtUtpvsAUdaYfqnUwUTuvRxlvf8nRPTvpoBUCK%2FhZ7ta86Cp6Jqw20i0w%2B0yhmMj5GURisI5vonlCigqkHbHxzTygdMbtUoaAdpREDo3krz7FxNi5WB4YDUieat%2B22ufUXwrawDHTtP7WyXTjOTCQpERJr8KQM2z%2Bkhl%2BkzkXoonRCPqwnAzzDNloTABjqkAfsd6bN%2BR18ii2UgytFjlaxfFd7XlF1T9T4omdm8Ys%2FhsbxQwWA0bXeo9nz4xKErNKyC1ECNcdsj0OEMaEjNAP4euuRuxXN%2BLaPKQEDRWNoyFqJYQrNLohFbNA83uKga6ZKpYBPrf3O5c6MCT%2Fl1RvQ0IUayvCXxHof84d1DWhhvQNp3bsUyJet9JtfJmDPnSsWAMLAKvcQHxwWeHIdGH2%2BSlJm%2B&X-Amz-Signature=f80e1de41dfc4e6e8db8d7169fac6612081a988fca1efc4c5395ecf30d31c591&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

