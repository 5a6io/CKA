# 🍨 Section16 - Other Topics

## Pre-Requisites - JSON PATH


$ → 모든 path 표현식의 시작, 루트노드부터 시작하는 기호.


@→ 처리되고 있는 현재 노드를 나타내고 필터 조건자에서 사용.


*→ 와일드카드, 모든 요소와 매칭


.→ Dot 표현식의 자식노드


[start:end]→  배열 slice 연산자


[?(<expression>)]→ 필터 표현식으로 필터 조건자가 참인 경우에 매칭되는 모든 요소만을 처리.


아래와 같은 json 파일이 있다고 가정.


### Wild Cards

> Example1

```json
{
    "car": {
        "color": "blue",
        "price": "$20,000"
    },
    "bus": {
        "color": "white",
        "price": "$120,000"
    }
}
```

> jpath ‘$.*’

```json
[
  {
    "color": "blue",
    "price": "$20,000"
  },
  {
    "color": "white",
    "price": "$120,000"
  }
]
```

> jpath ‘$.*.color’

```json
[
  "blue",
  "white"
]
```

> Example2

```json
[
    {
        "model": "KDJ39848T",
        "location": "front-right"
    },
    {
        "model": "MDJ39485DK",
        "location": "front-left"
    },
    {
        "model": "KCMDD3435K",
        "location": "rear-right"
    },
    {
        "model": "JJDH34234KK",
        "location": "rear-left"
    }
]
```

> jpath ‘$.*.model = jpath $[*].model’

```json
[
  "KDJ39848T",
  "MDJ39485DK",
  "KCMDD3435K",
  "JJDH34234KK"
]
```


이 경우 두 명령어 다 동일한 결과가 나옴.

> Example3

```json
{
    "car": {
        "color": "blue",
        "price": "$20,000",
        "wheels": [
            {
                "model": "KDJ39848T",
                "location": "front-right"
            },
            {
                "model": "MDJ39485DK",
                "location": "front-left"
            },
            {
                "model": "KCMDD3435K",
                "location": "rear-right"
            },
            {
                "model": "JJDH34234KK",
                "location": "rear-left"
            }
        ]
    }
}
```

> jpath ‘$.car.wheels[*].model’

```json
[
  "KDJ39848T",
  "MDJ39485DK",
  "KCMDD3435K",
  "JJDH34234KK"
]
```

> Example4

```json
{
    "prizes": [
        {
            "year": "2018",
            "category": "physics",
            "overallMotivation": "\"for groundbreaking inventions in the field of laser physics\"",
            "laureates": [
                {
                    "id": "960",
                    "firstname": "Arthur",
                    "surname": "Ashkin",
                    "motivation": "\"for the optical tweezers and their application to biological systems\"",
                    "share": "2"
                },
                {
                    "id": "961",
                    "firstname": "Gérard",
                    "surname": "Mourou",
                    "motivation": "\"for their method of generating high-intensity, ultra-short optical pulses\"",
                    "share": "4"
                },
                {
                    "id": "962",
                    "firstname": "Donna",
                    "surname": "Strickland",
                    "motivation": "\"for their method of generating high-intensity, ultra-short optical pulses\"",
                    "share": "4"
                }
            ]
        },
        {
            "year": "2014",
            "category": "peace",
            "laureates": [
                {
                    "id": "913",
                    "firstname": "Kailash",
                    "surname": "Satyarthi",
                    "motivation": "\"for their struggle against the suppression of children and young people and for the right of all children to education\"",
                    "share": "2"
                },
                {
                    "id": "914",
                    "firstname": "Malala",
                    "surname": "Yousafzai",
                    "motivation": "\"for their struggle against the suppression of children and young people and for the right of all children to education\"",
                    "share": "2"
                }
            ]
        },
        {
            "year": "2017",
            "category": "physics",
            "laureates": [
                {
                    "id": "941",
                    "firstname": "Rainer",
                    "surname": "Weiss",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "2"
                },
                {
                    "id": "942",
                    "firstname": "Barry C.",
                    "surname": "Barish",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                },
                {
                    "id": "943",
                    "firstname": "Kip S.",
                    "surname": "Thorne",
                    "motivation": "\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share": "4"
                }
            ]
        },
        {
            "year": "2017",
            "category": "chemistry",
            "laureates": [
                {
                    "id": "944",
                    "firstname": "Jacques",
                    "surname": "Dubochet",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "945",
                    "firstname": "Joachim",
                    "surname": "Frank",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                },
                {
                    "id": "946",
                    "firstname": "Richard",
                    "surname": "Henderson",
                    "motivation": "\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share": "3"
                }
            ]
        },
        {
            "year": "2017",
            "category": "medicine",
            "laureates": [
                {
                    "id": "938",
                    "firstname": "Jeffrey C.",
                    "surname": "Hall",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "939",
                    "firstname": "Michael",
                    "surname": "Rosbash",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                },
                {
                    "id": "940",
                    "firstname": "Michael W.",
                    "surname": "Young",
                    "motivation": "\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share": "3"
                }
            ]
        }
    ]
}
```

