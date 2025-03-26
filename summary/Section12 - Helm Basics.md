# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSBIH2B%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyI72sPbYXU%2FXnKKtewVOTSwi81VbvCvqGKOurXH7xwwIgbljTUcmXudHh096%2FIDmc1pbTrLX6LCPjZ02%2BHqnTPB4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDL7yrdyzabgth9BAPCrcA1gk1j4xIl%2FEhyg2eJUM%2FnXguuLLK2Jz5njn3cAfoRHiYnGDlofO8RJqAQ9gB7%2Fk%2BzwCJZ9VnrS5R5lruOhHFAKIDYrxvvu6cmvhE3fRCtiAChycxfb0N9bII4QyzGySU%2BFOeDc7bpWsvYM30hSr8aJBj4MTYLnRjLa0yK8jmCB9BtSzDgz1ZqGqxYc2UqB6apY7O5psRnjp57rixT07IVxSE9JCCNJ5H6wFCpeBBvjVqUhABXxV%2FVGCnXaHv7SaTwBS4Rtnd%2FhwYbonL7fLl8zcRGJCSfvQ7PSLdpsopyE2WhSqZoAg3LtmR9jKOz1E87zxwNaXfRVddhabV6c2YWYDlG4%2FpmQT7lncl1y%2FyPxpJaS7o%2BGvqiGwVKrNc93IcKl2X55zhBkeirnM1EdOol5B4BDg8U9FpL1SDjvsWFkPMRmbNQZdeaUlAAebpXpdKxhNDTKtarlZhWD9l3V7Un7kaBUXJx6jUSrF3EUe4%2FCLw12WlBZ96rnMawP5fi6A3FYXHnvhiMDEhmNB0rGwDV8O7NAKf8fcsuoRTMk6S9Q6XkoT2%2Fa4sTB8yJikpphEgaN5KI5EtT9fkIdA59vK28ln%2BGnZri0qoMWdn6UBQUhWvgG1b%2B9ARWnPqPzbMLv8j78GOqUBAzi%2BbnolLH5%2FObSYEbee8UBck8eCVx6O2%2F5%2Fr%2FUSJrXrrnSK84qt%2BsYYaNgG8axU7t5JesvOD8YfRavk63CxNOkxdSk9QhVCwJGEVtm6UwZZbWojFHI%2F99XHdQUs%2Bh85BrRRAROYpa%2BNiVGbxE7p%2Fkg3KYLCIdGizYMUNNxp0urEqRrlc6UJ%2Bfh4s089WaO63Dk3lrT1crd9Jy1nbXcRPJ%2BMX77D&X-Amz-Signature=dc7b92ede8fb9987f33af4a913b6f48ce30bd9bbeba5540fb7e4b3b5cc0842f3&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWRL2J3H%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGRFoy963xmBPdQRf3qd7sH%2FgzFdJyceA3WGO6udSw1AiAXG2uXSToTgse%2B%2BvBrDOL1jwR9vA%2FS5BU1f3ynC%2FEJ7ir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM2H2O6BD%2BbZfCqBl5KtwD66Rbr61XCbSGeSupWpbTmwMIAbpI72b7%2F67nmXi%2F%2BVum8WxmMtZBGWV8VJQrMOVmxXyE7mxuEzvmo5EWC59YBPT9lE0MRdIRMmXAx6ijzkyfnLGVKb0wAQcmm72AQ2CL5xtoVb2JuCnU%2Fj91T9a%2Fvs9Qmuf%2BsNX3Q1v9FOD5XrJnTrMOG2OQ64smBcQvZKv%2FInnXJceHsPiZmUTUSTHRcwL5btgAch1PVoYIczkGx2w5LIE1a13oUbSYb1ZyjUWy4THw284i5hkAr17kYDvulR8xkHXQgH23dNrvFYz7bUlHcuzCEjbR9VOfCg2scNfssl%2FG9KZqY5HaVPEx0ernipEgkMjg%2Baz0%2FCqpWlYEpcTdjPZgIVE72a46DSBidqxcpgvkWuoe5fz1gDGgkFIaZaisrLXYdEqmPv3dlSkg6EaR8jDMtdv%2BAKg5xdi16%2B4bmnz%2Ftw96WBOaiYbZ0dblKyA%2BdZLmLvPMDxjDU16phAeYoiQVeO%2F4rtvhpR5JGwlihwM%2F9vAxssG9Yuxn8KP9t5QL1pmGDulJHwd7yT7%2BMKrZvquO4f%2B1%2FuIY5fcJBBkz846kqSRViN%2BZlLrwUGs0Vu55nr98hgcneo%2FlpW939a14SIlmwh%2F5X7g6N6Aw7fmPvwY6pgFLOXg%2FY4Z5cQzXTsfO8muOMQ7kicLNZbMkH0Kn9eEnh3r%2FksmwoNwMwtCwSwBr3%2FQhY30A0DyBeHQGV3I4swehzJG645gdv%2FXtUAA6K4xD7EJ%2B1HdlmwN%2B9FOHDcl3tCvhL46SBCHnVKtXoG76d7A5hfURJf3gs7Jf4%2Fg%2F4a1S92P4Ti7O0vom46hYIMuZMOi6ZTE7p2rIKhopYZ69sOnFmzxXJWdM&X-Amz-Signature=a6e90c3e4ded3778bc9d1e2976572a28232d2c731b9fb8c27c8fc96b322cfc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUX75KJY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7m7%2FBjFaDd1aicSAc%2FPidajlT5tRyOGEiTIMlc1IewAiBQr0YtrlAtCkpRcBTZUHmxrsUaGhPqne0v29LjjmL0zCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM%2Fl8rrS%2Bv9U5wUVu%2FKtwDEX5LZ3qmfw7zSTmPAovzqP46zkLinVI8a%2BbMPd%2FjnJ59lHfZQdoN14IXGBRSsdPcJ0GxH7Npta9lI53Ri5uIJjeq2MTkwWbMMizGe8UK3oTbrKvasVhiE42ynGqSNeuJ4Y%2ByOmdTEo%2BzIjEHJ9%2BVwIUQNaJmivXOj4%2FBtt6ps18Y7DPkHwpcmNuwS%2F83ExrWcdBX015XoHuBBMbM3qIV6ODTGMl1ynbx7BUo8RE6Irj%2FL3u2OgaTKtw9fNzThle2Kzjwh%2F04fAUjTlCEbpUX1RGaaYN8gTOQoZuwtgfaCZixakng1W2DIufgZklc0ZTHPF5AC0RUNiZumnMBcXEE3oxeOdjgu1QFTt5U%2BG%2BC7Whnhij3Zpp%2Brcl6xzFdoCIfvAKTi8X2JtAodlQdfRJ4%2Fep%2F17gzAcx7LgpT88pBZq3woXU71QMa75UjPfnaZAzTBccbbnhevOhwe9z%2FhINY9aprFvLF%2BLLJ%2BST%2FK5Von1ItrcyMU8rfknIddRJsSDfMmU9rLlUC2XDOTerfVEcAODYec2s9kZ8xybs9W8bZ4qRo9EFYmZWYiaSuFA8z%2BKhFEQiBrGplxcuyOjSw5Vd9qpUOlmSsVuqph6ghfrnA5a%2FHnaDQmg7AyjEwZl0wufyPvwY6pgEGF6pQ81Cp0abc1dISba%2Fl9Nqf%2BFCLbFRYoO5fLA4hGWe0MvY4G12no%2FrEDvHPp6StcotFykLxBs196XAZOO7XfvLRZFifGdF%2BGEoxiYA5CF%2FP9Njh6ywmN%2FCwO%2BNTw%2BCiLckbNTvjBp8YAZ4i5hipTugp8NT5H%2B713ipBHRWerkYO6JUTtFp4WiT%2BRUWacF92sbT7Zba%2FYJtk6%2Fu7Id77TDiD0vLV&X-Amz-Signature=6cc07b3a00f4cac1a694f7f732784d584ee24d03d7fc6f995fc1334834148bec&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DM7PTBA%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB0RL%2Fk9zb8Ik4kyoZVXCbMLNVR2mIBduzWgdmIP9CZQIgEhTM0oKlk7wePBhw7O3MqHsubLP%2B049OUjPJonHf3xgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDL3cEYeSRkJdA%2FKacCrcA49dys5WaZEqe5i3O7COdRSRBLddONZzsHxnnFgSyVXWUliuzcw5xWcuRbPBU3qBohJ9yvlbXoLcPz2X8KmrPe17rMd8g%2BEAGbn0U7fqnp%2FlcOsr%2FnyI8teFXCJDy7D1xQVbHxxtdt8iMiX7ltEa4DEt8Ig2AN%2Fa7AD35ZOpeP%2FbnqfdwKQOLcHPwKxzk%2BwnYVXlTfcMU9xaqJsZOi9DAJ9sT6x0jvgnyHstHMxPdSyrayWJbp6XyPVmO6cEPK33Gk%2FlOQKymj3VfXJjqtGXk0lb43q6HCgoAPCq%2BvMQfYM3zLSwoxYhxbaXYu1TzKwtq%2Fk8ckgL5bOwoZvUhqFMrY%2BFzqQbJ0sNIVgNTE8ytoqUI9Q3TEu6L%2BHcC2RdYXh%2FMKLrQx8a6AqNqH7gH6wjO%2FDZy6etB7Xw2huKlogr%2FK8%2Bq0%2FL1BfPHQPJmdd128rDc3HcknBkSEb4JfMvyVuZPmTy0T%2Bki01DMnL9JV1IuHGwFKXIGZLZRwaWQXkcrJ61OTQO2MBp10cQ6ilkA29T6qKLHkxEdiZ70PfHtM778UP9ntMQ0DRwa34yr93lpcqEoZsZmews1ribMSm8xq%2Fq8u9QRnO0M4%2BkgKqnJ1JCtPCBO3P05MGFF7ke8pmsMO%2F5j78GOqUBPIsKQ5UPpdYrAoU2L%2F51wsL%2B4CbhRu5SMfmSLzastREE3AzzrwAFPfM%2FTs875cA4ubcKEjkOQsdzdmYkp%2FsN%2F8AYlUkbaDCZbvAhONNbyTeCsEBIRnD5YqpfVfecJRuJHKuRWnZ%2F5asd7Nmpn%2BKoP%2Fb82JLYuL773V6jZQcntZJUwsQv2zWgl08i0gmMRqd7XSq5EdwLFmB0crd4lJG4zwrYAaqg&X-Amz-Signature=03efb717b82f7832156868e146888c69aeafecbb3a00d60d8d9a94a0e94bd55b&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMECVM23%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBRfKmfwb7twAh33T5Y4RFZbmt500X2%2F1oVv32L%2BJegIgbMD%2FAHoG3LiNwxv3lCL9yVCBNTP89uJFQKxU9BaVYWwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCNUulMXA0fCUd8NGSrcA9AsoGoPWDv58n4q9BcbIBPLlgPdcbQuJPo3v8%2BAbTlgoxRF01ar35%2FmDFBcrT32CfzHQxOfAj4CfZdKqdj7WY2uI68uQkx6JiI1k7vzO6OcktMXtsQku9fVIGhJ1GlLolqqsA2cBZpsIyXGhoOJXf7hvnzwpCoE0Y%2BPNKey4q%2FihQswa9TfEBIzfMbbh9faLNgzZgyINKKJ%2F1Y9gxklNZuc2QQo4pQucAAJbZTJvToV5BCc9S%2F2ggraE%2FilOoOLt7dRmEXVUvSE%2BORsK5W1aZrFVNGvlRey%2ByXhx5Vcx0bcrWQ25EqJ%2BRnoq1ephFySqGXwOeD8KFPnaH12Q4ML25ClUq4rDAygiNRCywkmRDlIlZo1Hfuf1XfESqKQ2g%2F5WfHrnhgubYUq3HhSLfg4sDRUKSRrLemdQe2GjzXQ9HVk9kfL9kjD%2BRmwVAxhWiR%2BUZwsi3MVbdqSBp7gAjqte%2BYPmVQiUoAozil3VkGPAbQOnHUb%2B3C2zLQXRmpqbHy6He1NI96C0aaoJa%2FXgYxeHDrvIWMoCiADz1KWueRIOY7dqFzrCBE0YwyPBOqI5ynpKFVOPfF5vgKlKU7s9zEc%2FsNphfDTTtHoUpvjTo3D%2B9ig96M0aHSg38P2HJYdMMP8j78GOqUBK7vbW3XJmqoVjlKkkIj0tDuCd6%2F8gwiuBreIWMIiLOLIx53egytG%2FO6QlBjne7qeTNVBY8N%2Bu3wVFO7C1Ax9gt3qcf4GG61F5%2BudAfFhffK25u%2F53%2FNzqDVxG7L62YmYKAsyY2h1UWnrCVaKngl8H6kr72RGdJkFOfMCjZzd2xFRUcY843xwSfvHiRBRDAfJ4p6QaoCO1AIX4TmfIKbOZ6aCDWob&X-Amz-Signature=717a9a0f2c655bad9d87a079b16629f09d022b56b01ed03e4d699d5f1dfd6cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJJTKNPT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCBzVRJ7o9ulSemNj4l3AN7lPnnHj9SB1ZSbqUGxRmCgIhAPr3SF4PWqP13Qe9jLmVUnBx3U5%2BwM8oFDuhTJnHk1CtKv8DCC4QABoMNjM3NDIzMTgzODA1IgygjKpRCjbfmkCRJL8q3APpu6dctKdcqtSarlSWgrR4xfZK1RMos9t7naGPdBbaDWFos1Kv3EvT5zEgAigJJRGsp2koJ7e1DqOr8tsdOB6o%2BQkS0CVbxU%2Byw55Yym6PbyeAR0oGzRqPc%2BFLHjoVgrf63i4MWTXUbAXhc4FUC%2BQ%2FDnAyY2Ku5iLpXkcrZTypElNeO%2B9PRry3Lz0ChGi5%2BUqayzQN5VOhPa4cw3at%2FeOnkcTSAdgPeW3Xv8mlcd%2BcfiTH0dzkun3SvKxFNIpTVrYGuy3ULUz0ZJFYmdFVCLv2OhEgxv4mdUQFcb7MgiO5oqwiy1xQsyGfHdZ1iXE0bfUN14LYIn4liSsGKu%2Bd6inkNSq7pWiH%2Fq%2Bn1KOyVU%2FIvfpmcwyZdD5BoKBPVZLhEimQXxjheLWjU%2BA2V94rlYm%2FlfoZ5QPnW%2FWZPBpWfJ93ZOJwOX%2B8JG4QSz3TZF8jB8I9qJY3HgK1GrL0AgHsSBbHLldeJ%2Blpx7kmUZHR3kZbMImyencbGWvMZeFBNvdq8kgWPj9aUewQHwrUgFL8LY1BBKNYruo4Qf2poAXVFAXvexhN%2FM75V3oOcuKwRl7MBfTAThRuK%2FdZxH0AhyIg5Wjp5ixMwxTCEYMC%2FGtqp5J7ejgiIUX59qVYNBgbKzC%2F%2BY%2B%2FBjqkAW5UnLzhvVMoKtyE2oaIlctDP2%2B24mnPLwR5zeuFQ%2BXuZZq6B7hAjR9vT39s9rDLINlIZOUkJ9yMfQcKrLsgDKFBJG9DklyolMPKUJNF9yz3vlD6eUrxUfsP04i61WahnfZmedGnDoX2c034%2BeWqoy2yX5xBZE0%2BDNedXG9bkielG2DjcKNUuiIKmnTh7G%2B0%2FGgxJwjKRdqM%2F%2FxL9j4JTYLDevgI&X-Amz-Signature=2feccadf25f20a4229d2537732b6dc1c8f9df518fbcd195947a9c599a6198618&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMBY6X4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6dzAwMrhkk3RUCZqudKH3ukDJ90RIypDgbRl3kp24yQIgGg3eUup3wt7nEjjkIvRuqBXX917h61P3%2Fz8SpV62iIMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDnLyTfnb6eCHdwmDSrcA%2Brx2D2MVUaORigv3mrHGAblJZRh3gDAN15hLalSPLsIjY5l1B9RRZ8v4sbPPK%2Fe8DgVZj0n6toNx8LUaKxHZVa8a7TtqbhBCyyCD48miTJhdd16ECeU8JhCdKtBDm%2FdNDSXFQblkelgw%2FfgfvenXJNVdTm4ZjYQWCga8SGp08dJCYvk4PfuXRhcna0VyzDIjMIToNqymU%2BUpAUgO7SCCp%2BPoXsyGHmzRIKQe%2FzWVeRq1%2BLjdxBftDAA%2BJi4Q%2FA7FFYpCLND8aexXY%2B8J4n3LRzmxMnt%2F%2FWTxxPRVDQrCTcI5%2FPUgDmq10VuNkTIUiNJTgVV8QLSplnZOxzM9xsVKHF5bczvoOj3e%2F%2FjCuUZfxOjKtvimVevq7jWC89krmqAdeRH%2BRtOQV1FosXk%2BeFLK4n3xDtyVYRnYCDA%2FktZ5babAmtT%2FjhQ1tpb%2FaSJMOHR0VwXoxqKRleIhCe7TKyend7BQE%2BmkEM8qU6EPG4droVeczs%2FAhZVhoYk2QKeM%2Bsqlo9e5lQ9g9fsm72GIOxReOm3HExe1W7ln%2FvYEgDEwEY45tCE30jXcVLa7OFrYqJ51P6PNzAuQ5%2FlgWtDWuZpO1UuAHSk%2FQVhWaSUn2%2BAcJVsXaQJHVH7ZiHfODbdMKX8j78GOqUB1rCK6XQAsI69fttAwZdN1VnJsdhJIIlzhLKfIxsxm%2BO8puTlNTXITuBpPCwf%2FmwnXYriG2eZfszCfB7bhQ8xd85Dlgqtyb27lY41w3kPUFUc3IOAVqbQy1clvB86uGEJN8yzGoqf6ZYRZIjuL10MNRtFhUtTEOY%2F60ZD1rfaxEcfFNOabEaMrYQKKhxuSb2h6eUsWwujMf7xIMULFk1lIkPGrM42&X-Amz-Signature=e1cf7c90ab088b1250b15c51e298f30a6e53d502fa8d7f6635e7e681f19883d4&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIIW6AY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECOCZj9PDEX5LVPA3ccHV%2BD%2B8UiZqn1sXS8hS6HMzrwAiEA1iD49Cjr2KcjR1QEbCSnOuOwYRpvcODlyxpsDUQR1pwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJIuU7o19JaA%2F7HmLyrcA9Dt%2BMPCdM6QeNSbay4GUqann5YdaWH0plPAJg%2FZg6kFbjQUVLsj%2FOIZOxjpN8xWPqW0e8m%2B6ojrwV4LCq9gdOvToFNDWZF5%2BxsG1PZ2mwxrZ%2FL9z5Ch2OKw1GggEQ2bcnk68tOFddWnMfPzt0g5ARF3GKRDMXm96mN5JPhrjIiNsakUv2o8WvALokGwDJrFoJdVjcKJVsDmC9rXR9m9pXMLan%2BLqE73tsRGNaJzqlwEVAdvHk8PJ6MZglBa9v7SEhVRMJ9KvwKhF3ug%2Bz5p%2B4CUu6ZSwSlk4WZLW%2FW9S4mlN74wSTzDDcHyzUu4uB6DtbnG2Y%2F1ZxUnkNZY2%2F0bsDFZgQiEi%2FsbqmJHd6%2BIlYOqOnHLCCda3TrhmPjV4vHQi4tLYqV1n7rMDY1%2BgJxJ%2BjqHAr4EsItMSgTovk7BSGooipfJSlrthd%2ByjDIykPPjUSV9eMC%2B2YBdzGpEA2FxH4x5c1CtEX0DMo4h8wc7M%2Fdy709Sb7NZegEUWUEBhnI7gt%2B%2B5hxgI5PGD0EoLNfpt58BK1nyCfhNxV8U4huA9V1BxrA9jXrzpiDxStsZ9g7SfKtgsq5libUHJvH2pG4ieEY0BIYsEa1PFwe0WIap4lUB7GdKQhJ59CRTP163MK%2F8j78GOqUBlqPpic0uPqGIcwUho%2FVM44QkE1bs%2FOq0Ds770ZsDc2MvNCrdF%2FofLKsC0InF6IGPh9PhGCOTWRKpIG%2BjAVBee1aR4wWEdtEOzVVNjcqL9GOWHfUztg89IIUXGSy7a4AXEaW9fCLON39tKqwVI0wcNXfxLqfl5iyzyhzltbLV76gNvHfsni0NQW7IGVGOFWrSFxGH0IUVMMFPhdorp50%2FheLHil3T&X-Amz-Signature=a226bf4f2fe774bb7a64b08d385a9f36e8a672a1bd9b72e73e2af69443b7232a&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627I4CJP5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T141228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFsdxEjRGfTwl5h8rRt8d1xCncUJJdse2qPUFTdP1rYOAiEArrHJnF4mVwqt4CKVf4M556LEKR%2FvBQRKRQ2ygSCBfzAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA4QEdYig4JXcMSPNSrcA3jyf2UWZQUY3yI7gafjJSHBFuRoRk%2FeetyxQ7W75B4V%2FFU7GYTzM3V7CncaFxHb01OR8ozIAs2XmuDx3ZS8p3QXJQPwyUxEXfF8bSOj%2FKP%2FFwXjTlCiPSEk1k%2FHFaSM1gTzHiGmgkOp2JwfMiAeQJ22d%2FXEZCjoYBuI8VfVJHagr4Ra%2FqdONuDDKCkjpDb0KJMps%2F3%2BlTaMWybf9G2V2iNUscCr1U8lNr97G%2FFJrtcaCqbszLzxqVfc5rBDMAPOBwD%2Fq2AqNRMTH%2FKE9pHyiSwbEU%2BRdytYvB7BLIVx%2B5lYOmvsTRagPeNHik2mfq8Xn%2BkBmddjwYBxuz19AX8WUhfr8d0QTPW3yKkuB96HrbQg7IjjdX%2FLVQ5zCqzwXG%2BFEzIxB1tM17viybkytJC8AbXKAfKNu0F8nLK3mAXVFroZ%2F5FUAgN4FY9W6Y9hBkA6WUo6aCcJdelM5TVIGfLO7dz1bH22nzFA1TdI9imlE4mbfeiZzNsWnf%2BSmM95eWsndGfm7S1a0s7GEVtTtEMw9ym9HRg6EnsapIIJSsYlpuJrKfUKHUNq97vuiiVJeBnLajXT5iQDrePaXfYZpcuE8IBwBxc28NGxuhrvtQjcoEOEzeNUD9VwzSCDcRk%2BMMX8j78GOqUBcvbExhMN3VS8ICoUq5P5RHuondl5003riM%2Bhcc0Bxf9%2Bgwj7yadHclU03TzOg2W%2BWjXlq1b81nQ%2FA667rwGXwgLfOfkfhYn4HDUmnFJ4oaMtrXb6GQ9phfvDOhlQ4Bjm6zGi%2F7Ur21drn0FvXzn%2B3mlF%2B%2Ftqm0xyNrXswbo4y4sJEbZ5eyNybYLw9dY58oIKC3hmcDrunkix%2FE%2Bxljt5WXeLKfq1&X-Amz-Signature=fb3c310add91745a8cb8b07e25835d637a9f90bcabfcdee437032ffd0371ca0c&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

