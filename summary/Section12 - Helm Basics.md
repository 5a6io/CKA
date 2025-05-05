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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFZUMNK5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAjxBKYgYR7DyKj3nHg2qluMshsZiHOtHl5EqdtnNLgAiEA62a%2F0uAJhsq22wG4XQD%2BCkmCBdadfuLOKrE3nmZZ1Gkq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMZ8VYLJt7AJvhoQpSrcA7YJXt8pi8kGjfz6eCq1WIt57XbjXJIKBjy0UNO4%2FphcBLArIoAMMxNEQg8TKuZrlZE4i9wiJQWAwBf5SneamrR%2B5RsfMgT1%2B4fghh2jjRawjNuDzJAYu9JqMN4pg6GMWfcqac8MoRmioYh%2FOP12i4vB9f7RLQf3JaoilhkWr6nYAN%2BH1o7%2BaeUyhNlqlCDcgmp%2BCC061Lig18e6gakTjslh9KPQhsNx44C%2BLCwMgiAX%2BGzdgSHjSykpmymU%2Bv7CxEaGvjyfYjmoKUYAAwDLA1LlGLAGh7yIWyeb62QYispnCGZQBKYQyy6YNOGJ3QZpUGIFFTtBRMjUmfu8D6lC%2Bt6APwvQcqyPl9340otmCUlogIOgd4x0D132BuYspc9QzGxwd3XhPxxKb8F0pA7k1Qh%2F8375svu3wPRugQW0qZ%2FmBL5UFfafuniyGsQNZxpsTcN07BM4L870qaD%2BneuAIOGym%2BWeFHuuRtwikc%2FRUcNlvCUZzxPDns04ceh%2FYBGm92hHhsrUYMEgwPZlzWUgHsBl4Ab3wWv3h6L0eFeTmD4WCBW9hScqvLG%2FAvwQl0o2MkFBwUFi8Qsa1aDUzkS7%2F4eMN%2Ba9eXCnD8ML2QKqvWl967dvqz2xjk9dnpvGMOj94sAGOqUBpyPs0yq2tFG5CrBseG2ngtYetvpJrhf9NYkltbUPPgoD%2Bbsa6KNmthBd5alx68gnScFd0eOrI7duSCJJlCOQl%2BNbK1qFhyjYQoGyh7R8n9r75Lp3MENMbn5aBGbZYAUyGH3n0brl%2FVHejne9AUfAPtX0vyFjLyfh9xFLyHFvivm5IdeFRdMNxeuo6llWeFRTyMhalwp15z3xbwelgL%2FPxpOe8tLx&X-Amz-Signature=3da3b90d27b422c7b57d5a66272923833c21b48b007ca1316810d5771a3a2a36&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIC6PQX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0tMIy6At2cIM8i1vgGW1IxFDQ%2F%2Bs%2BmJ3E%2BoKJUnR0AAIgR9N1l4xj6%2FTJF%2FNUMVcq2WMtt9WlUpzZDNTRoFBGItIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLzFJxUAJujU8QhEwSrcA%2F8mRDI1F6Ky19PAZkPSolT%2B7ryATocfXGUBGQLcmHBnjzhNyw2hPdJ2Qy1n9pFCB2%2FEr15RTx%2F1Ghr6cLLmrA3mr8Zgf%2B93iKTUpdd6QPQ2VDYXv1h56sopnmfyPilkEWKfsoVO1vvg2v2k8Nk5z599a6IsCPBowI9NyPuYMYBvZybShCzDZmbd3%2BtrND3BojQQCfVjNy2QpF6a46oRLlzrit0cL7LJf%2F3AiC300vYAlOFr6qhu7DDHsYDwzSGB1rgjobjiWHfDswgyHrqs06ivGk5u6q79biVYehUfZhK64TLzgMkYKRyPxH3y8dxuqVmgWax85dRNSrkAdTk%2B0pw4y%2FOkUi8HRtzYa3dEPLfDdN4KUo%2BwH3yBbgPI%2Byw%2FZn5eLTw35OL9aAHDpmYvlOVGCdcN4hMMIe7XARS7COYMIbCr7%2FPV1qoYqoLIdv9EGztaChoLCKBLpZ5Ttf6dE2%2FMi0rcar4iM%2BQoOprlWADrGDp37wpCvnjDsYQ4OIlJdWMChGaZk%2FufsFlZFx2%2FBxwGf%2BWBg1Bu9dvjf%2BUi0fD1CDe67xnJhQZcJWU1dNk8FuRFccqpmehWOi1eCJoHCH7DGWiBCqQ4kxfWDRgAv4MM%2F9z5kL60SLUi783mMOf%2B4sAGOqUBeJ1qTPhHbFD%2F6vo4tPl6Apr%2F7j391iRPHpWRgoQQjvd44A%2FMYGm9BC9JS3NBI4Um0njnzG97h2nmZyG3KdA7ujYfTabXqJHuQnLzsaOZ8YbtyEbd1Bg8Jy5mxdMxnaGCu2DewUiYNYq9SFzjx%2BIBDUJAir1GYRvjFd%2FSyg9GwJ0JJPL1yRFk8gmBsOl9Xr94LpMtpZdgy%2FH%2F68YLdmTLFYx9atin&X-Amz-Signature=22943f479fb00cb494408993be267fdd523e1d4854d1783ccefa06c298cf065d&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYRGPHII%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeMYbN%2FtjnJPgrObFv%2FhvTMOoz6AB5qHFS6sHZHPeilAiEAtEDZU3e4Qk7j2%2FZjnvSGfT%2B871yZtq9yiQhFvZQy5twq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDANH%2BxA1GHSgMqZfPCrcAxQx2dOp94BvJNaf3zpDe6kbCKqRg306mc7kJn0LzZSeqAM3s9tQMe8DT0lQ9R%2Bqf%2Fl%2BB5nP586aXUnVBNPMLWFqDkYDYfIGs5zkR94V82sei3nIib7b9oyumivYDGYTE67o7nP%2Bu3CQc4LqaKeqlgSPfU0LIu6o%2BO%2FTsXteSZkHQZH8g5RpVxDceq3PL081OfQIO%2FXS1xGe9qTxQqWjjCJCIjNMYIDRH8NEApU79sNKMOxhGXo0hAqrRh1dv1QuT0oAI%2BMab1vi6YkDmxHgxTiF%2BgqRwDRJyR19tQFL8%2F2A52qPZAlUtiXRUDQ8%2FgbDp4jrxVhXTDV9UmQzkop3tT5TooRqwIzjP42l5fAuJTtDX9r1DJygNvEVCgyJSyHS8FPEgx%2Bc70v7t7wND6GWMjaPJefST3OEm8e2L6fAQUSrk2%2BKXj7yf6DSPD3QhQzjODSBH5R1tmSq6ngMzs%2Fy6o%2FIb%2F99KD4cw%2BsoLuFKU04XqD4hV8h9jDeFS6TtyNLxEGyhBrFiJKP93RDnSfSAkq%2FocmP7WGQORbS5K%2BkG%2FkI096Kqt7Z8EbVQsMAGche3cB7zyOVz0hbe7t9QIuCxlcdwFczXF7iDUH6%2FDCAJjWgYnLcyfjrUAdzM1IaIMPD%2B4sAGOqUB%2FI6VrA0geSrZ3l97G3Sw0hQ5l3taCvUVNWcA%2BX3%2FrA2dh%2Bmlrwii1Txu3j%2F6p4U8v%2FkGmTeeFlqLLi0xzBM6BctshY%2FkJI7QcHCVgqb9djKqxRLaqp5DWo%2Fl1uugdwRQ63E1s38tQBTRNcscIuthnvTBmux67ats8STz9lReR6S81MCGS9cAotjRpzXWaPX%2Biig5RLR0RsXzP4ogNcLxjO5gzywr&X-Amz-Signature=0222a8b190b69cd5c02b7c901265d1c0d7da8d1bd689363e32d00ecacbc827ca&X-Amz-SignedHeaders=host&x-id=GetObject)


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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ6YM7SZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBXzmC%2Bp15%2FNZ3KfSOiraKhULfUw4IsF8sRx%2FbSEyUgIgXdcxJUtVL5AN1tsod7kGphcwOKdqMDd%2B0vHjfPxGyBMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFX1G8MaQJ%2FHl9mfGCrcAzmokisf91lm8Mm9k3qgjftfRtOD%2FwdcJNpU%2FcBV3h5sMgyTkrfYbwawcCRVckbBHPkDnbANwi%2B79uzlYcPUJwWkUL7wPrBhODCAuRBh8dsyIzkoKIyvI2oq%2BS8KRb0a6wBI90hUcMq2RAA4%2BMGKzOyzDamImT%2Bnuu9xtwv0GrzxgLEZg17CkBYkNdM%2BHHeNXzprI67ZGEcvn8yNZDg%2Fp8kVN7F4zkNmf40sKBeYtTgdpD946shh%2FV3%2BgiReDpFToKh%2Bxm219TBDSuwQbARszZSOfHUy1h%2BreekBpI3xR3ay8WxM8iHuMRt5%2BDJ6i8V0uBMjbnGNR2L%2BGE7%2BjOCfK2wJanWBl%2FV%2Bakq1hq7uaEMqeVv1U2XVT5stGXyvDOHuY9TLSeHq7owqrFQG88k7YE%2FPhTqfIMt3ULn%2FZbv34tvZeJKbw9l8yUCdXcQq08V6a5n8wBLZuA%2FOmUpEo%2B2pdSWwJswMkO8zd7x3F0OGcMz8pZZ3%2B6pCKJRzhybSTakhvXcQUmn91hmMUbhB3S2g%2BkSPpiimyfV3%2BXmBqJkRJpJOFmRzGRwvV8Jb1XvLHoqCEgrMPMdeJnO7S4me9NEpTQ0BVNwweCqLd6ibJI%2FYaAEsIwqERknkRf0ha7FIMPX%2B4sAGOqUBFwrLZdBaHBCoTxNzAJ4olar0E%2Bhi0ZxCb62IhtzIIspUkPna9t%2FAkdMysExF2s8SbNgEihuaw%2BmunNfwMDntuMY0JX57OiKgUiS7woWzDGFu%2BWPNPdZKJAcXxeb1DnBvQnJk%2FBB4dP8%2FbVeCrRSho17GEkend2lKKmYTDavY1WmY9el2O9L6B2tKCLHAwgUiu86%2FmhYQLDeiDWlz3YT6I5snOWWO&X-Amz-Signature=cc12aa66856a38dc2c8e99c114544e380898fdfea71d5b068f280782b3156a86&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYEZKS37%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BSkKk%2FaxrsByyt%2BYEPM4J%2FqYq6cPJm7lkUMkVXGN48AIgaoz7B3rbI%2FD1UIaqDJ4BErFqx%2Fitlwp3u%2BbH01vBhAYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLA9Juyirj2G1y%2FVASrcA5zcgXgiqvAghy5HaJnriRvtd2GvehR4VVm7wOsWbZ%2FyGQu%2FerLxaHVMXMLLzQPyIv4mTyYj6wMt1jLzLPytLGHX7ddEujICubVvKpYyf8yNGRl0PtpoMrxDvtqtFjBQ4Am3MPeK%2BzPJy9XvM6V4qJEo4gyqW43o2oZZJtohhO2E5bN6yNQM7WHsoB%2BMe7lVs74QYta68OX3toV8sEkRz9tLqKPGTu2%2B3Diq1SDxv0xq%2FjuynU45ECXNn5by3iIif9cghBsgWtNv6U7uObQljO2TJNzBjSVJJAIDvg0b4diIt2NzFQEYdDvdq%2BGMi4yEs013XXPpwvt1IxKzGXfyzR6uQBXhbCCTpyNv0IIyZn%2F1WQSc2eeWN5L43QzuR8S89Oyoz9dKih%2B1cbCt7c9rDwE%2FK6ffT83wFXwSjoUI4htbiwJRs8JMPmFFODAPJ5YohjEMDjHPhqQy%2FX3BXtFpnZeAvADq9kPKIwesRCf7P%2FQZ6M7sLbaAC170%2BlQMubnOmCjUj7LYhvaV1rQtn%2BKrZL4apLs4rvqTSBar4WAUMOcYd9zXeStVmE6Ovc%2FaBtduNV2kpgJ%2Bpfd5z0TlM2BsdkvIzNJx8cQVg7H4ynKox4eMCbXryZvhJuSde2cbMP7%2B4sAGOqUBHmW66wcPE%2FHrNfyNtu9UKn8L7PRPFCDOs6MSJA0g4bJ29xS9kmvzJpcGAFQ8nN3GfUHOjQf4EM8M8IxgpSgBVHqNU42ADlopbtqtVkcV6EeVhcGm48LMvtYlmYtbIGTEzEOZ8U4YCtkPWdQmUXylCZEurvdrHogJnMHzNoZB%2FFIZQBvMXWlUGLH1tlS5LjJDQqE4fzLH3VBxMmu8b18MVioQMCga&X-Amz-Signature=7d218921f6579387c8d1c7a22463ae4e70af9776e24096f3fa9c13127ca06641&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLK3CCQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD05vlioeWfA9yFMRe6KqFSgUTkfjsfmlFTDNkVITdnlgIhAMfdsZimy9Pd5Bwuc5CXCBnCJVlOMBza5VaNZGKTFwC%2BKv8DCC8QABoMNjM3NDIzMTgzODA1IgyHIKarUtjbpZ5aRbkq3AMe95pLGGcgpjY1w15Bl67frmtPK3zbN258gzDoP2Xoj53MDEYQa89AHTHh0dMNyfMLlZoZtniMgR16%2BkAtWpNmmAM9w5bJxImryecaRGBw4pppWJuehsx6T%2FO3nBOuKK5bOpEkDiKMTd44w1oPIe9wdcKsRJyVM7l4zcLxUYIS5wCMtOg1cfpXTV6TswhB%2FcOvhmJp2MwA780xmcnzXPHVhCQQt0tt024oKAzAwX9SzLMyfZphOTvABrAiTaNDTQtRvzb2bm31bkKW2iv7OajOa2qXy55YoORHCjiOOSyZXXUjzS89qZdMQMrPvjXS9%2Btj2bODQ6ScKikmWX3jjFmpkemPrXY7gpiUHZbjjUrvCvFNOi3hXmROXcr0nmIH0pwmeC%2BNVb6P9%2FmNYuBSe7UQ%2BMQJWfbmkVET4FpGMywREJMJPjbsrJdjqO6WBVV8h2cqaOzAX%2B%2Bwy0ElwbbrZZLqRoDeTNQMT4O%2BTKSSUorCqrrEcuzRp1JOvnyXEswUsIDLepfK09yQC6e%2FYozMV5i4%2Fqf2Ash5dk2ASP5iA3B2joU%2FoKMlXxNIR6hKlIVTj6lvA7kwtTzxZFEwdxMa8zJGOigRSdJmOsHjoozc38yLkIJaF9XooX%2FNqbkLSzDl%2FuLABjqkAY245Y068lgQNtm%2F9LuOfTrl4hH6QXYa3huKLZ%2F9GWxnDAlZBT31qBjMeMSKxQEN4EU9dcFE1MwVYIqAjJYWd1yQ2FCmvqCzUbeVuWXv0jWu4KpYGfBPklZlafvWRStb6Fnj8jVTbt43qWalwhVfa%2FoesOPnkWf8W0boY0hanVqV2tVktUa8iuPKU8P2WrtglPBhNCfE2DMmqoDOFuuZuGNynONZ&X-Amz-Signature=63c5d7c988ec973f7b05402be20e969b81b131bb351f2c72e977374cd7a3cd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MRESCDK%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7cijOr609Nw2Tf5%2Fndl1ME2mixLisIBQ4uLr8RLpSxAiBEsBY4qFQEGeBsupKdnJfg5PwlRmAGzOOqBYMzf5zD8yr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMV45Pw9HevcGtouKKKtwDl%2FTb%2FuvIb2CqPul8TiczZWFfHonJ%2FO3U0XAKuIXytgj%2Fzf6IsHzYnRhF3dHB6ao%2BW037As7W2mpUpi4QSNUM6d9vlo5ozViMxcjNihSB9tiXZftWgvUyKrvL5BHyBAfdK9Bwd%2BhKhDYBbDlr9%2Bormf%2FxRFCY3H1zaWdIqLGg4gTolO4mHR1VsbdCqArQ2jGWNKJ1u5w5anxMYBgb7RJ9kmBdOs8xe2dTIehWJX2dVQtV96kyXvyMjBhf1%2B3oNvXRE1wBqWofyK%2BODtek%2BLEpn3x68nKWM%2FQpTfkLHjzEJX64N7%2BttK65OwZR3ZhPD2n4FSRZ4b%2F7oSJhuj0KV2X7BOd5naZg7bTsj8t7Owd6%2B15NlpM3sdOMnddN%2BYnkV9FNwHJuurJp6AUD321qywnoyDV7syUFGTxZcbAzCP0g4NubHtM9AD3Im%2F3bxXGox%2BZcsUIpbzf0X823v6slHdz%2BAnxca0Od9Drr4YsRXtI3Lm7ruVOdkEvL2iP8G%2FS96ioASF%2BQSd6PAn8ZIQVjmoodBR%2FzIfZo9V%2B%2BXr4lY0EXCFfvJabCSOpbCctKnWPu1wAE31Ch1TDjPszrZI44aegf5CMgz6Xz3dtgjB7YeTBPMBGdFJIhDvPBBm1Zinowpf%2FiwAY6pgFSwsMuKs6Bb1Mh%2BROA%2BL8HiGrX1tDs%2F8OIIRwtMKKWkJMCKEdcE%2F%2FEWOg2dOKRqeDaUQv3v8607guWbNRZboKYfhfR8henZSbn2Tkhyt0IAO0OO6WewSZoUeh5n%2B6lSc%2FngSVot4D5Vuif0sv85Eo9Ad3jh1ROLEByfv%2F6z2q95RRPWwXX8P%2FXS0qIpddyFT0B981xfgqVnhnYcQPQCeKbvkNbOee9&X-Amz-Signature=a5c5fdee31a5caf82b04624af12c245ca6b660b4869e67159feef3aca075af14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7RDIRWU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC8%2BGODIc1Ac5k9A3PeApR5OwPzqhVlxaqdnywwOaNywIgWgrjPZJSU9Ioe8ut%2BNKLIccdivvDqM11zjFzllc0ilMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDGnGfSHOp82T9Ls99yrcA7YWxy2IfJnM6a11OLEXVhCgMNmBx7KG1E47fK5k9xAijjLgUQzI2mbPZFAbI1TRKloIys%2BQRX3VvqSHzgf7n%2B5GRO%2F8otjcUBwjxiyNAq%2BLhx4Q6K4soQFElbR1isPz5RW0WQToH8A%2FSHz9lZLdgkDfqtO1z%2Fwrjo0H3X19wLNdFDcLm%2B33GaXTyd3x1fek1pqPVf5bJaaPy45kciVGl8QdNz%2FQddamcPlVmw%2F%2F61IK9jRHdPOi9DuYSVv%2BKmbZklmY7VCUKkKOk%2BWPcQ00KKpARI0E9saxPi5Bmo4SPP4%2B1RSrKiyrdW0kOHFz7svtilGtrdPPjhvMJGLLTumVlmnzc577RC3MKzYwhbh91LKtUf2uulBd58btLLo4dpP3Ds0cH1hMNMU%2B6nTpREO%2BtkUJd8TpFSp7%2Fr4cir%2BTu2migUEP9b7OoKbaDwaDtw9zB4iQrRSRZxlC%2BDooCtTcQMEpMmZh0oyTvP65LSg1zMqbtzZxj1gP8cauo%2BkB2PSVYeWK9egx57epffB1JCZkHwYdHb8g5bDo8HtynXLmnyx3h3ba7hDhMELj%2B34GzCB5p5mqFlr3UI%2FwNHBt91XSaYTQprLJ%2FnObsuglPa3AkIutGD88dPBKlUuKF41rMPT%2B4sAGOqUBfp7X9%2BC5EWuIk%2F9ok6WGyvVYdAUnniy3S6AG5rxGasWjVj4il1TyKLa%2FtMs9gWd2HvO%2BL9zpZld73Ib0sUob0Lvv1fHtjbLSkf7RdYWDqEjFfEaRi9qKrTiTdHkZpz8Z7204tYhZstxJLbYaaBYwXUEc0jJ6yqBBaIHNKq5gGiysmlG%2F0gmRFlnAf999cjITW3SmAyjwa28kqzIMKGOrevnPyG0W&X-Amz-Signature=81c9cdd15e31ea8047db0ee1e8754d8081aebf2b89b8592a7309ef4c774a5758&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEF4NN6J%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T141252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5aSI%2F4a5zwcgO2pSXYGTxuxDYe3J%2BfO3aKP%2FilO6WzgIgSwp%2FrfN1q0A4gGDj2zIudbjOKez79%2BqYP6sj9%2B2qrc0q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDL4o%2FPGTa%2FIj3pnx%2BSrcAxkhv7S820FrSadB7L%2FZxQ6ZG57s4Xu6pFfyYf%2BZRA4qAFn8JIreZXJpXa%2F%2FX6WDC43W2oeDLVX9LS%2By9TqsWok5S91BWJ7AiiYfgXjIsc8H%2Fho1P820HtZIyXoyQ9UTh3rPuZjPq6FGRpPrVzCna6LHUQGSyX%2Fjy3b0IyiNLLeZtet2P61F%2BLBOXa%2FgTv%2B4tZOzf69z3XOSyX2DOaIHR4rGedVmU0rgftpYVeXSHxB5XA%2Bjwv3KDs2fq5%2FsNY3ccznExkLyQ2atnuIp7lvaU59v2mWOpPox%2BPmAQRVgDlhoJXesUHZKN0%2B5WbTxBvJUWWHTFD%2BQ0hWJ8VLikJfr3Fjngs%2BMXgxPWj%2BaU1cs7VyPmmArq7QuoghPw11NkiUVQb8e5dtBuiCDcRpEeM%2FIz7aPJyCqMHAkwkEz8ng9i4q1m3Uxv9fJUT2%2BOwqGbxE05XgDl%2B58w31%2FIHb%2FyEz1eSIQBF4X0ZOVKfceVgTeOzOgu0wJDOqDw66WzE8XWfeV8I%2FEwLDnT6IIOq0knUm6OUv%2FhzE8ewWUTXzLUY5e7pikNVnI5UZi4Bby%2B6DAbwtowMrO0U2kEpDwAOhlP1A16Mh%2BMl9Tcpss4hkmVrnCHkpqrRL8nqppI6dQjg2IMLH%2B4sAGOqUBmzvsa4WFDK6DrIvjCWyHRIvGtYJkmgYaFnLkQS9gGcN5foaPHq6i8WHiFeu1eceh1OgNjSwIz2Jv5x55fKKTK%2BRRmOa1XUDps%2FwSh5V1Daay2DfpnzB5Qt0sJKLcZ5Z8cQOI%2Ffy0%2BkDH7ma9QZmiUkkmIECKSUDXqEAnFXq181eq9%2BfErOQPOvqR4hRMhlwUDWn07TiZeU49c1ET0hJX6MBH3gCT&X-Amz-Signature=1e9f0b4f7ce3869607bff2c79bace3465e8e7265bff8484b20359a1966a8b5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