> jpath ‘$.prizes[?(@.year == 2014)].laureates[*].firstname’

```json
[
  "Kailash",
  "Malala"
]
```


### Lists

> Example

```json
[
  "Apple",
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook",
  "Coca-Cola",
  "Samsung",
  "Disney",
  "Toyota",
  "McDonald's"
]
```

> jpath ‘$[0]’

```json
[
  "Apple"
]
```

> jpath ‘$[0,4]’

```json
[
  "Apple",
  "Facebook"
]
```

> jpath ‘$[0:5]’

```json
[
  "Apple",
  "Google",
  "Microsoft",
  "Amazon",
  "Facebook"
]
```

> jpath ‘$[-1:]’

```json
[
  "McDonald's"
]
```

> jpath ‘$[-4:]’

```json
[
  "Samsung",
  "Disney",
  "Toyota",
  "McDonald's"
]
```

> Example2

```json
[
  {
    "age": 35,
    "name": "Tameka Lane",
    "gender": "female",
    "phone": "+1 (850) 469-2827"
  },
  {
    "age": 26,
    "name": "Kristy Day",
    "gender": "female",
    "phone": "+1 (825) 558-2599"
  },
  {
    "age": 36,
    "name": "Nieves Hill",
    "gender": "male",
    "phone": "+1 (946) 495-3285"
  },
  {
    "age": 30,
    "name": "Dianna Holland",
    "gender": "female",
    "phone": "+1 (948) 406-2941"
  },
  {
    "age": 23,
    "name": "Marsh Robertson",
    "gender": "male",
    "phone": "+1 (903) 413-2132"
  },
  {
    "age": 33,
    "name": "Valenzuela Mcbride",
    "gender": "male",
    "phone": "+1 (998) 499-2074"
  },
  {
    "age": 40,
    "name": "Virginia Michael",
    "gender": "female",
    "phone": "+1 (898) 505-3869"
  },
  {
    "age": 38,
    "name": "Mueller Keller",
    "gender": "male",
    "phone": "+1 (805) 555-3665"
  },
  {
    "age": 37,
    "name": "Madeline Farley",
    "gender": "female",
    "phone": "+1 (954) 446-2747"
  },
  {
    "age": 23,
    "name": "Potter Casey",
    "gender": "male",
    "phone": "+1 (948) 538-3644"
  },
  {
    "age": 24,
    "name": "Melinda Hardy",
    "gender": "female",
    "phone": "+1 (944) 557-2486"
  },
  {
    "age": 34,
    "name": "Monique Carey",
    "gender": "female",
    "phone": "+1 (863) 424-2359"
  },
  {
    "age": 20,
    "name": "Marianne Britt",
    "gender": "female",
    "phone": "+1 (846) 462-2844"
  },
  {
    "age": 37,
    "name": "Guy Langley",
    "gender": "male",
    "phone": "+1 (905) 401-3848"
  },
  {
    "age": 40,
    "name": "Hurst Hogan",
    "gender": "male",
    "phone": "+1 (934) 587-3143"
  }
]
```

> jpath ‘$[0:5].phone

```json
[
  "+1 (850) 469-2827",
  "+1 (825) 558-2599",
  "+1 (946) 495-3285",
  "+1 (948) 406-2941",
  "+1 (903) 413-2132"
]
```

> jpath ‘$[-5:].age’

```json
[
  24,
  34,
  20,
  37,
  40
]
```


## Practice Test - JSON PATH

1. 주어진 데이터에서 root 요소의 데이터 형태는? Dictionary

    ```json
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "name": "nginx-pod",
        "namespace": "default"
      },
      "spec": {
        "containers": [
          {
            "image": "nginx:alpine",
            "name": "nginx"
          }
        ],
        "nodeName": "node01"
      }
    }
    ```

