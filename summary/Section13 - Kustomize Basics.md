# 🍨 Section13 - Kustomize Basics

## Kustomize Problem Statement & idealogy


환경별로 다양한 구성을 실제로 어떻게 수정할 수 있는가


가장 간단한 해결책은 각 환경마다 하나씩 세 개 개별 디렉토리 생성.


기본적으로 세 가지 다른 환경 모두에서 구성을 복제한 다음 각 환경마다 다른 복제본을 가질 수 있도록 환경별로 속성을 수정하는 것.


dev는 replicas 1. staging은 replicas 2. production은 replicas 5 로 설정.


kustomize를 사용할 때 폴더 구조는 간단한 형식을 따름.


```bash
k8s/
├─ base/ #➡️ share or default configs across all environments
│   ├─ kustomization.yaml
│   ├─ nginx-depl.yaml
│   ├─ redis-depl.yaml
│   └─ service.yaml
└─ overlays/ # ➡️ environment specific configuration that add or modify the base configs
    ├─ dev/
    │   ├─ config-map.yaml
    │   └─ kustomization.yaml
    ├─ prod/
    │   ├─ config-map.yaml
    │   └─ kustomization.yaml
    └─ stg/
        ├─ config-map.yaml
        └─ kustomization.yaml
```


Base + Overlay ⇒ Final Manifests
     Kustomize


kustomize는 kubectl에 내재되어있으므로 다른 패키지를 설치할 필요가 없음.


    kustomize cli를 최신 버전으로 설치하고 싶다면 설치. kubectl은 최신 버전으로 제공되지 않음.


복잡하고 읽기 어려운 템플릿 시스템(예: 헬름)을 사용하는 방법을 배울 필요가 없음.


kustomize가 사용하는 모든 아티팩트는 일반 YAML이며 검증 및 처리할 수 있음.


## Kustomize vs Helm

- Helm은 단순히 환경별로 구성을 사용자 지정하는 도구가 아닙니다. Helm은 또한 앱의 패키지 관리자이기도 함.
- Helm은 조건부, loops, 기능, hooks와 같은 추가 기능을 제공합니다
- Helm 템플릿은 Go 템플릿 구문을 사용하므로 유효하지 않은 YAML.
    - 복잡한 템플릿은 읽기 어려워짐

Kustomize는 YAMl 파일 형식으로 읽기 쉬움.


## Installation/Setup


설치하기 전 Kubernets 클러스터가 실행 중이어야 하고 kubectl이 설치되어있어야 함.


kustomize는 linux, window, mac에 설치 가능.


 운영 체제를 자동으로 감지하고 적절한 버전의 kustomize를 설치할 수 있는 스크립트를 제공하여 kustomize를 매우 쉽게 설치할 수 있도록 했음.


```bash
curl -s "https://raw.githubusercontent.com/kubernets-sigs/kustomize/master/hack/install_kustomize.sh" |  bash

kustomize version --short # 설치된 버전 확인
```


## kustomization.yaml file


kutomize는 kustomization.yaml 파일이라는 특정 파일만 봄.


## Kustomize Output


## Kustomize ApiVersion & Kind


## Managing Directories


## Managing Directories Demo


## Lab:Managing Directories


## Common Transformers


## Transformers Demo


## Lab:Transformers


## Patches Intro


## Different Types of Patches


## Patches Dictionary


## Patches list


## Overlays


## Lab:Overlay


## Components


## Lab:Components

