# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QWJYWF6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDxb39I%2FLAsK%2FA7UgdBoffADsvodUeWIzxy7spgzswyewIgcrZSxfUDXzFAxeO5HrP6n87UakN00r2xqCsTet0x27EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsunarqa%2FiALqX2RyrcA9Pcf8b7fvIiJ4S%2B2M5nM0CQMwcZuS1DyEr5hBJ%2FQ2Ki9WEKZ03O57GKi0HCGCp2mNjFzUSAZP4OZMkzUgB%2F4eVA1lmUmTWiznHfaewX52xnErIfwJKlClsgTjoXvdmujZ9mSTWaXyYJ73hM3B0cmNwz4F7qj8H99HKEdgVnNGX53nbCm59VQsI6OJOWvVJbthzKQ5UHpOlWm1YI63OI29n5qNzRDcNap1oEpuAmAAYbH0Od5yaUU3RqO40ErjbiPXclnxj3EZtTFkxHQfmIKD8fWMDDgNo18Zcxo8TYNv%2F5EyBkeup4Ieiq7W6vZIvxv92Mw2nWAqowePyMrF0PXDW%2FVai7c9WmOC8Ti1vdp4o19Bo4DbwV4RIMi6y56tgsRwlkBUDVOqiLDA6yqQ1WhdN7PgZCfwlv7r5orXJRJS1gDZLobG6vp6eDZnlmH16F%2FqMc8hf6KhqRtk2A4C%2Buq4FNO5cMYAwtkB2f7QfLCWpEF0WI%2Bl1hJaEucY4UJvXlUEXnB%2FWSUFIbtGD65sK9e1u%2BWx%2BT6VwU6YI6cLDfEgKJcX34sD1yRYAggyxCrSxPV8fBssNuUrexz4QN46Z5GYeOvu%2FuH7C5vjsiQQwAgiZugVHVK%2FGq7KiQg7gqMMul8L4GOqUBmWZD31bmua2%2FsR2vYERsmtcSKxSby%2B83PENB8PsCdBD7mrU1EVp12k3FYFQxDK1NjlQKUlCtdFvnDI8Eio04Fur51l4XvNqtdtD7DxFqkQurwk4TclHGxhq%2BRajJCEr6Q0DMDxj6EUPWlNqrrsO%2FfwYHJeTAf9JfuP79Jn8%2FkBt2iYlbpCAjWgtKmOBSJlYvOUR6B9kEZRrVgZExWJFE5Mng4t4O&X-Amz-Signature=b945b97ad21f062ad92a606d2d910c361ce86704577a12de071c6d24c215a135&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBTJD3U%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCWtvdNsU0XA2KAzRwxtwHjMZD0mVGCr8rB8ct67pEFVwIhALgLXBjYTQAvk%2FNfkCTJD9VJNeXsqP6W%2BEzQkaHm3Cs7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWB8jN3I%2B5hniEMCEq3AOCNfsfe3aCUCbdvu75OEbod0qaLq8x1UA%2F3sA104gAobymLaeCgRU1cvsB0BWmVPuKNNbg3d2VHGaGHKZ%2FMk%2BNj6hMFFhi2M9mkxULeOh%2BgAFvudgXR83l7Nk4FEl27gv4kdPa0%2Bvat54Rir9podJxld2NeRdZQ3ombFhQ8Ona8jSj1zop%2B3CqNApurvDJOmLJoHr%2BvTaYA%2BVsrxsLL1GmKV%2F8vGf0ITQV%2BlMZCODRLHpkJgWe2h3iDBFn61vI6tIc0fDoRPbDXZyHiC5m28N4cSjwC4yGYWpbz6y32wLk3ZTkzRLGxCVX7f3Wux1wuNZQLYriRBpAzuAWhzAjBdeAY9Xz2uK2AMgFYxJMpMbtcDeHTkSjSt9eqEgOWvkE5leN5j4Z4PD7%2BRbfu4dWocaOtcOmPvHqG4FbpZaWuHqMTuO4ZpNc56pp%2Bt5AqqLlbtUXR3m6o2IHci8xeDVlUBGFlA8aeU64q7nTI3I1vusx5CpiQzegrvzxFWFd7blkeCKzDF4Q5cy665eGa9GdDVhVjWEKxRsCVz1kAEvKFaVUsyTXnTVLCw6NKgfRQobAUA%2Fdtj3z8TiVNYELSgpIZO56t7v0UhGXHzeFOJqWY4bOUzFBTpV05dbRE7Vd4TCgwfC%2BBjqkAXV%2FT0itKtFuAE9zD7xOeENKcPTdWjwnsIUTobUDwTi862luguTLeha6dVlEcVFHdGliiULyaj0yNhA7MiGp1k9krdmjeUwmE5lyePkmqjr5XigJQ74Pj6yGdEdZYA350h6owD9wIkXAnnq25UU0h%2BDkfaMFKCDoOr291lXU30GytrgrswI7KsJfDnFoh3sMc46BVF4T8%2F0pYsa1oYboaM%2BAT7Q8&X-Amz-Signature=06610934bfe999ae102f737540d2df91bfddd05e74b338d6814aa573b64acdea&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDX34U57%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDC3D17Ye%2BzEPb%2BjBaUmFBO0oZ%2F5EaxgCQwPWAT%2FGwIuwIgKK1PaLKV8eZ3lFx6sCJ2lLoF3L%2FDipTvzD5oxEW24bAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZqvS%2FATLN1%2BRJArircAwcGXgclxRQczS97Wom8BS3H39waoxHqAJ0GcbjafPfiu2awdpVXUMoI%2Bt6oP5zIpxh6RfdiVB%2BBir2PdWaPp3OE96W9SMA1duEDPR7H2OaCppyURGAqV4I5O%2FbfEluyRUJspV0XSq5zDI4Vk8%2FC%2F6Atrjwb%2BGYgi57ihmhbSgkPVFJu4LODd8RIxJZdfcSskYf5YQ8UVT2a%2BVtv7cV%2FsODORlFMYNQUOeQvbqSAgsYf0sInkeQPEa2YHvkcQlC81OHgQGQILHQ%2FmIBVQjZhw5S%2FmExqT2mgRmabJF1q%2BDe4TFNM4aUsoXBON%2FALh%2FLbtrNevFIoOaSzS7IjiwgWGqSf2oCq7YhS3rD1tODD%2BYKEtMS1ofuXOr%2FYCwe2UrHUJT6tEbxdpb%2BkuaS4S7hLQD%2FGA1GlnhO3bUO7AH13HdcH6Wb8k%2Fq0Wr3IWOfx10yRYd0qft%2FuCa00F4EHEIXiO7%2BJMZnaxkloVOzxZKM6rRyQWbP5p2WFMEEQ6IRqA4EMcKvaX87gIhbK7inzxhpELfbZsPsQiqQWS%2Bx%2FTgT4SA3Th6O3Y2w1l8U%2F3s21oB2DEchP%2Bt%2FnYE1BsUnkOguC8NZYpcGRg1lCOc3yAo9W5IkPfPyml%2FqxdDkkXmLSMLil8L4GOqUBuCXHDor78Ija8o6ceetE33ztd9Iwv3b31rOoqUtWx6slSlOg%2FvS5ZyKdcz8LzY2cx92q3I4rxUtKSNNZ68GoxlzpPYoUAAT5c7k1bRJ%2BAb%2FoFjMnDfrrTiNKVePT%2BxrI3ZOOrzkEFS7I5Q4uG71Uf3QQ66zVNd%2B8PXxTyyiglgdGeAhxHQ9oyJ7JZjeMgwnBpAqlC1rJDBEg6Bc70u8aRaAMwf%2Fj&X-Amz-Signature=098d8cf3533ca6c2b2b9adca862d10b2fdbec06e2c78398246294e49f6e368fc&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT5TGFVC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDxDzo%2BVSFBEQyw77pMEGz2taZG6XVJs76e6Mwi2hX08QIhAOFuUgiK5Zo53%2FLFhMVd1uL79PDefSjYpIiUJwEtVHP4KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiXaSpBVGGHEPh5ZYq3ANXqJNAFPpPmkHhedJ67a50uHxI%2F4Wrt0HRSZwlnTF9SiVPs18SkKvJ3IZzaEjKiFHBgCLOeqSHuTbSPrW0jTh3S%2BRjTz%2B%2Ftdn1mOyE1MLmHGFagozuLRRRN%2B5H8lwuwuumi2m9Upj6G%2BAOKUiY1S4X9b0Wwgf8MxA29hgSyLOwHXOelFz45jbRdRGEIOR8g9uOcMmfAVGtHpPcFXFNiuiI%2B6Dr0gEakzRTfbyuJ7g2CbtVOaqRa04CseEnmkrtzPBmO5qFypkypOeiF9F3I%2Fbb0qekRgXKW5qhd6ACLmKClCrW0OOf%2Bz9NsRiut%2BFYwtLPEe7MnIWA4%2BEEMJ1%2BrCjmBJFjoB4HDPFSyJ53iGegtNDzIfFvBYYtDOvEbSEo80LG6x2WNG9mcrpm3o7XykQoDnnhj0CUDi22nijzXFRKhVcvFMKFpst9qmWsr98Cf0%2B%2BsP%2BTc4gfdSDxwyseS1%2BhSRSE4nqVVEIDHRfs0GuAP6R5k1i1aRvFkPglV8P3gcI%2B35aCxU8NrJb4VDSVZ%2FD3O%2BElvDE38rgXqGr6r4kYA7abg%2FrC5BS3UXhT%2Fc5sGAEwdp7Pld1MdE3tso7hzUZbSWwIEL8JhTyMDkdbgJY4fP0KfWQ6h5GOEZrjBDCtpvC%2BBjqkAXjjksnhgnxJ55zCDJfbh9zdeBJoh5rPAzE8VMlyFAFKbtV5qJTjDUoyfCvyeST%2BN8bg6jRkAj4MEjDD6yiWB8hvHgZXZRE13d%2FrLKloyUo4Jj%2BPWe4PbjYjj2ERwN3O9TJdjRSTf8rQzBJv9aSZfkxjsmkHRbhYt105OTvh9Mv7CZsutbTvKcj7zQvhQAcKYDC6j35n8gs5zUq4OlFy2bwJ0ooO&X-Amz-Signature=e5e3f6f9d1a9002096d454daa61028896aeb6dea2b89e82389e4b551bcb372c7&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XZHTVZJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCGIW2SoJ9S8PYJyCCpUztPSEhHUNz0Oqwl4NtAbfA6cgIhAIPcrLTPyEVZzaXhgw5RfIm1v5ca8%2F06CeeX3qB%2Ft80CKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI0pSDsvj%2FsuhFP2Uq3AOAH1rnr6vaG8oOMUGntUfCySBq4VDBy65k1OeXj4r4PX69DZtaIODyCxFw32WxhoVfkVqC8QdBweoEG9evmDmPcGHSyQOvwOUnNVu5oGAmrIS%2B%2BOe5eIM8cTHDfHRUBx3IJWLbNyALLZxB%2FAWxl9NEt1c4XNCWKVtN5Zv44ka%2FPk0UiM4DjunRLifGImx0u7Szk87tTQ11YcuVzxtK1uJU07HPk66iIzGNWUb%2Bklow4HL%2BJQHWaT1oOVTDm1g1UCFiQaRVWjrfZmnV7fzsICV6tbSorwp9yy9IjhE8bW6z8P4myyy%2BQwLTFM38R%2FPvu3B0P5equw2Y6tdDye4z79X48atf7TLr6W4Pln4BMl5JFbbNinNQ4TGfvmpSd3TXY59Pr0A1lNMxUX2NFcD6xzj6KDL%2BMfakOs%2B2saEgs%2FnByOSA5xUM1qTpba4Mf4PdikT15nlmh5TzWfB8rMVEnPu8gcccINqIpnCU9E%2B19%2FYZ9TdmzvR2FBvFzBA1DPor0QfOYLENzfUAisKvp%2BBgxbT4AQHXygX5ZAbNMrFZBKcsThcThujSCNCda1j%2BYFndFot4Xu9TFiZpZpXLGnxNzAk2XR3hh6rHLuTyySgYr9IxDNoWAVQv8lsqpr6CETC8pfC%2BBjqkAavYJWWX41Stsj2utc2bHk%2F1c8EKeqEcm%2F87wB0YwzloI6jBfKN5UPysp1mkQiFxsAWRmu%2BaA8a5mr89KrmEgowpYq%2BMBYFMb4VM61kZqKkCDQw4KAzeqJKz14BfCChxcDLftUBUVPxj3ovzpWHiNRDWuNZIQo%2FlUa8SpduL0J3TekfLlwqyMA45jn%2F%2BYZYyCXf0a9CnfFHwxQEhzeMH96g3urBf&X-Amz-Signature=8dc8a7c59a4d33a9439b14e4f0c06f102db2bc8677c01043d6df315c9d42dcf6&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USU7ZNDZ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDA0ClMy35cPvpiXhrozRPfHP%2FzO2jVUx0hAsbJHjJ4mAIhAPbEbl73x4fHMkC4b6h%2BCBTXYEB0p%2BrXVQYZdvGNiIA3KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGZYI9149iEZnhq%2BIq3AOTvATSCdIE%2BVuwfOJz%2FZyYeP6FYQstOvHKlxKksX08hTDoEplhKI56Pxt86u0lacdnMlOaDIUOQkjiqu13nfWW%2FJTPakPJuLgAW5Twwv%2B%2BB8jVr3NblJVu2%2FXqbDwWuCESXvZijNY8tFWomzqL5nwj7cUHGp58dBzUf0cwGXmS3k1Eu0wALlFFxG6SFLdqTmH0kJifKviqov5SREdUp%2FCyx4K3QmUge29aFdEdNvyqKdhd5b7E4oInXph%2BT09X68JfBLytaBgVeujqqzn%2FkrWK0nrmTyTwjh4OmTqgtH2o2CfXt9xkGZwQjrpUs0nBTjj6ta7%2Fl336yUG3aZ%2FSmhZaj%2BmzT0ulMid1xCioAER8wqjy2pdbOxf3z6PO%2BitP3X23tLbGf8w7XUAZaVHGeMNXdIm0oz8o%2F268sZSNuitHUPvQfULCpSD0o%2BiawteWjokB%2BBGkjywwsJrjgMaFihNZP5O5uouQwbJY4%2BmDV70NS9YKKLnN1dYVwZi6AucjOkhRhm5KFYnYBRXGPq5HtGy%2F4Wgk1hdu%2BXnF8lYaOer4ooqY%2FTEH7Qv570EvNJAatjn%2BeaHIDok8oKR1G4UJO%2B484RTmTh4GCBKOzDvUEKrDbuI3zVwF7a7PEwCJ7TCnpfC%2BBjqkAR831v%2Fxul2K9hR8u2Qlf0g9FyDc83jhmmcnOevbAu3UaYtl7sCTZGe2RpfGbghvrDsoMMFnrUyVcTP%2BlqdrSIvwQ4PGk59zQrxW7fjRyebIE9RHaV6ulavD6caGiwP9avTe3fJElKUqnYsKZJUmBFqraO9xcqEiOK7CZYF0qotZRbQOHeEf4EJ1Ke6HKeucjSjMvywD2higM0HI85bm60P%2F0WgC&X-Amz-Signature=7113859a8b78b40a1b9aa270cbeec39bfa6180c9bfb303dbf042252e7ae85131&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACJIS6V%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCDjEReuomcAEakveaZBQ1ktSQDXTsdDub4XLq0GO%2FjoQIhAJsfiGE433etjE4NK%2FqyKfY4suZke5IwLBe%2FH9pkGyVNKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0p3tEvuYe55e9lVQq3AMFCHZtStWHc3DuxuuIEyQKoGet1qMGF6gHUTMxvCgpKmRKAuWo8BGB9cnCkKJuEzkI3JKA6MhuCUcza9zTS2LfrBdJxV8xKdureDFe16AQ7eqS%2Bsbbat6KMwaqwWEBh1lH3gek2iq%2BXHhWPQ61SL76vtIpjJy01CJ4968N5R7Tj4F6fd806IEVNvo5WYCCbqFPVzNJkXU9EQjn2a1jibaJ7rbN5WlBaA%2FNlAipisnibwfs%2FBkZ1iGtA9vOWWJNExr%2BP8XojebBMCqRPsnnRvnOVIiy5BrCo2dK%2FfwypswxkWd9Uj1KnD4RSsQhLZP8lxdcmxkRfpflIqZo3%2B2kmEskEwirAagJlkjSFtV5y9lfwn5agofcQeOZ9rggFOcdk3gdkj8P0r2%2BRQ0bfaLRIGqQfNUQvZ1GIzcxBksMKJvDZtqUwtopWfmWLH0owShfYyi2JoordrGX2G8ZSDxf2Pr8UGar3Tqwj8t3kJypX%2FAP2VEnUCGr%2FPAbSFy%2BkTZVaPu%2B5Xvwi4W8qZMRdP4PozyF%2BQWtTnG5j3dn8LMQtQvumnsMqUX8ZqoFmSSiLIxoecu%2FpRwy82bM3%2B%2Fr1sip3fu4h%2B3knNaNzjuonpXOtTso502RWP%2FrPtmVfEDHxzCxpfC%2BBjqkAd9aG%2BVe7NGNZ%2FAl6VZzPsjoBXgCcIWr%2B4APZl5Ve%2B5KuEhH6byg%2BvGRzy5ZkwslOAJdYElYG9IJH9NKhnpPOsseH8%2BCUogGvuvXnCcikCjPWu7oyHK3MkBKX3KbtxJVGoS4tn84fla4%2B9r9yLoLL%2FeSRZnqYxwKS5EYWJHsgL6GDiDYioTJ8edvk%2FCtN0uBcKV%2BN%2F6NRUFzFXkUb0U2MkvNK64e&X-Amz-Signature=1ab371de21e32602afd212af20a417c0ecd453174ab5632d84cf3caba4d9a305&X-Amz-SignedHeaders=host&x-id=GetObject)

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

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVE2CBC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIHQB9Fz4WAfoOuTQTWEosRsAS30HY3OboCoUPMsXCxk0AiA96Za%2BGXtzfq5vyIbgekRFsJDDtHgkHjaIi5PTVvFhwSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0c9ZUUf%2BHeykYkjpKtwDz3MM5qeVEOitDHpB4uWlpX42INgQ1ZJStoIQw9SP78a3kVE1Ee5azMVuuEHYPtrRkDQ3zT9II93TPipq3U7KnhJjsI0rFdnALEmiAJDtqMkniqhTkvc7eQEPiLsNfCc0uhnG2gT%2FPnG9VvGf%2Fj2e3DfJFcbsZ7GOIAdyZfyg6%2BTuqC5yfGgS3JyWYEyCWzZUJBr9C5lSjlL68G%2BfqPi%2BMziGk9ptet3IL77Ip74l6tEC9QGvwLx%2FtNIn7KPPIKs%2FSfwYZ648VMcVlR10fKoCrQSG2KH17lBcSFVmvOQMUUC5HfBUCxyIZLR3aoNc7kybPgjPhVvVcTr6Dbei2kj9xANqMZ3TVIqlT5xVW4HUQNm6vrItUn2CTpGRtaPnZ3IdSQVEeN1fqyP283W2b099iOizPKsxa%2Fvo%2F5bzTYQOeDpsctwtTA2cF5wKIoJHytHK3QBH8M9oIR0k4ygED2LWHT6581Qj9Jc735c61N2mzHyIgu0H2FU5Px8uiYQyr5agJ6kk1XamO1MlZJfRIfSkKq2ALEWIyQPZ%2FL8ehiX10bISD670uF2m2qFbShUqntcU73L5f6AxAK8NslRDlwZIpj4QARH7tKiP3rBgp7UZ1nD%2FO4jK0PHENaht2QAwxKbwvgY6pgFOd1ZNR%2BKvhQ4A8u2CP%2BsWwqg7vXa8VyFu3yV4ffwcLL4d5g816iXaY5OxmmTQhTpc%2BCusgSpgewe93uwwPhU6s33qK%2BlWNdlVsjN1Fagc6FkXqS0IdNHdft%2BluLjalgjDJljhArsgq6ktJJflbGMXKsHPBvVD7qxTBQbPs5vTIBx%2BMyGedHV92kGfMiTCLXdpdhzK87UXJKTjH05ejvtDy6WV36T6&X-Amz-Signature=8de3bb624ee4268d9ee5cce7f5b5883578695a9869baec24b4cb7b53bb29f309&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCO7XX7%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T141020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDBAW9gNI8c8x1YPZfN0937KOH%2BdKMq45d3yTv2Swo6HQIgGF4TXrUflTq0ZuL%2FAgqxF%2Bcf3GpGC8HukXWFPlEyTc4qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEBbLhBvSskqdic1yrcA%2BoeNVCL6KrLzeY4Gic9j9%2FZPHc4LRWV6RkOoF4UalhfcGYjnT8NWO4XiQ%2F0Y5xlOgIkRynMneLVfbj4yU5sO4FUZgvJHAPesRzbkTeCemZor8eR331cI%2F3SJdQ9qFRZXtIbT9Lu4879Fvg8lSwn0mjcCNiLWzbAAHOR%2FCoIfnxpuVBXPdztc9BTa%2Fl6Su%2FI4cTjXrTQvL0edbVPgd2JoYDoY36yseUiIRFE7c03KQxowIbM9VNMjCjQQTwvJjclk1wucWhjvaBDjH1TDJma7Rcd09MfVlp2bDh0bFdGmGllH3eKBCJWOvk%2FXsZEpOYCpJQfrmP4bqpiyvoAGzYwmU5YUpdnCz5QaoPdkw0T9W4HJU79pDxryfa7vpmMbSRar88qBiw35soRzBqtUoFMcDa11nDT71eM2XXCBImC5aBQAlFycFHTj57xT1Mh0stGdDNyDiJSUgfnb49gLq9icqw1YFBpHVJBBBNoGPqyk9SWjkMbqSdnD4zVQNPEr6kk3aS%2BOiniv2UIGKH%2FgAG4IodL%2FO3X3H4wjlZFgIMsfam%2FKCj6JUh8sl4mTQTfqpFy31OhOitQobLxkeQ2JSzBF%2B%2BHweMT%2BcihZVCPxM8bwe2w2GQV%2FC%2F5y%2F2oGdfDMMSl8L4GOqUB455BCcBh6bTMseP%2BnSVdPHgPtE8l49yQlD71eNDkpcVysEj0TESsjCPESE81EDe8YRlLZ2zTkDP6bfQJgQZOGv88WAVdTd9ip2TzV0vOwiap15uu2mGT%2BvR5EwqKQtviBZZblR0Mun9sFJOJVvBYWs6DVJIymgpHcwkBctl8Z5CmlDrgQYflOvWxYtpqa4x59XY9SEngUjKTaMUNS5bAZZ9N0%2Fgw&X-Amz-Signature=886869b4318520270a6e6a73580604e44b2a1576d3a603aecd7a5a75c74fcf30&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