2. root 객체는 몇 개의 property/fields를 갖는가? 4
3. 주어진 데이터에서 root 요소의 데이터 형태는? List

    ```json
    [
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-1",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node01"
        }
      },
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-2",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node02"
        }
      }
    ]
    ```

4. 몇 개의 항목을 갖는가? 2
5. apiVersion 필드의 데이터 형태는? string
6. metadata 필드의 데이터 형태는? dictionary
7. container 필드에서 데이터의 형태를 아래에서 가장 적합하게 묘사한 것은? List of Dictionaries
8. 객체의 종류를 추출하기 위해 JSON PATH 쿼리를 작성. 터미널에 input.json이라는 파일이 제공됨. cat 명령에 대한 입력으로 파일 제공 예를 들어, 명령어는 cat 파일 이름 | jpath $.query와 같아야 함.

    ```shell
    cat input.json | jpath '$.kind'
    ```

9. 위와 동일 문제

    ```shell
    cat input.json | jpath '$.metadata.name'
    ```

10. 위와 동일 문제.

    ```shell
    cat input.json | jpath '$.spec.nodeName'
    ```

11. 위와 동일 문제.

    ```shell
    cat input.json | jpath '$.spec.containers[0]'
    ```

12. 위와 동일 문제.

    ```shell
    cat input.json | jpath '$.spec.containers[0].image'
    ```

13. status 섹션 아래 파드의 상태를 갖는 Json Path 쿼리 작성. 터미널에 k8status.json 이라는 파일이 주어짐. cat 명령어에 파일명을 입력으로 제공. 예를 들어 cat 파일 이름 | jpath $.query
    > k8status.json

    ```json
    {
      "apiVersion": "v1",
      "kind": "Pod",
      "metadata": {
        "name": "nginx-pod",
        "namespace": "default"
      },
      "spec": {
        "containers": [
          {
            "image": "nginx:alpine",
            "name": "nginx"
          },
          {
            "image": "redis:alpine",
            "name": "redis-container"
          }
        ],
        "nodeName": "node01"
      },
      "status": {
        "conditions": [
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2019-06-13T05:34:09Z",
            "status": "True",
            "type": "Initialized"
          },
          {
            "lastProbeTime": null,
            "lastTransitionTime": "2019-06-13T05:34:09Z",
            "status": "True",
            "type": "PodScheduled"
          }
        ],
        "containerStatuses": [
          {
            "image": "nginx:alpine",
            "name": "nginx",
            "ready": false,
            "restartCount": 4,
            "state": {
              "waiting": {
                "reason": "ContainerCreating"
              }
            }
          },
          {
            "image": "redis:alpine",
            "name": "redis-container",
            "ready": false,
            "restartCount": 2,
            "state": {
              "waiting": {
                "reason": "ContainerCreating"
              }
            }
          }
        ],
        "hostIP": "172.17.0.75",
        "phase": "Pending",
        "qosClass": "BestEffort",
        "startTime": "2019-06-13T05:34:09Z"
      }
    }
    ```


    ```shell
    cat k8status.json | jpath '$.status.phase'
    ```

14. status 섹션 아래에 container의 상태에 대한 이유가 있음. 나머지 위와 동일.

    ```shell
    cat k8status.json | jpath '$.status.containerStatuses[0].state.waiting.reason'
    ```

15. status 섹션 아래에 redis-container의 restart count가 있음. 나머지 위와 동일.

    ```shell
    cat k8status.json | jpath '$.status.containerStatuses[1].restartCount'
    ```

16. 모든 pod의 이름을 가지는 Json Path 쿼리 작성. 터미널에 podlist.json이라는 파일이 주어짐.

    ```json
    [
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-1",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node01"
        }
      },
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-2",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node02"
        }
      },
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-3",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node01"
        }
      },
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "web-pod-4",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "nginx:alpine",
              "name": "nginx"
            }
          ],
          "nodeName": "node01"
        }
      },
      {
        "apiVersion": "v1",
        "kind": "Pod",
        "metadata": {
          "name": "db-pod-1",
          "namespace": "default"
        },
        "spec": {
          "containers": [
            {
              "image": "mysql",
              "name": "mysql"
            }
          ],
          "nodeName": "node01"
        }
      }
    ]
    ```


    ```shell
    cat podslist.json | jpath '$[*].metadata.name'
    ```

