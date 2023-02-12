package eu.dobschal.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "xdc")
public class XDCEntity extends PanacheEntity {

    @Column(unique = true, nullable = false)
    String name;
    String description;

    @Column(name = "image_uri", nullable = false)
    String imageUri;

    @OneToMany
    List<XDCPropertyEntity> properties;
}
