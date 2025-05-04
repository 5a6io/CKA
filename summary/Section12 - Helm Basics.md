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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVT7SQZ2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDleX%2BW7aaiTWLhxq%2BXhXJ%2FrDEIhPnrYv2lz9m2X65gJAIhAIEuZpC5mdYyRLeiHHRFxIqw5W5jNcGbyE57BH3L9%2F%2BuKv8DCBYQABoMNjM3NDIzMTgzODA1IgzAVpNkU%2FEot%2BMHZl0q3APM7MrpEcM97ZBfv8%2Bo3HTnfyJA9tUHvz%2BZYrR5JjNHdG4aML5YfAnoZNSF57B%2Be5ej%2Fjdpuk92QD%2FYr9ms0MKuN%2FeIgQxD2gGUt1mvlWL9WjD6XXcYhGAGm6hUePRghSDd0ogKpp1%2BZsmNDIdG51Pd%2BpSmR5BosUuUK%2FKxZHnXkhRar456sYsumC%2Fa5zuN9posDLqiFQY6bKrImkufE6PK201IUeFLYo2olupc7f5oOsgZdwMNgNiaH%2Fgebu6AFcjillugbG36XNw6dnXKp5PhtRgzrPPJcsTWZ2eZVHRZx2PDViYs%2FIDH0910LxeskKgXAsOtIxQ0z2UVjn06p5%2FuTZkFdXZRrCfUkkT3Mdxr4Psdg4HFPOw4Uj74HOXxGGSaXUnZgoQup%2FByZK76K0hjJqJU2O8x2W7KO0zAhFkwqQX8I7qb%2BzEjUyaoT4vuZL2YDre%2BOJTA7iglPV84YiEgiewqRCoJKN1m99bNS5fHmHaNZn625mNBhEhTWRvFI9bwA6vuBXr%2B1DmVdWXNWt8tDJ1BEeJBvXYmzLgJhqEwwXCSpSKc8ndUKbpIitq%2FoHC9mjuOonCBTukSaNiy3Eb0P4B7gTMjFXVUDYdIBb32BQp%2FB%2B84lMzZ04cSQzD%2Fwd3ABjqkAZGjyv01zhH%2FfJAbW2APAOb6kRGc%2FK8kKX0rDpQfVNS0YpRBkF1A9X%2FjxR0DdVgQ%2Byz4RMbruDnXkDYOL12gUv4HeUVBkOMj2U05MZo2YEIhr%2FT4mGREwUie5Rqsr3VpjavEQDMLEIbt7rXXInNNESVwmXaG8h2N0YzYxT2FBrYbaxznwPNobdBA1%2BKXG7NrdOQKdaFiVFkdCjMi4nvWSpQIMfFh&X-Amz-Signature=da4ca1e4db69f9341a237060c503a96d52cd61ee13d6e72822c8657e23d0b03e&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOTJWAJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCSVEX7W2AXbSTej4xR0BpZTe6nO19vf4%2BEX4QX3DcFZAIgJBh%2BV7DEb5RGBQWd8uakok5ghj7zyaZOWt7i0VDTv5Uq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBAKOafmdL3Ncq6iMCrcA6KTBKuJP0cZs6RCAufi2WKoSKHUrKmCOYzpNKS%2Bq1WLdTXfMhFsAfjgBzGyylzcSQpJ1QvglXMip0awSALcNa8zjdosFLqUBVvdOjGmeGkM45y9jrqH%2BBSQekL4ksiI5SHPb%2BdWVraURvLcCbe2lDjaiC4NwDq9iU55EQk3BgkobH7KMTe0R6ojOdrorFIza0QnSyWyyPiblugBG3lajWDQPmTSBxqrAkFcQrtz0FLZGgOmtr1prI%2BZzIByrAVakTcnz7k92k91dSNwEcgURl5A6MWo7iSZOaOxFzBwQ6tzKrpHSgZayG84oL9bvUqWnZ5sP98WSbIlIoD2anBKKOGDAo3bVDMzR61GQ1rV7v3AdJVkC1%2BrJB6LhPM%2BjDYrTMzAh3IdtNt6i1fgmzhsAlGHZSYJ3KbnXT8135w4LqQicSyQnbtNcE0ilTih2cABI1ZDwFO9XVl1IHbs%2B%2BDFkDL86dLnc%2B79Npbg8rVzqLXLM1FGCa4rl%2FAP8sq6r8te8rqJk%2FsQGTz5pixExZRObIv0Bb0t5xk2jVs0nJy%2FcaqdP5YVKXCi3f8B7t4OaxrxTKE1QQ7wr6fYNe9k6NupW5g4vVwxs4aYHYm9KieuCwFKEAC5SyjBNGudDxo%2FMMHK3MAGOqUBkliCPfwdxtjoknpgRjwWHYJE8y8YhW2lzSIFd%2FADahg7XjTR%2FoltY2YgFlyyJ6xqMTTxBmgfk9kXqEeMpvsrzOHG6MROn9e1TO6lA%2F5ZP%2B7kO3lUf0tXNHcY4sJIiplmeI7RxSK9jzq63Rru2xytlQln0Jvmu3dbavKdk0gpWACvvHg79w3i4OjlrXrpkF3Y7ZqtjGxrCGhWbp4l%2BmloyR3CIe2%2F&X-Amz-Signature=0ec97ffed325ee3b8506f313303eaf1ab195ba0c7aec78f1d1e3a62ffea8a942&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFMLNJS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDR2GFsb%2F7VlUxRmPyV8NLW3WzB2lGYJ%2Bjd9njff513IAiBxh3dDWCsjc6qRWwfx0Xg%2BX8HJ97faKlHZjHYfDFeE%2BCr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM41kHfTgeH7%2FYkC05KtwDpgPxl5JaI0cbJMo6jKvphEDO%2FVjUJZByE2hnrvFywrMl1iJNRYwNVY%2F0Xs7STJeco74v3UnkFfQI8MSIdGe7ru8gUPO3PnQOEBEhkP5y7UoC5jpTZFNB4IQZ3yARaYHRHTvbwUTYuzhJjXGgdYw7k5raFhC6d1iVcJlmIg0TzdW03C%2BWzYb2XwL1hjuYbLvvhTq9c4vHtSuIgQiQrLls7cb4Q%2FtxS8Fkuc1p0TZixCUkLY2y8LLfeDo08Umh1rxK8D9iaL%2Fu%2Fw%2BHHUmdkgpSSlrcjEvBJD4f7rPoWym%2Bvkl5LMwJiJmZY7J1WGJSm4wOWw2rcaALqc6x852V%2B54fJo9DV1FD0vEYEEAumfY14VASOIZQ7hnNvttMZHBJbhrsvcSTdv6adCL81mUl7wMjLceTayKGPh7wyvoIi1bm0N3uTj6vj1W5AbnKaFakyImyByInJzbnDDoa%2Bt2QbcypXkxQOWcPdNw4CKXK0FxUKd6MdNmynq8jL%2BpNgZGssR74f17kpwStOv5cI4weH%2BlsBsq1tbrbQb6Ebvl0DfC1MK1P9TFyYak2%2Fz4Vr25Oi7zyiwXJDmO5jKWHHCgklHHkzAFRulfU0uFJY30e9qpALORUWok1Z%2FB1QzuShcUwyo%2FdwAY6pgGIUjFNRsifV9XBSyHSRPbujglfxuJjFT1LvLCBig%2F0FWRTZu0DTx%2FNxiyk%2BHIwH%2BzUvRUpcVbri1Y03xiQrchTzLdU49umK7pzn1tvRnZt5jnIVXhiu1KkPzX6yXr3qT5%2BfCzBfEC7ZqFEZJn%2Fo7rbKHjyqle7tIIbqWU%2FOuriAbtNUwf%2FNrHChVP%2B3P%2Bz8BA8NR21I1EI3Q1KJEy6ZH%2FpKsDfuKCl&X-Amz-Signature=fcc2ac97a938c0b235ebffbb9e4313fd76c0c681b61f561e92ace1baa9d11cf7&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EKUU3NJ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCHI%2FneejetYos%2Bedwj%2BU%2F30pcS7AgRGB77sQ1zCG9iowIhAPOBUmVO2HFd1I3yBas0konvo7yKuHoh2N%2BwfF6VjofVKv8DCBQQABoMNjM3NDIzMTgzODA1Igyo9brRKYnd19QhzRIq3AODI%2FBSUTbUnfezpMMEcbU%2Bh5Gkv%2BHq7O%2BkKOjQloCNXfliHhVKX042%2F2oOneIVFI97V4TKyg%2FjLkdIzgeHZIOPtv97Q%2Fx03JBj7GtJJqoewtgH1rbWS%2BQzyqg0aKBNSRn%2Bom1JYu%2BY%2BxR1HjQar8HVilsVgEIqmf%2F%2FV2jiV4NbKochA8qsEUsIVjqTYTfsU6Pjeq1%2FLIDyoBM4J84VgMO%2BSShw4cz6Z1p7VyGovp%2BjZnt69XQuVgPvr8A0Lj09MTKLPrqQIqDa2Y%2F0xJlwHsYvVIPQlquz6bfQrzrd6WYYjbRUwumhjvqIdeH6LymxD1sL3y0IVR1wN4%2FLG%2FWeGSVRgXKekrKZ19kRO1DnUR7khzyA%2BMQeItBRewpS7gjDaVaQw%2BHm2%2FLK9MICDu9eI73A%2FKkJFVNQeK%2FQTqb%2FyOxKF0rR0YdXmar1ITsIHn5UC1ciOLzia6m1HItfd15HbFP4%2BxQGB0m6OqPd%2BhHZRRd5HCiCODumtnLopaoC1s%2B%2FG8c8ABA5e13jtt2P6zZxvfz5umcRPIQTtxHiXRTGCmp16mre7mhUuu73d7gHZdkOkHzdQl7rTubktmrXQCUtS9x2ZQXM6L9nntHGU6GIAgu2v3kKCPn6rWfJMmr0kzCHhN3ABjqkAZ6vfkiBRxqTWaXYpJzTF3CGFbvKQldha%2FIh8ouop7UyYUkDF%2BZrp%2BRlZ63CVK0o%2B4D9Uh8ks03Od3BPV5VYoh9QSDVCkpzQXz1TCyI83dhygN6tQUfpL6f24OR0peRWZlU2YMWVWlpD84S4Z1tMBzRLG5lH%2Bqp1DvojejRsgb%2BWNFWl3EXCEM4kFoCpRbdCLf0tuTrc1vkJS6P1NKTVbwlzFBBG&X-Amz-Signature=21b47ddcad61d08fd39c4a1b7fc6691e3071021b69e98a8909bdf3ac22df331a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLCDZLWM%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFvULidwIa4gzuTFCuSZv5xCpi7V0jWNhHhoWeXdyVy4AiBKgOt3om5A7zzR1VgAizVUD%2B1IoXBJFoiet6tvraC%2Fiir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM3w018iNGniU5EBMAKtwD22Q%2FZEeQdZjeBf8cBkHiOpKURxq4FjkqBpF8VR6%2Bq6yYYMcWJQR4UAo825T36t952YyU5kf5gyg4je9pnU70GqPb5gVRlv4GHvdsrMa2LJwfuMlwjUlguhm2GGYk1W1P%2ByAYdlif7BwTDC1CZxpFN0USfxZqNrd%2BoCivvyJvSmj2G5gT6n12ogtgpHh6FaeEpsL1pjYNtVd%2FNECgJK%2BlI5vZzJulxvljxODxGol0AMrpXtRFzAMfRqOStcFyOmrI606681BzXWV5PYiR2FynSdMo119gIEGRr9EIPsltsXXSIrs64n0vGjtZxq59rQ7sn5kOpkcV1ZtDFG6zXhDRCamX4MRu6cqip1ZE2Z%2FZBQWoyJ433f%2BjLCzQnBl5OSOkaRj88JDfrQfTe5lqlYscNVUgF%2F%2BPUx2k7gpSh%2FOQpTjLGS1jqHTgd3ZOpzmns0IDNS4K%2FEWqfyn%2FtlL39%2FAOV9h3jerNnlSfQotZoLAnq%2FB9XakmKhHguYCQ0NSm9%2FopyIfsAHAbwtBqp3%2BA3uAx2jso2pOsohXtg3qT%2F9XHOQ%2BhHlnmd4BPOYJ13OD%2BWVkSK8%2FuHXe%2FldbghSoW9UoAbiR436vbyAsqViShbSj1r60B%2Fb%2BIg98HDfbvVs4wv5HdwAY6pgENZSrQ7gXVi%2BtqW7HCowDmbvO60ohfudrw2q2XOiU%2Fh6eHhQ1QVKhkOH1irYNOl%2F82GLkKKOBjmBMms3RAJEZ4gLJlKep7NZoimZLpA27m3NSXRTBAfw%2Fzb1Qr1A6a2HjQvmqg8VaBW6tLSlqNGDaRTh0yDFCaQQ1baUQuJKKB5lqphk2DReBLTJWiMOb5%2BWchcQeIVBnFpBCNZErQ7aberCRCpZ6E&X-Amz-Signature=43d89678aa7518e5ff33633e16f881cd3994727bd60965c45346d924ec8d5097&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSXPERUD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDeUZOFkfaEXcGcPXviXbAylppMCxRoyDiZiTDMp%2Fij%2BQIhANe%2B9aJDoNttZhcmzEMYy%2BAQKtGl9VZwbFtXzVtBPtrEKv8DCBQQABoMNjM3NDIzMTgzODA1IgyGZe7Hp7BzPaAcp%2Foq3APlrNpIQmfkq3u5yegAWjOHAjkm1NHnH7GiTbsZNXRU9ej%2BZImS7J055q0hdBt2RAmBj4Yz%2BJ9ju773tOqQNbDMpx8DIjv%2B9fYABpkBCUgpkNTFnu%2BzSGBeLow93%2B2M1nz8VaBCsc0DkohUyN%2FFAkcAWZRjoAEaMUM7moXG7M2Zr%2Fa9fD9UxOJcpxubbSfP%2BTRnhOG2evy0rGVScYpP7tgEBw5qPx2FW4gRMC2PSLNFfhHJ0PGZZFLH3WjoXng8UpoiJZ6DH4UbnPDJPkjuquzyx%2BGrxbUhQJHsvBDbhvWWdME7fqzN1OyXiLU2YQYDYZjc0X5ZDs%2F6D4OLv3feooEUqNVyUwAjHAV0b%2FpCBf4Zkn%2FvHgelfAb11wN6dZxx6u7%2BXRQ79Xi%2FWrp14lWb848pcIgRxQxh24y51fomdwcu8KCn1L1BjJIJj3Drh8cfIr9ehv6BMndcqCXvkM2k%2FkWZnRilhhcG89fgGS1Vmc3feurp90u4o2cbW17xI3NwFLN7aDUFDqf0kUYBxzLy0OPG%2FVDxIn2CSH7lgkZ2PUO3corUT2RClAgP7V%2BzklslceQyNj2DwAq8jgGt5FiR7%2BciMo%2BRhsW53I%2FMqWmTYA2Qxalr2t7IbHjb0TUA3jCBgt3ABjqkARSUi5EwWmxITpG2o9a1jluRq60v%2F6twH7iLbyOoruvBuTul0Pk7R2zDi3lBsbkP7i45z2Wl6DubO8Zu4bcXsdIB7c3OQSJciEnPLnTlBTD7anuMxl%2F%2FJjo4%2Fapss4QiltWCBf6DLmEOI3h8tzSkjd9fkXpQTrkw5767lPUSAR8PwxqsULZ%2FI%2FOh5SEhHHwtqfw%2FnrsQhXlqCu30YYueUBInTgCh&X-Amz-Signature=ef81e2c3d8066a9864da1d5c9ec9ac8b25cd5c6b3a427a59de0cf270efff9054&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIFRMK5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCNEmnAO9807XzmLKZ0%2FolqLySpXt5bqHnQyt5LmMbesAIgS2%2BR4HRMYW7Kk3rqL2GfjsHK1YbuV3qhdonvZkzQW5oq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBsT6Pusb4oQ5eIxIyrcA8xB%2Fog0wHIS7f7DIfK7QZJKV6uw83ik0aMW0eP0wtrvn0eSvuAmKAlDOQpv%2Bo%2FYMtqBKJT%2Fui%2BCVEFPxf8ceakEhzX8xgHgwZWAvzb3KJY%2Bq0AHDVfLkRsepzyip7mxlWYdDqtuvQ20McaZA6jz7j0%2FIrnTRNbhpxuRgYbnvZlFPvWB2aFGC%2BLA0o6NcPp6jLbN%2FLfKxBGlXoVVgrEJFdy1TC9NN4QNkNZoYUIPWSDuBYU433VqYh2g35gv2I6SQTmXAV66ruSwYzIS7HaGucAsrF20P4bZopf7FALEk6mcq0G1pp%2FtuoQkCbPSDLFHk1DXqDp38sJNoVj%2Fe26cJIf7HfPBc66NQ1YTalojF7I0pQPw3KTcCjsLOYJzGxx0hxh8X4ojoXe%2Fz9nMZZBjkAg5mvfeQhLErb5VyeLhM%2BOPw7r27Yih88QAsb0t%2FKeDNlPgL7V0GKD%2FLDOYXncY5KYOEZVliKcZKl%2Bml%2BdXqO%2B%2FSiBnGzbnH9Q11CVhXWdU3v%2BbSVR0SMJFPb%2Bow0UIshRVaZarxoz%2B2zMtjClV6%2BwkVakD9NAxhNW%2FBRd47BM0KEvrRjaAs5kg%2BvLIl%2BNBU0gJSB2OoCO88KeD%2FOcOtqmnkNgcerxuE5mQZ3iuMOuD3cAGOqUBV5bl7%2BvgLKU47L86lNtL7Xim58BlklvhrwIawO5BLMNTm6Ym6cl1%2FSz4Jv3coB4lg3AZU6CIpm2DMXRXm86sDlT4zU0oH4GgpD51uD7pSgehBVX0SWa%2FRSm9%2B1fmQNP6m36xBjDF2A5ee6Qjz8ZBW8XQUhSOnJu3UL7iqc8Wr3GgarXo87CqXmo5VYGyx4I%2FZbM5DTkOAwuGXarWgifTj3EmnIGy&X-Amz-Signature=acd13c670f09e35c1022b6253edb53386b2c3722c4907381cf1f0a4c4d6aa58c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDBTP52U%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICIDf8EV0C4aN0UIYVQDW5og1wtbY5x0XumfKGM1hFB3AiAEbSQZa52XRjhoBpTsmaCQVqqzzcqUNg%2BUiSX9yho26yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM22H%2BxiE3whccP%2FVNKtwDIpTNc1i96LNs1oN4A6OYPi5gIARLu6dRpqlRXo9B53EQXNpCar2wXpeE3JntAqIBoxr3Azd0l%2FWQDY0TJOWlbdjTpU0E4ysa5nuHedJIm1tYiW05NZ06D2skefHufawTi45o0OQw7wQ%2BGvjrA7R1Iyqrk%2BWhILHuEstKWFCVltc0sIksfSZLtWBB1iGHZ0wa7QSq6GHSSLJAmx8caUme9S6Uhxu2YPKz8%2ByIO3kPdyDAdK%2Bq0o72VkUf5yvGI1LYzpgrJvJ5Jt4HKc65LHV0nW7qW1Y73GnT5FIZO8ReYKfAN%2BNOByIQThlm5G5D2tG5bMVdn1bDVnbnzuD93q460%2FWlu%2FFdabcJBbg2OO%2FhQrNvn%2FYW1ESMKBa3a5ZtBxdwAq72y%2BMrb%2BzXLMzIuGlVXwQgOQMKoFk8lIrNgJmmoShSMuw7oFKgSfQn7fKm2rJTTkzElwnoo41m5ks8l6Q%2BZ056hmTlD5y5pgcuWiHnT0suCix1iCib2OxWyesVwychxb2hYh%2FB6jXLuUjgcLULdweisYybjrUy96jPu8iTXU72nmrV35prpl0j1CmJ0ITuoCZ0RZYWDx0TPTcNWEfJHrQR4pTlRTuyj7ygrOWof%2Fubt8XZnlwIIsPoYHQw19bdwAY6pgGqAj8FB%2BTQbmitqsO1aA%2FpCfVav93ZD7fmSTYJAASVQT3avTiee%2BBzzhyxYdvmq6nA35Ojay6JJWTQxoW6nMAnNCrzdX3W86qsZTmC%2BwPmxRc9p40x%2FsrEzwUg42ISrctV0rIZLO2YEc2KARlXJ6xrKiZoH17sadFxrr9Wqib7peUhDaZCwuwxW9yr4QNJa7v3WFC4Quj15g7BZsVSAKKHpBXPYWb6&X-Amz-Signature=da5d1277c2e06b5cf5372b527856c1717959d7c2f6efeedbd4bf99971bb402e6&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG3LL36Y%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T141028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDTqEYHcWW0o8WjuAHwLfdAWKC2DiqYtpLn6qqrDfbj5gIhAKRrxlU4K%2FtYJsQd6KIwP6Jf0NH4S%2FGieDQYGSrcNGx%2BKv8DCBYQABoMNjM3NDIzMTgzODA1IgwUQOHg2OEgquG9%2Bzoq3APjJCHBybEgyiJJqM5JhCFk0PMRsZtNKBKu4m9%2FF2Zh6FrtiWHZn5dckrZ%2BepnQGJCtcULYSRIRqZJth91EqswazKATSJnTme8YiwAQd6I%2FOSn%2Fd8HBv9u7F0HfF8nbDp5ZQJeWtMgro1XpszjgcUREg1s2LX85DqbSkxpsfPqgNWUKDE74ofLRbHrFkuvfs89I2qdOL8wWsr0FeAdLkUglOD55cYeuPzjPvt4S%2Bj7OpxM81xl4tsJnKxVHEruqGH9IE0N5lupkXRah29JpkzlMwLETp3UB4YbADMBCcmymu7uXf9s1ACOTtRrWNUU8A66tZadyBUUAwTN3Sh4uud9U5KSmcA0B1aGiqACODpqtNBIZwLak7LZdylUzpCqggp9iU7TNYxt%2FojvqOjO68Y05%2FKOetDz1DODuz4zvWOB97Yfhj2PCblLtsEXpv%2Fsguo6ZsVqBVveRQNSpce5e3ym3V0QlVRjls%2FtJPmE9w9sMkiPRNm6EI9mMH5RF9dnKmL0YW0EQ7JnjPFYBDR8FQJx6BbXe1zvszcbv2lYoZ3VkqPzWi6i8mVZULGU1mahf2rUWfpZ0FuA7qpiMbyfmxphGv43KOJfIauDBJ1KG%2BWXFUYkmtQmqCijG7OL05zDKwd3ABjqkAWZpM1xqVS%2Bl%2Fo4jkVJ2SEcwdBcKpbhylnut9snlZJ7vDFxmqYJIB26xteCCiyXXtoEK2%2F53tGAOR5guWrzRj1UHOnzYcG12KH2W7VvpGyorhOeA8tsNoyNHPHkk8OVY0w5qWKoNeNW290vWpW4%2BQXdySX%2BZvu%2FbfkKNd%2BVGEH33F7FISXNsE9UBDa8xlhPzstrn0loVIcYOtox2C%2FndWjWeQK9i&X-Amz-Signature=b70eed1799f416599e92a1f1c40a7edff7184ed11fa53b56ff272f3dd0dfa3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