17. 모든 pod의 이름을 가져오는 Json Path 쿼리 작성. 터미널에 userslist.json이라는 파일이 주어짐.

    ```json
    {
      "kind": "Config",
      "apiVersion": "v1",
      "preferences": {},
      "clusters": [
        {
          "name": "development",
          "cluster": {
            "server": "KUBE_ADDRESS",
            "certificate-authority": "/etc/kubernetes/pki/ca.crt"
          }
        },
        {
          "name": "kubernetes-on-aws",
          "cluster": {
            "server": "KUBE_ADDRESS",
            "certificate-authority": "/etc/kubernetes/pki/ca.crt"
          }
        },
        {
          "name": "production",
          "cluster": {
            "server": "KUBE_ADDRESS",
            "certificate-authority": "/etc/kubernetes/pki/ca.crt"
          }
        },
        {
          "name": "test-cluster-1",
          "cluster": {
            "server": "KUBE_ADDRESS",
            "certificate-authority": "/etc/kubernetes/pki/ca.crt"
          }
        }
      ],
      "users": [
        {
          "name": "aws-user",
          "user": {
            "client-certificate": "/etc/kubernetes/pki/users/aws-user/aws-user.crt",
            "client-key": "/etc/kubernetes/pki/users/aws-user/aws-user.key"
          }
        },
        {
          "name": "dev-user",
          "user": {
            "client-certificate": "/etc/kubernetes/pki/users/dev-user/developer-user.crt",
            "client-key": "/etc/kubernetes/pki/users/dev-user/dev-user.key"
          }
        },
        {
          "name": "test-user",
          "user": {
            "client-certificate": "/etc/kubernetes/pki/users/test-user/test-user.crt",
            "client-key": "/etc/kubernetes/pki/users/test-user/test-user.key"
          }
        }
      ],
      "contexts": [
        {
          "name": "aws-user@kubernetes-on-aws",
          "context": {
            "cluster": "kubernetes-on-aws",
            "user": "aws-user"
          }
        },
        {
          "name": "research",
          "context": {
            "cluster": "test-cluster-1",
            "user": "dev-user"
          }
        },
        {
          "name": "test-user@development",
          "context": {
            "cluster": "development",
            "user": "test-user"
          }
        },
        {
          "name": "test-user@production",
          "context": {
            "cluster": "production",
            "user": "test-user"
          }
        }
      ],
      "current-context": "test-user@development"
    }
    ```


    ```shell
    cat userslist.json | jpath '$.users[*].name'
    ```


## Advanced Kubectl Commands


[JSONPath Support | Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/)


### Json Path for Sort


```shell
kubectl get nodes -o=custom-columns=NODE:.metadata.name,CPU:.status.capacity.cpu

kubectl get nodes --sort-by=.metadata.name

kubectl get nodes --sort-by=.status.capacity.cpu
```


## Practice Test - Advanced Kubectl Commands

1. JSON 포맷으로 nodes의 리스트를 가져오고 /opt/outputs/nodes.json에 파일에 저장.

    ```shell
    kubectl get nodes -o=json > /opt/outputs/nodes.json
    
    cat /opt/outputs/nodes.json
    {
        "apiVersion": "v1",
        "items": [
            {
                "apiVersion": "v1",
                "kind": "Node",
                "metadata": {
                    "annotations": {
                        "flannel.alpha.coreos.com/backend-data": "{\"VNI\":1,\"VtepMAC\":\"fe:95:d5:13:d4:72\"}",
                        "flannel.alpha.coreos.com/backend-type": "vxlan",
                        "flannel.alpha.coreos.com/kube-subnet-manager": "true",
                        "flannel.alpha.coreos.com/public-ip": "192.168.58.133",
                        "kubeadm.alpha.kubernetes.io/cri-socket": "unix:///var/run/containerd/containerd.sock",
                        "node.alpha.kubernetes.io/ttl": "0",
                        "volumes.kubernetes.io/controller-managed-attach-detach": "true"
                    },
                    "creationTimestamp": "2025-04-26T04:33:08Z",
                    "labels": {
                        "beta.kubernetes.io/arch": "amd64",
                        "beta.kubernetes.io/os": "linux",
                        "kubernetes.io/arch": "amd64",
                        "kubernetes.io/hostname": "controlplane",
                        "kubernetes.io/os": "linux",
                        "node-role.kubernetes.io/control-plane": "",
                        "node.kubernetes.io/exclude-from-external-load-balancers": ""
                    },
    ......
                    }
                }
            },
            {
                "apiVersion": "v1",
                "kind": "Node",
                "metadata": {
                    "annotations": {
                        "flannel.alpha.coreos.com/backend-data": "{\"VNI\":1,\"VtepMAC\":\"66:a9:19:95:b7:24\"}",
                        "flannel.alpha.coreos.com/backend-type": "vxlan",
                        "flannel.alpha.coreos.com/kube-subnet-manager": "true",
                        "flannel.alpha.coreos.com/public-ip": "192.168.59.146",
                        "kubeadm.alpha.kubernetes.io/cri-socket": "unix:///var/run/containerd/containerd.sock",
                        "node.alpha.kubernetes.io/ttl": "0",
                        "volumes.kubernetes.io/controller-managed-attach-detach": "true"
                    },
    ........
        "kind": "List",
        "metadata": {
            "resourceVersion": ""
        }
    }
    ```

2. json 포맷으로 node01 정보를 가져오고 /opt/outputs/node01.json에 저장.

    ```shell
    kubectl get nodes node01 -o json > /opt/outputs/node01.json
    ```

3. Json Path 쿼리를 사용하여 노드 이름을 가져와 /opt/outputs/node_name.txt에 저장.

    ```shell
    kubectl get nodes -o jsonpath='{.items[*].metadata.name}' > /opt/outputs/node_names.txt
    ```

4. 모든 노드의 osImage를 반환하는 Json Path 쿼리를 사용하고 /opt/outputs/nodes_os.txt에 저장.

    osImage는  각 노드의 status아래에 nodeInfo 부분 아래에 있음.


    ```shell
    k get no -o jsonpath='{.items[*].status.nodeInfo.osImage}' > /opt/outputs/nodes_os.txt
    ```

5. kube-config 파일이 /root/my-kube-config에 존재. 사용자 이름을 가져오고 /opt/outputs/users.txt에 저장.

    커스텀 kube-config를 보기 위해 `kubectl config view --kubeconfig=/root/my-kube-config` 명령어 사용.


    ```shell
    kubectl config view --kubeconfig=/root/my-kube-config -o jsonpath='{.users[*].name}' > /opt/outputs/users.txt
    ```

6. PV 세트를 사용할 수 있음. 용량에 따라 정렬하고 결과를 /opt/outputs/store-capacity-sorted.txt에 저장.

    ```shell
    k get pv --sort-by=.spec.capacity.storage > /opt/outputs/storage-c
    apacity-sorted.txt
    
    cat /opt/outputs/storage-capacity-sorted.txt 
    NAME       CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
    pv-log-4   40Mi       RWX            Retain           Available                          <unset>                          21m
    pv-log-1   100Mi      RWX            Retain           Available                          <unset>                          21m
    pv-log-2   200Mi      RWX            Retain           Available                          <unset>                          21m
    pv-log-3   300Mi      RWX            Retain           Available                          <unset>                          21m
    ```

7. 좋았지만, 추가적인 세부 사항은 필요하지 않음. 처음 두 열의 출력만 가져와서 /opt/outputs/pv-and-capacity-sorted.txt에 저장. 열에는 이름과 용량을 지정해야 함. 사용자 지정 열 옵션을 사용하고 이전 질문에서와 같이 정렬.

    ```shell
    k get pv -o=custom-columns=NAME:.metadata.name,CAPACITY:.spec.capacity.storage --sort-by=.spec.capacity.storage > /opt/outputs/pv-and-capacity-sorted.txt
    
    cat /opt/outputs/pv-and-capacity-sorted.txt 
    NAME       CAPACITY
    pv-log-4   40Mi
    pv-log-1   100Mi
    pv-log-2   200Mi
    pv-log-3   300Mi
    ```

8. JSON PATH 쿼리를 사용하여 my-kube-config context 파일에서 aws 사용자를 위해 구성된 context를 식별하고 결과를 /opt/outputs/aws-context-name에 저장.

    ```shell
    k config view --kubeconfig=my-kube-config -o jsonpath="{.contexts[?(@.context.user=='aws-user')].name}" > /opt/outputs/aws-context-name
    
    cat /opt/outputs/aws-context-name 
    aws-user@kubernetes-on-aws
    ```

